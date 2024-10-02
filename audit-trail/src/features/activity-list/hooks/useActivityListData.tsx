import { useEffect, useState } from "react";

import { getActivityList } from "../../../services";

export const useActivityListData = () => {
  const [activityListData, setaAtivityListData] = useState<ActivityListItem[]>([]);
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
        const response: ActivityListResponse = await getActivityList(params);

        if (response && response.content) {
          setaAtivityListData(response.content);
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

  return { activityListData, setParams, params, paginationInfo };
};
