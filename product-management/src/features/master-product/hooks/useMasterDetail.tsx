import { useEffect, useState } from "react";
import { getMasterDetail } from "../../../services";

export const useMasterDetail = (id: string) => {
  const [masterDetail, setMasterDetail] = useState<MasterData | undefined>();

  useEffect(() => {
    if (id) {
      const fetchMasterDetail = async () => {
        try {
          const response = await getMasterDetail(id);

          if (response) {
            setMasterDetail(response);
          }
        } catch (error) {
          console.error("Error fetching Master data:", error);
        }
      };

      fetchMasterDetail();
    }
  }, [id]);

  return masterDetail;
};
