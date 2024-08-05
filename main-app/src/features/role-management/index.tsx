import { Suspense, lazy } from "react";
const RoleManagementApp = lazy(() => import("userManagement/roles-management"));

const RoleManagement = () => {
  return (
    <Suspense fallback={<div>Loading Role Management App...</div>}>
      <RoleManagementApp />
    </Suspense>
  );
};

export default RoleManagement;
