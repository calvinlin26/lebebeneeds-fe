import { useEffect, useState } from "react";

import { getActivityDetailList } from "../../../services/api";
import { useLocation } from "react-router-dom";

export const useActivityDetailData = () => {
  const [activityDetailData, setActivityDetailData] = useState<ActivityListItem>();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const activityId = params.get("activityId");

  useEffect(() => {
    const fetchActivityDetail = async () => {
      try {
        const response = await getActivityDetailList(activityId as string);
          setActivityDetailData(response)
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchActivityDetail();
  }, [activityId]);

  return { activityDetailData };
};
