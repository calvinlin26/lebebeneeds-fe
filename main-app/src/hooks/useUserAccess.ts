import { useEffect, useState } from "react";
import { introspect } from "../services/auth";
import { useToken } from "./useToken";

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
  items?: MenuItem[];
}

function useUserAccess() {
  const { token } = useToken()
  const [loading, setLoading] = useState<boolean>(true);
  const [accessUser, setAccessUser] = useState<AccessItem[]>([]);
  useEffect(() => {
    const fetchIntrospect = async () => {
      if (token) {
        const response = await introspect(token);
        const menu: MenuItem[] = response?.menu || [];
        const service: ServiceItem[] = response?.service || [];
        const topLevelMenu = menu.filter((menuItem) => !menuItem.parent);
        const access: AccessItem[] = topLevelMenu?.map((menuItem: MenuItem) => {
          // services list
          const services = service.filter((serviceItem: ServiceItem) =>
            serviceItem.serviceCode
          );
          // submenu list
          const items = menu.filter(
            (item: MenuItem) => item.parent === menuItem.menuCode
          );
          return {
            ...menuItem,
            services,
            ...(items.length > 0 && { items }),
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
