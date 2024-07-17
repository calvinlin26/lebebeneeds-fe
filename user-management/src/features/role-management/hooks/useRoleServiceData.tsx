import { useEffect, useState } from "react";

import { getServices } from "../../../services";

export const useRoleServiceData = () => {
  const [serviceData, setServiceData] = useState<RoleListServices[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response: ServicesListResponse = await getServices();

        if (response && response.content) {
          setServiceData(response.content);
        }
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchServices();
  }, []);

  return serviceData;
};
