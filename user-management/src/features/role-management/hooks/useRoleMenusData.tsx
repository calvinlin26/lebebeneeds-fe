import { useEffect, useState } from "react";

import { getMenus } from "../../../services";

export const useRoleMenuData = () => {
  const [menus, setMenuData] = useState<MenuList[]>([]);
  const [menusSearchParam, setMenusSearchParam] = useState<SearchParamQuery>({
    page: 1,
    pageSize: 10,
    search: "",
  });
  const [menusPaginationInfo, setPaginationInfo] = useState<AdminParamPagination>({
    page: 1,
    pageSize: 0,
    totalDataCount: 0,
    totalPages: 0,
  })

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response: MenuListResponse = await getMenus(menusSearchParam);

        if (response && response.content) {
          setMenuData(response.content);
          setPaginationInfo({
            page: response.page,
            pageSize: response.pageSize,
            totalPages: response.totalPages,
            totalDataCount: response.totalDataCount,
          })
        }
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchMenus();
  }, [menusSearchParam]);

  return {menus, menusSearchParam, setMenusSearchParam, menusPaginationInfo};
};
