import { Button } from "mainApp/button";
import CustomPagination from "mainApp/pagination";
import CustomTable from "mainApp/table";
import DropdownSelect from "mainApp/select";
import { Hash } from "../../../constants";
import { Input } from "mainApp/input";
import { deleteAVM } from "../../../services/api";
import { toast } from "sonner";
import { useAVMData } from "../hooks/useAVMData";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Index() {
  const navigate = useNavigate();
  const { avmData, setParams, params, paginationInfo } = useAVMData();
  const [keyword, setKeyword] = useState("");
  const [searchBy, setSearchBy] = useState("name");

  const data = avmData?.map((item: any) => {
    return {
      ...item,
      active: item.active ? "Active" : "Inactive",
      action: (
        <div className="flex gap-2">
          <Button onClick={() => navigate(`/avm?id=${item.id}${Hash.SETUP}`)}>
            Approval Setup
          </Button>
          <Button onClick={() => navigate(`/avm?id=${item.id}${Hash.DETAIL}`)}>
            Edit
          </Button>
          <Button
            onClick={() => handleDeleteAVM(item.id)}
            variant="destructive"
          >
            Delete
          </Button>
        </div>
      ),
    };
  });

  const handleChange = (e: any) => {
    const { value } = e.target;

    setSearchBy(value);
  };

  const columns = [
    {
      header: "Name",
      accessor: "name",
    },
    {
      header: "Description",
      accessor: "description",
    },
    {
      header: "Status",
      accessor: "active",
    },
    {
      header: "Action",
      accessor: "action",
    },
  ];

  const option = [
    {
      value: "name",
      label: "Name",
    },
    {
      value: "description",
      label: "Description",
    },
    {
      value: "status",
      label: "Status",
    },
  ];

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

  const handleDeleteAVM = async (id: string) => {
    try {
      await deleteAVM(id);
      toast.success("Notification has been deactivate");
      setParams({
        ...params,
      });
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">AVM Service</h1>
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
          <Button onClick={() => navigate(`/avm${Hash.DETAIL}`)}>
            Add AVM
          </Button>
        </div>
        <CustomTable
          columns={columns}
          data={data}
          className="mt-4 border-collapse border border-gray-200 shadow-lg"
          headerClassName="bg-gray-100 text-gray-700 whitespace-nowrap"
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
    </div>
  );
}

export default Index;
