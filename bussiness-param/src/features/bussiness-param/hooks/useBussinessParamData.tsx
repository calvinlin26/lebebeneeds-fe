import { useEffect, useState } from "react";
import { getBussinessParam } from "../../../services";

export const useBussinessParamData = () => {
  const [bussinessParamData, setBussinessParamData] = useState<AdminParamListItem[]>([]);
  const [searchParam, setSearchParam] = useState<SearchParamQuery>({
    page: 1,
    pageSize: 10,
  });
  const [paginationInfo, setPaginationInfo] = useState<AdminParamPagination>({
    page: 1,
    pageSize: 0,
    totalDataCount: 0,
    totalPages: 0,
  })

  useEffect(() => {
    const fetchBussinessParam = async() => {
      let listParam = [];
      listParam.push(`page=${searchParam.page}`)
      listParam.push(`pageSize=${searchParam.pageSize}`)
      const finalQueryParameter = `?${listParam.join('&')}`
      try {
        const response: AdminParamResponse = await getBussinessParam(finalQueryParameter);

        if ( response && response.content ) {
          setBussinessParamData(response.content)
          setPaginationInfo({
            page: response.page,
            pageSize: response.pageSize,
            totalPages: response.totalPages,
            totalDataCount: response.totalDataCount,
          })
        }
      } catch (error) {
        console.log("Error getting data : ", error)
      }
    }

    fetchBussinessParam();
  }, [searchParam])

  return {bussinessParamData, searchParam, setSearchParam, paginationInfo};
}