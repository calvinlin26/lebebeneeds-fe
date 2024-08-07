import { useEffect, useState } from "react";

import { getRole } from "../../../services";

export const useRolesData = () => {
  const [rolesData, setRolesData] = useState<RoleListItem[]>([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response: RoleListResponse = await getRole({ page: 1, pageSize: 10, search: "" });

        if (response && response.content) {
          setRolesData(response.content);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

  return rolesData;
};
