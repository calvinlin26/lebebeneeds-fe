import { useEffect, useState } from "react";

import { getUnitData } from "../../../services";

export const useUnitData = () => {
  const [unitData, setUnitData] = useState<{ label: string; value: string }[]>(
    []
  );

  useEffect(() => {
    const fetchUnit = async () => {
      try {
        const response: any = await getUnitData();

        setUnitData(
          response.map((item: UnitData) => ({
            label: item.unitTypeName,
            value: item.unitTypeId,
          }))
        );
      } catch (error) {
        console.log("Error getting data : ", error);
      }
    };

    fetchUnit();
  }, []);

  return { unitData };
};
