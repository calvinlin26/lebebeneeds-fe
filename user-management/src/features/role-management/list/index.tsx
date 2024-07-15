import { Button } from "mainApp/button";
import CustomTable from "mainApp/table";
import { Hash } from "../../../constants";
import { useNavigate } from "react-router-dom";
import { useRoleData } from "../hooks/useRoleData";
import { toast } from "sonner";
import { deleteRole } from "../../../services";

const Index: React.FC = () => {
  const navigate = useNavigate();
  // Use custom hooks
  const roleData = useRoleData();

  // Columns definition
  const columns = [
    {
      header: "Name",
      accessor: "roleName",
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
  const data = roleData?.map((item: RoleListItem) => {
    return {
      ...item,
      active: item.active ? "Active" : "Inactive",
      action: (
        <div className="flex flex-row gap-3">
          <Button onClick={() => handleDetailRole(item.roleCode)}>Edit</Button>
          <Button
            onClick={() => handleDeleteRole(item.roleCode)}
            variant="destructive"
          >
            Deactivate
          </Button>
        </div>
      ),
    };
  });

  const handleDetailRole = (roleCode: string) => {
    navigate(`/role-management?rolecode=${roleCode}${Hash.DETAIL}`);
  };

  const handleAddRole = () => {
    // Handle add user logic here, e.g., open a form or modal
    navigate("/role-management" + Hash.DETAIL);
  };

  const handleDeleteRole = async (roleCode: string) => {
    try {
      await deleteRole(roleCode);
      toast.success("Role has been deleted");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold">Role Data</h1>
      <div className="flex justify-end items-center mb-4">
        <Button onClick={handleAddRole}>Add Role</Button>
      </div>

      <CustomTable
        columns={columns}
        data={data}
        caption="Role Data"
        className="mt-4 border-collapse border border-gray-200 shadow-lg"
        headerClassName="bg-gray-100 text-gray-700"
        bodyClassName="bg-white"
      />
    </div>
  );
};

export default Index;
