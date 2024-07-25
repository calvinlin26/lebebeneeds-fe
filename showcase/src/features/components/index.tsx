import React from "react";
import Sidebar from "mainApp/sidebar";
import { Outlet } from "react-router-dom";
import { listComponent } from "../../lib/staticData";
import { useShowcaseContext } from "../../hooks/useShowcaseContext";

const Index: React.FC = () => {
  const { navSideBar } = useShowcaseContext();
  
  return (
    <div className="flex flex-row h-screen overflow-hidden">
      <Sidebar header="Components" shadow="shadow-md" items={listComponent} />
      <div className="overflow-y-auto h-full w-full p-6">
        <Outlet />
      </div>
      <Sidebar header="On This Page" shadow="shadow-md" items={navSideBar} />
    </div>
  );
};

export default Index;
