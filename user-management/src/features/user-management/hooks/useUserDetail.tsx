import { useEffect, useState } from "react";

import { getUserDetail } from "../../../services/api";

export const useUserDetail = (username: string) => {
  const [userDetail, setUserDetail] = useState<UserDetail>();

  useEffect(() => {
    if (username) {
      const fetchUserDetail = async () => {
        try {
          const response: UserDetail = await getUserDetail(username);

          if (response) {
            setUserDetail(response);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchUserDetail();
    }
  }, [username]);

  return userDetail;
};
