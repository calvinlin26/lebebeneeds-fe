import { useEffect, useState } from "react";

import { getNotificationList } from "../../../services";

export const useNotificationData = () => {
  const [notificationData, setNotificationData] = useState<
    NotificationListItem[]
  >([]);
  const [params, setParams] = useState({
    page: 0,
    sort: "",
    search: "",
  });
  const [paginationInfo, setPaginationInfo] = useState<NotificationPagination>({
    page: 1,
    pageSize: 0,
    totalDataCount: 0,
    totalPages: 0,
  })

  useEffect(() => {
    const fetchNotification = async () => {
      try {
        const response: NotificationListResponse = await getNotificationList(
          params
        );

        if (response && response.content) {
          setNotificationData(response.content);
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

    fetchNotification();
  }, [params]);

  return { notificationData, setParams, params, paginationInfo };
};
