import { Suspense, lazy } from "react";
const AVMApp = lazy(() => import("avm/avm"));

const AVM = () => {
  return (
    <Suspense fallback={<div>Loading AVM App...</div>}>
      <AVMApp />
    </Suspense>
  );
};

export default AVM;
