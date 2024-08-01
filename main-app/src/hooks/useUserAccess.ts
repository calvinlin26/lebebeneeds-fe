import { useEffect, useState } from "react";
import { introspect } from "../services/auth/api";

interface MenuItem {
  menuCode: string;
  parent: string | null;
  label: string;
  description: string;
  icon: string;
  url: string;
}

interface ServiceItem {
  serviceCode: string;
}

interface AccessItem extends MenuItem {
  services: ServiceItem[];
  items: MenuItem[];
}

function useUserAccess() {
  const [loading, setLoading] = useState<boolean>(true);
  const [accessUser, setAccessUser] = useState<AccessItem[]>([]);
  useEffect(() => {
    const token: string | null = localStorage.getItem("token");
    const fetchIntrospect = async () => {
      if (token) {
        const response = await introspect(token);
        const menu = response?.menu;
        const service = response?.service;
        const access: AccessItem[] = menu?.map((menuItem: MenuItem) => {
          // services list
          const services = service.filter((serviceItem: ServiceItem) =>
            serviceItem.serviceCode.startsWith(menuItem.menuCode)
          );
          // submenu list
          const items = menu.filter(
            (item: MenuItem) => item.parent === menuItem.menuCode
          );
          return {
            ...menuItem,
            services,
            items,
          };
        });
        setAccessUser(access);
        setLoading(false);
      }
    };

    fetchIntrospect();
  }, []);

  return { accessUser, loading };
}

export default useUserAccess;
