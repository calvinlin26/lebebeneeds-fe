import Navbar from "../navbar";
import { Outlet } from "react-router-dom";
import SideBar from "../sidebar";
import useUserAccess from "../../hooks/useUserAccess";
import useSidebarItems from "../../hooks/useSidebarItems";

const Layout = () => {
  const { loading } = useUserAccess();
  const { sidebarItems } = useSidebarItems();

  return (
    <div className="flex flex-row h-screen overflow-hidden">
      <SideBar shadow="shadow-md" items={sidebarItems} />
      <div className="flex flex-col w-full overflow-hidden">
        <Navbar shadow="shadow-md" />
        <div className="overflow-y-auto h-full p-6">
          {loading ? <div>Loading...</div> : <Outlet />}
        </div>
      </div>
    </div>
  );
};

export default Layout;
