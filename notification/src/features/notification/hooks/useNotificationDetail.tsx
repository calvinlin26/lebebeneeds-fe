import { useEffect, useState } from "react";

import { getNotificationDetail } from "../../../services";

export const useNotificationDetail = (code: string) => {
  const [notificationDetail, setNotificationDetail] =
    useState<NotificationDetail>();

  useEffect(() => {
    if (code) {
      const fetchNotificationDetail = async () => {
        try {
          const response: NotificationDetail = await getNotificationDetail(
            code
          );

          if (response) {
            setNotificationDetail(response);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchNotificationDetail();
    }
  }, [code]);

  return notificationDetail;
};
