import { useEffect, useState } from "react";
import { getActivityDetailList } from "../../../services/api";
import { useQuery } from "mainApp/useQuery";

export const useActivityDetailData = () => {
  const [activityDetailData, setActivityDetailData] = useState<ActivityListItem>();
  const query = useQuery()
  const activityId = query.get('activityId') as string

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
