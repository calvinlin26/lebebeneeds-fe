import { useEffect, useState } from "react";

import { getServices } from "../../../services";

export const useRoleServiceData = () => {
  const [services, setServiceData] = useState<RoleListServices[]>([]);
  const [servicessSearchParam, setServicesSearchParam] = useState<SearchParamQuery>({
    page: 1,
    pageSize: 10,
    search: "",
  });
  const [servicesPaginationInfo, setPaginationInfo] = useState<AdminParamPagination>({
    page: 1,
    pageSize: 0,
    totalDataCount: 0,
    totalPages: 0,
  })

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response: ServicesListResponse = await getServices(servicessSearchParam);

        if (response && response.content) {
          setServiceData(response.content);
          setPaginationInfo({
            page: response.page,
            pageSize: response.pageSize,
            totalPages: response.totalPages,
            totalDataCount: response.totalDataCount,
          })
        }
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchServices();
  }, [servicessSearchParam]);

  return {services, servicessSearchParam, setServicesSearchParam, servicesPaginationInfo};
};
