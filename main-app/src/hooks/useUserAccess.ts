import { useEffect, useState } from "react";
import { introspect } from "../services/auth/api";

function useUserAccess() {
  const [accessUser, setAccessUser] = useState<[]>([]);
  useEffect(() => {
    const token: string | null = localStorage.getItem("token");
    const fetchIntrospect = async () => {
      if (token) {
        const response = await introspect(token);
        const menu = response?.menu;
        const service = response?.service;
        const access = menu?.map((menuItem: any) => {
          // services list
          const services = service.filter((serviceItem: any) =>
            serviceItem.serviceCode.startsWith(menuItem.menuCode)
          );
          // submenu list
          const items = service.filter(
            (item: any) => item.parent === menuItem.menuCode
          );
          return {
            ...menuItem,
            services,
            items,
          };
        });
        setAccessUser(access);
      }
    };

    fetchIntrospect();
  }, []);

  return accessUser;
}

export default useUserAccess;
