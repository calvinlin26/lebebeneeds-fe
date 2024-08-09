import { useEffect, useState } from "react";

import { getBusinessParamDetail } from "../../../services";

export const useBusinessParamDetail = (id: string) => {
  const [businessParamDetail, setBusinessParamDetail] =
    useState<BusinessParamDetail>();

  useEffect(() => {
    if (id) {
      const fetchbusinessParamDetail = async () => {
        try {
          const response: BusinessParamDetail = await getBusinessParamDetail({
            id,
          });

          if (response) {
            setBusinessParamDetail(response);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchbusinessParamDetail();
    }
  }, [id]);

  return businessParamDetail;
};
