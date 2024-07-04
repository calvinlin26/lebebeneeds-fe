import { useEffect, useState } from "react";

import { getUser } from "../../../services";

export const useUserData = () => {
  const [userData, setUserData] = useState<UserListItem[]>([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response: UserListResponse = await getUser();

        if (response && response.content) {
          setUserData(response.content);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

  return userData;
};
