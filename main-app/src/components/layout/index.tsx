import Navbar from "../navbar";
import { Outlet } from "react-router-dom";
import SideBar from "../sidebar";
import logo from "../../assets/indvara.png";

const Layout = () => {
  return (
    <div className="flex flex-row h-screen overflow-hidden">
      <SideBar
        shadow="shadow-md"
        items={[
          {
            path: "/",
            label: "Dashboard",
          },
          {
            label: "User Management",
            items: [
              { path: "/user-management", label: "User" },
              {
                path: "/role",
                label: "Role",
              },
            ],
          },
          {
            label: "Bussiness Parameter",
            path: "/bussiness-param"
          },
          // Add more items as needed
        ]}
      />
      <div className="flex flex-col w-full overflow-hidden">
        <Navbar
          logoIcon={<img src={logo} className="w-9" />}
          shadow="shadow-md"
          // links={[
          //   { path: "/", label: "Home" },
          //   { path: "/about", label: "About" },
          //   { path: "/services", label: "Services" },
          //   { path: "/contact", label: "Contact" },
          // ]}
          // linksPosition="center"
        />
        <div className="overflow-y-auto h-full p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
