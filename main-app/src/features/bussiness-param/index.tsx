import { Suspense, lazy } from "react";
const BussinessParamApp = lazy(() => import("bussinessParam/bussiness-param"));

const BussinessParam = () => {
  return (
    <Suspense fallback={<div>Loading User Management App...</div>}>
      <BussinessParamApp />
    </Suspense>
  );
};

export default BussinessParam;
