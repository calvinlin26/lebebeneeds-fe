import { useEffect, useState } from "react";

import { getMarketPlace } from "../../../services";

export const useMarketPlaceData = () => {
  const [marketPlaceData, setMarketPlaceData] = useState<
    { label: string; value: string }[]
  >([]);

  useEffect(() => {
    const fetchMarketPlace = async () => {
      try {
        const response: any = await getMarketPlace();

        setMarketPlaceData(
          response.map((item: MarketPlace) => ({
            label: item.paramValue,
            value: item.code,
          }))
        );
      } catch (error) {
        console.log("Error getting data : ", error);
      }
    };

    fetchMarketPlace();
  }, []);

  return { marketPlaceData };
};
