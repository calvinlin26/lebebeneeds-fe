import Navbar from "../navbar";
import { Outlet } from "react-router-dom";
import React from "react";
import SideBar from "../sidebar";

const Layout = () => {
  return (
    <div className="flex flex-row h-screen overflow-hidden">
      <SideBar
        items={[
          {
            path: "/admin/",
            label: "Dashboard",
          },
          {
            label: "Dokumen Hukum",
            items: [
              { path: "/admin/peraturan", label: "Peraturan" },
              {
                path: "/admin/undang-undang",
                label: "Undang-Undang",
              },
            ],
          },
          // Add more items as needed
        ]}
      />
      <div className="flex flex-col w-full overflow-hidden">
        <Navbar
          logoIcon={<div>s</div>}
          links={[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/services", label: "Services" },
            { path: "/contact", label: "Contact" },
          ]}
          linksPosition="center"
        />
        <div className="overflow-y-auto h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
