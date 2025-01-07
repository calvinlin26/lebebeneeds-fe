import { useEffect, useState } from "react";

import { getStockVariant } from "../../../services";

export const useStockVariantData = () => {
  const [stockVariant, setStockVariant] = useState<StockVariant[]>([]);
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
      // const finalQueryParameter = `?${listParam.join("&")}`;

      try {
        const response: any = await getStockVariant();
        // finalQueryParameter

        setStockVariant(response.content);
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

  return { stockVariant, searchParam, setSearchParam, paginationInfo };
};
