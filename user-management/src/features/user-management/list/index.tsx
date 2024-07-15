import { Button } from "mainApp/button";
import CustomTable from "mainApp/table";
import { Hash } from "../../../constants";
import { useNavigate } from "react-router-dom";
import { useUserData } from "../hooks/useUserData";
import { deleteUser } from "../../../services/api";
import { toast } from "sonner";

const Index: React.FC = () => {
  const navigate = useNavigate();
  // Use custom hooks
  const userData = useUserData();

  // Columns definition
  const columns = [
    {
      header: "Name",
      accessor: "name",
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
  const data = userData.map((item: UserListItem) => {
    return {
      ...item,
      active: item.active ? "Active" : "Inactive",
      action: (
        <div className="flex flex-row gap-3">
          <Button onClick={() => handleDetailUser(item.username)}>Edit</Button>
          <Button
            onClick={() => handleDeleteUser(item.username)}
            variant="destructive"
          >
            Deactivate
          </Button>
        </div>
      ),
    };
  });

  const handleDetailUser = (username: string) => {
    navigate(`/user-management?username=${username}${Hash.DETAIL}`);
  };

  const handleAddUser = () => {
    // Handle add user logic here, e.g., open a form or modal
    console.log("Add user button clicked");
    navigate(`/user-management` + Hash.DETAIL);
  };

  const handleDeleteUser = async (username: string) => {
    try {
      await deleteUser(username);
      toast.success("User has been deleted");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold">User Data</h1>
      <div className="flex justify-end items-center mb-4">
        <Button onClick={handleAddUser}>Add User</Button>
      </div>

      <CustomTable
        columns={columns}
        data={data}
        caption="User Data"
        className="mt-4 border-collapse border border-gray-200 shadow-lg"
        headerClassName="bg-gray-100 text-gray-700"
        bodyClassName="bg-white"
      />
    </div>
  );
};

export default Index;
