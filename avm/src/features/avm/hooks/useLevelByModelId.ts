import { useEffect, useState } from "react";

import { getLevelByModelId } from "../../../services";

export const useLevelByModelId = (initialModelId: string) => {
  const [dataListLevel, setDataListLevel] = useState([]);

  useEffect(() => {
    if (initialModelId) fetchLevelByModelId();
  }, [initialModelId]);

  const fetchLevelByModelId = async () => {
    const response = await getLevelByModelId(initialModelId);
    setDataListLevel(response);
  };

  return { dataListLevel };
};
