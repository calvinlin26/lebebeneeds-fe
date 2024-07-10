import { useEffect, useState } from "react";
import { getBussinessParam } from "../../../services";

export const useBussinessParamData = () => {
  const [bussinessParamData, setBussinessParamData] = useState<AdminParamListItem[]>([]);

  useEffect(() => {
    const fetchBussinessParam = async() => {
      try {
        const response: AdminParamResponse = await getBussinessParam();

        if ( response && response.content ) {
          setBussinessParamData(response.content)
        }
      } catch (error) {
        console.log("Error getting data : ", error)
      }
    }

    fetchBussinessParam();
  }, [])

  return bussinessParamData;
}