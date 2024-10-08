import { Button } from "mainApp/button";
import CustomPagination from "mainApp/pagination";
import CustomTable from "mainApp/table";
import DropdownSelect from "mainApp/select";
import { Input } from "mainApp/input";
import { useApiListData } from "../hooks/useApiListData";
import { useState } from "react";
import { Hash } from "../../../constants";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../../lib/utils";
import { getApiListDownload } from "../../../services/api";

function Index() {
    const navigate = useNavigate();
    const { apiListData, setParams, params, paginationInfo } = useApiListData();
    const [keyword, setKeyword] = useState("");
    const [searchBy, setSearchBy] = useState("username");

    const data = apiListData?.map((item: any) => {
        return {
          ...item,
          eventDate: formatDate(item.eventDate),
          action: (
            <div className="flex">
              <Button
                onClick={() => navigate(`/api-list?apiAuditId=${item.apiAuditId}${Hash.DETAIL}`)}>
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
      
  const handleDownload = async (onError?: (error: any) => void): Promise<void> => {
    try {
       const query = new URLSearchParams({
            sort: params.sort || "username,ASC",
            search: params.search || "",
            isAndSearch: "true",
      }).toString();
      const response = await getApiListDownload(query);
      if (!response || response.status !== 200) {
        throw new Error("Failed to download the file or invalid response.");
      }
      const blob = new Blob([response.data], {
        type: response.headers['content-type'],
      });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      const now = new Date();
      const formattedDate = now.toISOString().split('T')[0]; // Format as YYYY-MM-DD
      link.download = `audit_api_${formattedDate}.xlsx`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (err: any) {
      const blob = new Blob([err.response.data], { type: "application/json" });
      if (blob.text) {
        const errorText = await blob.text();
        onError && onError(JSON.parse(errorText));
      } else {
        const reader = new FileReader();
        reader.readAsText(err.response.data);
        reader.onload = (e) => onError && onError(JSON.parse(e?.target?.result as string));
      }
      console.error("Error downloading the file:", err);
    }
  };


  const columns = [
    {
      header: "Username",
      accessor: "username",
    },
    {
      header: "path",
      accessor: "path",
    },
    {
      header: "Method",
      accessor: "method",
    },
    {
      header: "Event Date",
      accessor: "eventDate",
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
      value: "eventDate",
      label: "Event Date",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">API List</h1>
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
          <Button onClick={handleDownload}>
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
