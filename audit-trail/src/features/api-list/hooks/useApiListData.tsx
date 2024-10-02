import { useEffect, useState } from "react";

import { getApiList } from "../../../services";

export const useApiListData = () => {
  const [apiListData, setApiListData] = useState<ApiListItem[]>([]);
  const [params, setParams] = useState({
    page: 0,
    sort: "",
    search: "",
  });
  const [paginationInfo, setPaginationInfo] = useState<AuditTrailPagination>({
    page: 1,
    pageSize: 0,
    totalDataCount: 0,
    totalPages: 0,
  });

  useEffect(() => {
    const fetchAVM = async () => {
      try {
        const response: ApiListResponse = await getApiList(params);

        if (response && response.content) {
          setApiListData(response.content);
          setPaginationInfo({
            page: response.page,
            pageSize: response.pageSize,
            totalPages: response.totalPages,
            totalDataCount: response.totalDataCount,
          });
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchAVM();
  }, [params]);

  return { apiListData, setParams, params, paginationInfo };
};
