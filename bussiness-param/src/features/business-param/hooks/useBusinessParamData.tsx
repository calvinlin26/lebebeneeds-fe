import { useEffect, useState } from "react";
import { getBusinessParam } from "../../../services";

export const useBusinessParamData = () => {
  const [businessParamData, setBusinessParamData] = useState<AdminParamListItem[]>([]);
  const [searchParam, setSearchParam] = useState<SearchParamQuery>({
    page: 1,
    pageSize: 10,
    search: "",
    searchField: "description",
  });
  const [paginationInfo, setPaginationInfo] = useState<AdminParamPagination>({
    page: 1,
    pageSize: 0,
    totalDataCount: 0,
    totalPages: 0,
  })

  useEffect(() => {
    const fetchBusinessParam = async() => {
      let listParam = [];
      listParam.push(`page=${searchParam.page}`)
      listParam.push(`pageSize=${searchParam.pageSize}`)
      searchParam.search.length > 0 && listParam.push(`search=${searchParam.searchField}:${searchParam.search}`)
      const finalQueryParameter = `?${listParam.join('&')}`
      try {
        const response: AdminParamResponse = await getBusinessParam(finalQueryParameter);

        if ( response && response.content ) {
          setBusinessParamData(response.content)
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

    fetchBusinessParam();
  }, [searchParam])

  return {businessParamData, searchParam, setSearchParam, paginationInfo};
}