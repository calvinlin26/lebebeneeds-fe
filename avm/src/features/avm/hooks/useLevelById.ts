import { useEffect, useState } from "react";

import { getLevelById } from "../../../services";
import { AddLevelSchema } from "../../../services/form";

export const useLevelById = (initialId: string) => {
  const [data, setData] = useState<AddLevelSchema>();

  useEffect(() => {
    if (initialId) fetchLevelById();
  }, [initialId]);

  const fetchLevelById = async () => {
    const response = await getLevelById(initialId);
    setData(response);
  };

  return { data };
};
