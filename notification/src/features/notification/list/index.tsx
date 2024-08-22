import { Button } from "mainApp/button";
import CustomTable from "mainApp/table";
import { Hash } from "../../../constants";
import { Input } from "mainApp/input";
import { deleteNotification } from "../../../services";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useNotificationData } from "../hooks/useNotificationData";
import { useState } from "react";
import CustomPagination from "mainApp/pagination";

const Index: React.FC = () => {
  const navigate = useNavigate();
  // Use custom hooks
  const { notificationData, setParams, params , paginationInfo} = useNotificationData();
  const [keyword, setKeyword] = useState("");

  const columns = [
    {
      header: "Code",
      accessor: "notificationCode",
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

  // Table Data
  const data = notificationData.map((item: NotificationListItem) => {
    return {
      ...item,
      active: item.active ? "Active" : "Inactive",
      action: (
        <div className="flex flex-row gap-3">
          <Button
            onClick={() => handleDetailNotification(item.notificationCode)}
          >
            Edit
          </Button>
          <Button
            onClick={() => handleDeleteNotification(item.notificationCode)}
            variant="destructive"
          >
            Deactivate
          </Button>
        </div>
      ),
    };
  });

  const handlePageChange = (page: number) => {
    setParams({
      ...params,
      page: page,
    });
  };

  const handleDetailNotification = (notificationCode: string) => {
    navigate(`/notification?code=${notificationCode}${Hash.DETAIL}`);
  };

  const handleAddNotification = () => {
    navigate(`/notification` + Hash.DETAIL);
  };

  const handleDeleteNotification = async (notificationCode: string) => {
    try {
      await deleteNotification(notificationCode);
      toast.success("Notification has been deactivate");
      setParams({
        ...params,
      });
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSearch = () => {
    setParams({
      ...params,
      search: `notificationCode:${keyword}`,
    });
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold">Notification Data</h1>
      <br />
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-4 items-center">
          <Input
            variant={"default"}
            fieldSize={"default"}
            type={"text"}
            placeholder={"Enter keyword"}
            onChange={handleChangeKeyword}
          />
          <Button onClick={handleSearch}>Search</Button>
        </div>
        <Button onClick={handleAddNotification}>Add Notification</Button>
      </div>

      <CustomTable
        columns={columns}
        data={data}
        className="mt-4 border-collapse border border-gray-200 shadow-lg"
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
