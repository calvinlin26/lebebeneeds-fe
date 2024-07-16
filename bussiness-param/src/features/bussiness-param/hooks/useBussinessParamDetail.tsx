import { useEffect, useState } from "react";

import { getBussinessParamDetail } from "../../../services/api";

export const useBussinessParamDetail = (id: string) => {
  const [userDetail, setUserDetail] = useState<BussinessParamDetail>();

  useEffect(() => {
    if (id) {
      const fetchUserDetail = async () => {
        try {
          const response: BussinessParamDetail = await getBussinessParamDetail({
            id,
          });

          if (response) {
            setUserDetail(response);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchUserDetail();
    }
  }, [id]);

  return userDetail;
};
