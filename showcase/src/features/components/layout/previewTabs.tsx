import { CustomTabs } from "mainApp/tabs";
import SideBar from "mainApp/sidebar";
import Navbar from "mainApp/navbar";
import CodeBlocks from "../../../components/codeBLock";
import {
  GearIcon,
  HomeIcon,
  Pencil1Icon,
  RocketIcon,
  MoonIcon,
} from "@radix-ui/react-icons";

function PreviewTabs() {
  const importCode = `import Navbar from "path/to/navbar";
import { Outlet } from "path/to/react-router-dom";
import SideBar from "path/to/sidebar";
import logo from "path/to/logo";
  `;
  const previewCode = `
const Layout = () => {
  return (
    <div className="flex flex-row h-screen overflow-hidden">
      <SideBar
        padding="p-4"
        borderRadius="rounded-md"
        shadow="shadow-lg"
        items={[
          {
            path: "/layout#home",
            label: "Home",
            icon: <HomeIcon />,
          },
          {
            path: "/layout#service",
            label: "Services",
            icon: <GearIcon />,
            items: [
              {
                path: "/layout#service-design",
                label: "Design",
                icon: <Pencil1Icon />,
              },
              {
                path: "/layout#services-development",
                label: "Development",
                icon: <RocketIcon />,
              },
            ],
          },
        ]}
      />
      <div className="flex flex-col w-full overflow-hidden">
        <Navbar
          shadow="shadow-lg"
          maxWidth="max-w-6xl"
          logoIcon={<MoonIcon />}
          links={[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/contact", label: "Contact" },
          ]}
          linksPosition="center"
        />
        <div className="overflow-y-auto h-full p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
`;

  const tabs = [
    {
      trigger: <span>Preview</span>,
      value: "preview",
      content: (
        <div className="w-full border h-[400px] rounded-sm flex items-center justify-center">
          <div className="flex flex-row h-[300px] w-full overflow-hidden">
            <SideBar
              padding="p-4"
              borderRadius="rounded-md"
              shadow="shadow-lg !w-[280px]"
              items={[
                {
                  path: "/layout#home",
                  label: "Home",
                  icon: <HomeIcon />,
                },
                {
                  path: "/layout#service",
                  label: "Services",
                  icon: <GearIcon />,
                  items: [
                    {
                      path: "/layout#service-design",
                      label: "Design",
                      icon: <Pencil1Icon />,
                    },
                    {
                      path: "/layout#services-development",
                      label: "Development",
                      icon: <RocketIcon />,
                    },
                  ],
                },
              ]}
            />
            <div className="flex flex-col w-full overflow-hidden">
              <Navbar
                shadow="shadow-lg"
                maxWidth="max-w-6xl"
                logoIcon={<MoonIcon />}
                links={[
                  { path: "/", label: "Home" },
                  { path: "/about", label: "About" },
                  { path: "/contact", label: "Contact" },
                ]}
                linksPosition="center"
              />
              <div className="overflow-y-auto h-full p-6">
                Content of The Page
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      trigger: <span>Code</span>,
      value: "code",
      content: <CodeBlocks code={importCode + previewCode} language="js" />,
    },
  ];
  return (
    <div className="space-y-2">
      <CustomTabs tabs={tabs} />
    </div>
  );
}

export default PreviewTabs;
