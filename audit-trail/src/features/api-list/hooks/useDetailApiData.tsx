import { useEffect, useState } from "react";

import { getApiDetailList } from "../../../services/api";
import { useLocation } from "react-router-dom";

export const useApiDetailData = () => {
  const [apiDetailData, setApiDetailData] = useState<ApiListItem>();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const apiAuditId = params.get("apiAuditId");

  useEffect(() => {
    const fetchApiDetail = async () => {
      try {
        const response = await getApiDetailList(apiAuditId as string);
          setApiDetailData(response)
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchApiDetail();
  }, [apiAuditId]);

  return { apiDetailData };
};
