import { Button } from "mainApp/button";
import CustomPagination from "mainApp/pagination";
import { useBussinessParamData } from "../hooks/useBussinessParamData";
import CustomTable from "mainApp/table";
import { Input } from "mainApp/input";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Index: React.FC = () => {

  const [keyword, setKeyword] = useState<string>("");

  const navigate = useNavigate();

  //use custom hooks
  const { 
    bussinessParamData,
    searchParam,
    setSearchParam,
    paginationInfo
  } = useBussinessParamData();

  // Columns definition
  const columns = [
    {
      header: "Category",
      accessor: "category",
      headerClassName: "text-left font-bold",
    },
    {
      header: "ID",
      accessor: "id",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Order No",
      accessor: "orderNo",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Type",
      accessor: "valueType",
      headerClassName: "text-left font-bold",
    },
    {
      header: "UI",
      accessor: "frontEnd",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Description",
      accessor: "description",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Language Code",
      accessor: "langCode",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Text",
      accessor: "text",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Active",
      accessor: "active",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Action",
      accessor: "action",
    },
  ];

  const data = bussinessParamData.map((item: AdminParamListItem) => {
    return {
      category: item?.param?.category,
      frontEnd: item?.param?.frontEnd === true ? "True" : "False",
      id: item?.param?.id,
      orderNo: item?.param?.orderNo,
      valueType: item?.param?.valueType ? item?.param?.valueType : "-",
      description: item?.paramTxt?.description ? item?.paramTxt?.description : "-",
      langCode: item?.paramTxt?.langCode ? item?.paramTxt?.langCode : "-",
      text: item?.paramTxt?.text ? item?.paramTxt?.text : "-",
      active: item?.param?.active === true ? "Active" : item?.param?.active === false ? "Inactive" : "-",
      action: (
        <div className="flex flex-row gap-3">
          <Button onClick={() => navigate(`/bussiness-param?action=1&id=${item?.param?.id}`)}>Edit</Button>
        </div>
      )
    }
  })

  const handlePageChange = (page: number) => {
    setSearchParam({
      ...searchParam,
      page: page,
    })
  }

  const handleChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  const handleSearch = () => {
    setSearchParam({
      ...searchParam,
      search: keyword,
    })
  }

  useEffect(() => {
    document.getElementById('bussinessParamTitle')?.scrollIntoView({behavior: 'smooth'})
  }, [bussinessParamData]) 

  return (
    <div className="flex flex-col" id="bussinessParamTitle">
      <h1 className="text-2xl font-bold">Bussiness Param Service</h1>
      <div className="flex w-full justify-between items-center mt-5">
        <div className="flex gap-x-4 items-center">
          <Input 
            variant={'default'}
            fieldSize={'default'}
            type={'text'}
            placeholder={'Enter keyword'}
            onChange={handleChangeKeyword}
          />
          <Button onClick={handleSearch}>Search</Button>
        </div>
        <Button className="bg-primary" onClick={() => navigate(`/bussiness-param?action=1`)}>Add New Parameter</Button>
      </div>
      <CustomTable 
        columns={columns}
        data={data}
        caption="Bussiness Param Data"
        className="mt-4 border-collapse border border-gray-200 shadow-lg"
        headerClassName="bg-gray-100 text-gray-700"
        bodyClassName="bg-white"
      />
      {
        paginationInfo.totalPages > 0 && (
          <CustomPagination 
            currentPage={paginationInfo.page}
            totalPageCount={paginationInfo.totalPages}
            onPageChange={handlePageChange}
          />
        )
      }
    </div>
  )
}

export default Index;