import { useEffect, useState } from "react";

import { getBussinessParamDetail } from "../../../services";

export const useBussinessParamDetail = (id: string) => {
  const [bussinessParamDetail, setBussinessParamDetail] =
    useState<BussinessParamDetail>();

  useEffect(() => {
    if (id) {
      const fetchbussinessParamDetail = async () => {
        try {
          const response: BussinessParamDetail = await getBussinessParamDetail({
            id,
          });

          if (response) {
            setBussinessParamDetail(response);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchbussinessParamDetail();
    }
  }, [id]);

  return bussinessParamDetail;
};
