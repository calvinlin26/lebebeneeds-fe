import { Suspense, lazy } from "react";
const MasterProductApp = lazy(() => import("productManagement/master-product"));

const MasterProduct = () => {
  return (
    <Suspense fallback={<div>Loading Master Product App...</div>}>
      <MasterProductApp />
    </Suspense>
  );
};

export default MasterProduct;
