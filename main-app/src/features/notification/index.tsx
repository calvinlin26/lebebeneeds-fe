import { Suspense, lazy } from "react";
const NotificationApp = lazy(() => import("notification/notification"));

const Notification = () => {
  return (
    <Suspense fallback={<div>Loading Notification App...</div>}>
      <NotificationApp />
    </Suspense>
  );
};

export default Notification;
