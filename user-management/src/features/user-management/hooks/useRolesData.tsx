import { useEffect, useState } from "react";

import { getRole } from "../../../services";

export const useRolesData = () => {
  const [rolesData, setRolesData] = useState<RoleListItem[]>([]);
  const [roleSearchParam, setRoleSearchParam] = useState<SearchParamQuery>({
    page: 1,
    pageSize: 10,
    search: "",
  });
  const [rolePagination, setRolePagination] = useState<AdminParamPagination>({
    page: 1,
    pageSize: 0,
    totalDataCount: 0,
    totalPages: 0,
  })

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response: RoleListResponse = await getRole(roleSearchParam);

        if (response && response.content) {
          setRolesData(response.content)
          setRolePagination({
            page: response.page,
            pageSize: response.pageSize,
            totalPages: response.totalPages,
            totalDataCount: response.totalDataCount,
          })
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, [roleSearchParam]);

  return {rolesData, roleSearchParam, setRoleSearchParam, rolePagination};
};
