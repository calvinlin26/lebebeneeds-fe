import { useEffect, useState } from "react";

import { getStatus } from "../../../services";

export const useStatusData = (initialStatus: string = "incoming") => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(initialStatus);

  useEffect(() => {
    fetchStatus();
  }, [status]);

  const fetchStatus = async () => {
    const response = await getStatus({ status });
    setData(
      response?.length > 0
        ? response
        : [
            {
              id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              submitterUserId: "string",
              submitterUserName: "string",
              functionCode: "string",
              businessKey: "string",
              currentLevelId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              modelId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              modelName: "string",
              currentLevelSequence: 0,
              lastAction: "APPROVE",
              lastActionUserId: "string",
              lastActionUserName: "string",
              remainingDecisions: 0,
              userActionType: "APPROVE",
              userActionTime: "2024-07-09T09:26:10.430Z",
            },
          ]
    );
  };

  return { data, status, setStatus };
};
