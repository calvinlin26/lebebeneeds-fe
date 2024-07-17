import { useEffect, useState } from "react";

import { getRole } from "../../../services";

export const useRoleData = () => {
  const [roleData, setRoleData] = useState<RoleListItem[]>([]);

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const response: RoleListResponse = await getRole();

        if (response && response.content) {
          setRoleData(response.content);
        }
      } catch (error) {
        console.error("Error fetching role data:", error);
      }
    };

    fetchRole();
  }, []);

  return roleData;
};
