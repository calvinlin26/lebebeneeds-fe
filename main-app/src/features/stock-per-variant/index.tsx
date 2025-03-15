import { Suspense, lazy } from "react";
const StockPerVariantApp = lazy(
  () => import("productManagement/stock-per-variant")
);

const StockPerVariant = () => {
  return (
    <Suspense fallback={<div>Loading Stock Per Variant App...</div>}>
      <StockPerVariantApp />
    </Suspense>
  );
};

export default StockPerVariant;
