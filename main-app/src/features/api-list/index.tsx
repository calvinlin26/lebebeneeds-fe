import { Suspense, lazy } from "react";
const ApiList = lazy(() => import("auditTrail/api-list"));

const AuditTrailApiList = () => {
  return (
    <Suspense fallback={<div>Loading Audit-Trail App...</div>}>
      <ApiList />
    </Suspense>
  );
};

export default AuditTrailApiList;
