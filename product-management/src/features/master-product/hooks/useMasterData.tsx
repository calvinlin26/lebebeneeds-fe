import { useEffect, useState } from "react";

import { getMasterData } from "../../../services";

export const useMasterData = () => {
  const [masterData, setMasterData] = useState<MasterData[]>([]);
  const [searchParam, setSearchParam] = useState<SearchParamQuery>({
    page: 1,
    pageSize: 10,
    search: "",
    searchField: "description",
  });
  const [paginationInfo, setPaginationInfo] = useState<Pagination>({
    page: 1,
    pageSize: 0,
    totalDataCount: 0,
    totalPages: 0,
  });

  useEffect(() => {
    const fetchMaster = async () => {
      let listParam = [];
      listParam.push(`page=${searchParam.page}`);
      listParam.push(`pageSize=${searchParam.pageSize}`);
      searchParam.search.length > 0 &&
        listParam.push(
          `search=${searchParam.searchField}:${searchParam.search}`
        );
      const finalQueryParameter = `?${listParam.join("&")}`;

      try {
        const response: any = await getMasterData(finalQueryParameter);

        setMasterData(response.content);
        setPaginationInfo({
          page: response.page,
          pageSize: response.pageSize,
          totalPages: response.totalPages,
          totalDataCount: response.totalDataCount,
        });
      } catch (error) {
        console.log("Error getting data : ", error);
      }
    };

    fetchMaster();
  }, [searchParam]);

  return { masterData, searchParam, setSearchParam, paginationInfo };
};
