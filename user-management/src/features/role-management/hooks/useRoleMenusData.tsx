import { useEffect, useState } from "react";

import { getMenus } from "../../../services";

export const useRoleMenuData = () => {
  const [menuData, setMenuData] = useState<MenuList[]>([]);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response: MenuListResponse = await getMenus();

        if (response && response.content) {
          setMenuData(response.content);
        }
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchMenus();
  }, []);

  return menuData;
};
