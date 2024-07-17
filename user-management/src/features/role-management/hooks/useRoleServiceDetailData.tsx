import { useEffect, useState } from "react";

import { getRoleDetail } from "../../../services/api";

export const useRoleDetail = (roleCode: string) => {
  const [roleDetail, setRoleDetail] = useState<RoleDetail>();

  useEffect(() => {
    if (roleCode) {
      const fetchUserDetail = async () => {
        try {
          const response: RoleDetail = await getRoleDetail(roleCode);

          if (response) {
            setRoleDetail(response);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchUserDetail();
    }
  }, [roleCode]);

  return roleDetail;
};
