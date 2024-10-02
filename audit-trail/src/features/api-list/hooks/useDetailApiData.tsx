import { useEffect, useState } from "react";
import { getApiDetailList } from "../../../services/api";
import { useQuery } from "mainApp/useQuery";

export const useApiDetailData = () => {
  const [apiDetailData, setApiDetailData] = useState<ApiListItem>();
  const query = useQuery()
  const apiAuditId = query.get('apiAuditId') as string

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
