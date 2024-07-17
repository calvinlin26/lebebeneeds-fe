import { Suspense, lazy } from "react";
const RoleManagementApp = lazy(() => import("userManagement/role-management"));

const RoleManagement = () => {
  return (
    <Suspense fallback={<div>Loading Role Management App...</div>}>
      <RoleManagementApp />
    </Suspense>
  );
};

export default RoleManagement;
