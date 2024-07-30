import { useEffect, useState } from "react";

import { getUser } from "../../../services";

export const useUserData = () => {
  const [userData, setUserData] = useState<UserListItem[]>([]);
  const [params, setParams] = useState({
    page: 0,
    sort: "username",
    search: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response: UserListResponse = await getUser(params);

        if (response && response.content) {
          setUserData(response.content);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, [params]);

  return { userData, setParams, params };
};
