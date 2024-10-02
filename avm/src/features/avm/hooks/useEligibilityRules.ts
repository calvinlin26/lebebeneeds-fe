import { useEffect, useState } from "react";

import { getEligibilityRules } from "../../../services";
import { GetEligibilityRules } from "../../../services/form";

export const useEligibilityRules = (initialId: string) => {
  const [dataEligibilityRules, setDataEligibilityRules] = useState<
    GetEligibilityRules[]
  >([]);

  useEffect(() => {
    if (initialId) fetchEligibilityRules();
  }, [initialId]);

  const fetchEligibilityRules = async () => {
    const eligibilityRules = await getEligibilityRules(initialId);
    setDataEligibilityRules(eligibilityRules);
  };

  return { dataEligibilityRules };
};
