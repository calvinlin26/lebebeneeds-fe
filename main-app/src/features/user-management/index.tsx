import { Suspense, lazy } from "react";
const UserManagementApp = lazy(() => import("userManagement/App"));

const UserManagement = () => {
  return (
    <Suspense fallback={<div>Loading User Management App...</div>}>
      <UserManagementApp />
    </Suspense>
  );
};

export default UserManagement;
