import { useEffect, useState } from "react";

import { getAVMList } from "../../../services/api";

export const useAVMData = () => {
  const [avmData, setAVMData] = useState<AVMListItem[]>([]);
  const [params, setParams] = useState({
    page: 0,
    sort: "",
    search: "",
  });
  const [paginationInfo, setPaginationInfo] = useState<AVMPagination>({
    page: 1,
    pageSize: 0,
    totalDataCount: 0,
    totalPages: 0,
  });

  useEffect(() => {
    const fetchAVM = async () => {
      try {
        const response: AVMListResponse = await getAVMList(params);

        if (response && response.content) {
          setAVMData(response.content);
          setPaginationInfo({
            page: response.page,
            pageSize: response.pageSize,
            totalPages: response.totalPages,
            totalDataCount: response.totalDataCount,
          });
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchAVM();
  }, [params]);

  return { avmData, setParams, params, paginationInfo };
};
