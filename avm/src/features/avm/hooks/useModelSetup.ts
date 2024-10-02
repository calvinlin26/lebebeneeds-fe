import { useEffect, useState } from "react";

import { getModelSetup } from "../../../services";
import { ApprovalSetupSchema } from "../../../services/form";

export const useModelSetup = (initialModelId: string) => {
  const [data, setData] = useState<ApprovalSetupSchema>();

  useEffect(() => {
    if (initialModelId) fetchModelSetup();
  }, [initialModelId]);

  const fetchModelSetup = async () => {
    const response = await getModelSetup(initialModelId);
    setData(response);
  };

  return { data };
};
