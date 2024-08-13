import React from "react";
import Sidebar from "mainApp/sidebar";
import { Outlet } from "react-router-dom";
import { listComponent, listComponentBackend, listComponentMobile } from "../../lib/staticData";
import { useShowcaseContext } from "../../hooks/useShowcaseContext";

const Index: React.FC = () => {
  const { navSideBar } = useShowcaseContext();

  return (
    <div className="flex flex-row h-screen overflow-hidden">
      <Sidebar
        header="Components"
        shadow="shadow-md overflow-y-auto"
        items={[
          {
            label: "Frontend",
            items: listComponent.map(component => ({
              path: component.path,
              label: component.label,
            })),
          },
          {
            label: "Backend",
            items: listComponentBackend.map(component => ({
              path: component.path,
              label: component.label,
            })),
          },
          {
            label: "Mobile",
            items: listComponentMobile.map(component => ({
              path: component.path,
              label: component.label,
            })),
          },
        ]}
      />
      <div className="overflow-y-auto h-full w-full p-6">
        <Outlet />
      </div>
      <Sidebar header="On This Page" shadow="shadow-md" items={navSideBar} />
    </div>
  );
};

export default Index;
