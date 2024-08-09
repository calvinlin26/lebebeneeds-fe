import { Suspense, lazy } from "react";
const BusinessParamApp = lazy(() => import("businessParam/business-param"));

const BusinessParam = () => {
  return (
    <Suspense fallback={<div>Loading BusinessParam App...</div>}>
      <BusinessParamApp />
    </Suspense>
  );
};

export default BusinessParam;
