import { Button } from "mainApp/button";
import CustomTable from "mainApp/table";
import { Hash } from "../../../constants";
import { useNavigate } from "react-router-dom";
import { useRoleData } from "../hooks/useRoleData";
import { toast } from "sonner";
import { deleteRole } from "../../../services";
import withUserAccess from "mainApp/withUserAccess";

interface IndexProps {
  ROLE_LIST: boolean;
  ROLE_ADD: boolean;
  ROLE_EDIT: boolean;
  ROLE_DELETE: boolean;
  [key: string]: boolean;
}

const Index: React.FC<IndexProps> = ({ 
  ROLE_LIST,
  ROLE_ADD,
  ROLE_EDIT,
  ROLE_DELETE,
}: any) => {
  
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
          <Button disabled={!ROLE_EDIT} onClick={() => handleDetailRole(item.roleCode)}>Edit</Button>
          <Button
            disabled={!ROLE_DELETE}
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
    navigate("/roles-management" + Hash.DETAIL);
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
        <Button disabled={!ROLE_ADD} onClick={handleAddRole}>Add Role</Button>
      </div>
      {ROLE_LIST && (
      <CustomTable
        columns={columns}
        data={data}
        caption="Role Data"
        className="mt-4 border-collapse border border-gray-200 shadow-lg"
        headerClassName="bg-gray-100 text-gray-700"
        bodyClassName="bg-white"
      />
      )}
    </div>
  );
};

export default withUserAccess(Index);
