import { useEffect, useState } from "react";

import { getUser } from "../../../services";

export const useUserData = () => {
  const [userData, setUserData] = useState<UserListItem[]>([]);
  const [params, setParams] = useState({
    page: 0,
    sort: "username",
    search: "",
  });
  const [paginationInfo, setPaginationInfo] = useState<AdminParamPagination>({
    page: 1,
    pageSize: 0,
    totalDataCount: 0,
    totalPages: 0,
  })

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response: UserListResponse = await getUser(params);

        if (response && response.content) {
          setUserData(response.content);
          setPaginationInfo({
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
  }, [params]);

  return { userData, setParams, params, paginationInfo };
};
