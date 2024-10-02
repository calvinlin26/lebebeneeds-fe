import { Button } from "mainApp/button";
import CustomPagination from "mainApp/pagination";
import CustomTable from "mainApp/table";
import DropdownSelect from "mainApp/select";
import { Input } from "mainApp/input";
import { useNavigate } from "react-router-dom";
import { useActivityListData } from "../hooks/useActivityListData";
import { useState } from "react";
import { Hash } from "../../../constants";
import { formatDate } from "../../../lib/utils";

function Index() {
    const navigate = useNavigate();
    const { activityListData, setParams, params, paginationInfo } = useActivityListData();
    const [keyword, setKeyword] = useState("");
    const [searchBy, setSearchBy] = useState("username");

    const data = activityListData?.map((item: any) => {
        return {
          ...item,
          actionDate: formatDate(item.actionDate),
          action: (
            <div className="flex">
              <Button
                onClick={() => navigate(`/activity-list?activityId=${item.activityId}${Hash.DETAIL}`)}>
                Detail
              </Button>
            </div>
          ),
        };
      });

      const handleChange = (e: any) => {
        const { value } = e.target;
    
        setSearchBy(value);
      };

      const handlePageChange = (page: number) => {
        setParams({
          ...params,
          page: page,
        });
      };

      const handleChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value);
      };
    
      const handleSearch = () => {
        setParams({
          ...params,
          search: `${searchBy}:${keyword}`,
        });
      };    


  const columns = [
    {
      header: "Username",
      accessor: "username",
    },
    {
      header: "Code",
      accessor: "actionCode",
    },
    {
      header: "Description",
      accessor: "actionDescription",
    },
    {
      header: "Action Date",
      accessor: "actionDate",
    },
    {
      header: "Action",
      accessor: "action",
    },
  ];

  const option = [
    {
      value: "username",
      label: "Username",
    },
    {
      value: "actionDate",
      label: "Action Date",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Activity List</h1>
      <div className="flex flex-col items-start mb-4 gap-4">
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-2 items-center">
            <Input
              variant={"default"}
              fieldSize={"default"}
              type={"text"}
              placeholder={"Enter keyword"}
              onChange={handleChangeKeyword}
            />
            <DropdownSelect
              name="field"
              placeholder="Search Field"
              data={option}
              onChange={handleChange}
              className="w-2/4"
            />
            <Button onClick={handleSearch}>Search</Button>
          </div>
          <Button>
            Download
          </Button>
        </div>
        <CustomTable
          columns={columns}
          data={data}
          className="mt-4 border-collapse border border-gray-200 shadow-lg"
          headerClassName="bg-gray-100 text-gray-700 whitespace-nowrap"
          bodyClassName="bg-white"
        />
          <CustomPagination
            currentPage={paginationInfo.page}
            totalPageCount={paginationInfo.totalPages}
            onPageChange={handlePageChange}
          />
      </div>
    </div>
  );
}

export default Index;
