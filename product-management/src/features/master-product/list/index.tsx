import { useEffect, useState } from "react";

import { Button } from "mainApp/button";
import CustomPagination from "mainApp/pagination";
import CustomTable from "mainApp/table";
import { Input } from "mainApp/input";
import { useMasterData } from "../hooks/useMasterData";

// import { useNavigate } from "react-router-dom";

const Index: React.FC = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [searchField, setSearchField] = useState<string>("description");
  //   const navigate = useNavigate();

  //use custom hooks
  const { masterData, searchParam, setSearchParam, paginationInfo } =
    useMasterData();

  // Columns definition
  const columns = [
    {
      header: "Product Code",
      accessor: "productCode",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Product Name",
      accessor: "productName",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Variants",
      accessor: "variants",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Action",
      accessor: "action",
    },
  ];

  //   const data = businessParamData.map((item: AdminParamListItem) => {
  //     return {
  //       category: item?.param?.category,
  //       frontEnd: item?.param?.frontEnd === true ? "True" : "False",
  //       code: item?.param?.code,
  //       orderNo: item?.param?.orderNo,
  //       valueType: item?.param?.valueType ? item?.param?.valueType : "-",
  //       description: item?.paramTxt?.description
  //         ? item?.paramTxt?.description
  //         : "-",
  //       langCode: item?.paramTxt?.langCode ? item?.paramTxt?.langCode : "-",
  //       text: item?.paramTxt?.text ? item?.paramTxt?.text : "-",
  //       active:
  //         item?.param?.active === true
  //           ? "Active"
  //           : item?.param?.active === false
  //           ? "Inactive"
  //           : "-",
  //       action: (
  //         <div className="flex flex-row gap-3">
  //           <Button
  //             disabled={!ADMIN_PARAM_GET}
  //             onClick={() =>
  //               navigate(`/admin/params?action=1&code=${item?.param?.code}`)
  //             }
  //           >
  //             Edit
  //           </Button>
  //         </div>
  //       ),
  //     };
  //   });

  const handlePageChange = (page: number) => {
    setSearchParam({
      ...searchParam,
      page: page,
    });
  };

  const handleChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleChangeSearchField = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchField(e.target.value);
  };

  const handleSearch = () => {
    setSearchParam({
      ...searchParam,
      search: keyword,
      searchField: searchField,
    });
  };

  useEffect(() => {
    document
      .getElementById("businessParamTitle")
      ?.scrollIntoView({ behavior: "smooth" });
  }, [masterData]);

  return (
    <div className="flex flex-col" id="businessParamTitle">
      <h1 className="text-2xl font-bold">Master Product</h1>
      <div className="flex w-full justify-between items-center mt-5">
        <div className="flex gap-x-4 items-center">
          <Input
            variant={"default"}
            fieldSize={"default"}
            type={"text"}
            placeholder={"Enter keyword"}
            onChange={handleChangeKeyword}
          />
          <select
            className=" bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            value={searchField}
            onChange={handleChangeSearchField}
          >
            <option value="description">Description</option>
            <option value="category">Category</option>
          </select>
          <Button onClick={handleSearch}>Search</Button>
        </div>
        <Button
          className="bg-primary"
          //   onClick={() => navigate(`/admin/params?action=1`)}
        >
          Add Product
        </Button>
      </div>
      <CustomTable
        columns={columns}
        data={[]}
        className="mt-4 mb-10 border-collapse border border-gray-200 shadow-lg"
        headerClassName="bg-gray-100 text-gray-700"
        bodyClassName="bg-white"
      />
      {paginationInfo.totalPages > 0 && (
        <CustomPagination
          currentPage={paginationInfo.page}
          totalPageCount={paginationInfo.totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default Index;
