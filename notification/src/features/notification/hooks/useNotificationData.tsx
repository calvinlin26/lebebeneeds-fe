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

  useEffect(() => {
    const fetchNotification = async () => {
      try {
        const response: NotificationListResponse = await getNotificationList(
          params
        );

        if (response && response.content) {
          setNotificationData(response.content);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchNotification();
  }, [params]);

  return { notificationData, setParams, params };
};
