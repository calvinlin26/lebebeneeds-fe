import { useEffect, useState } from "react";

import { getRole } from "../../../services";

export const useRoleData = () => {
  const [roleData, setRoleData] = useState<RoleListItem[]>([]);
  const [searchParam, setSearchParam] = useState<SearchParamQuery>({
    page: 1,
    pageSize: 10,
    search: "",
  });
  const [paginationInfo, setPaginationInfo] = useState<AdminParamPagination>({
    page: 1,
    pageSize: 0,
    totalDataCount: 0,
    totalPages: 0,
  })

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const response: RoleListResponse = await getRole(searchParam);

        if (response && response.content) {
          setRoleData(response.content);
          setPaginationInfo({
            page: response.page,
            pageSize: response.pageSize,
            totalPages: response.totalPages,
            totalDataCount: response.totalDataCount,
          })
        }
      } catch (error) {
        console.error("Error fetching role data:", error);
      }
    };

    fetchRole();
  }, [searchParam]);

  return {roleData, searchParam, setSearchParam, paginationInfo};
};
