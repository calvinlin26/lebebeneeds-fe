import { Suspense, lazy } from "react";
const ActivityList = lazy(() => import("auditTrail/activity-list"));

const AuditTrailActivityList = () => {
  return (
    <Suspense fallback={<div>Loading Audit-Trail App...</div>}>
      <ActivityList />
    </Suspense>
  );
};

export default AuditTrailActivityList;
