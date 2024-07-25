import CustomTable from "mainApp/table";
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import useScrollIntoView from "../../../hooks/useScrollIntoView";
import PreviewTabs from "./previewTabs";

function Index() {
  useNavSideBar([
    { path: "/layout#usage", label: "Usage" },
    { path: "/layout#props", label: "Props" },
  ]);
  useScrollIntoView();

  const importCode = `import Navbar from "../navbar";
import { Outlet } from "react-router-dom";
import SideBar from "../sidebar";
import logo from "../../assets/indvara.png";
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

  const propsData = [
    {
      name: "SideBar",
      type: "refer to SideBar component documentation",
      default: "-",
      description:
        "The Sidebar component is a versatile and customizable sidebar menu for React applications. It supports nested items, custom styling, and active state management.",
    },
    {
      name: "Navbar",
      type: "refer to Navbar component documentation",
      default: "-",
      description:
        "The Navbar component is a customizable navigation bar for React applications. It supports various customization options like background color, shadow, maximum width, logo, and links. It also includes a responsive design with a collapsible menu for smaller screens.",
    },
    {
      name: "Outlet",
      type: "refer to react-router-dom documentation",
      default: "-",
      description:
        "The Outlet component is a placeholder for the rendered content of the current route in a React Router application.",
    },
  ];

  const columns = [
    {
      header: "Props Name",
      accessor: "name",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Type",
      accessor: "type",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Default",
      accessor: "default",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Description",
      accessor: "description",
      headerClassName: "text-left font-bold",
    },
  ];

  return (
    <div>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
          Layout
        </h1>
        <p className="text-base text-muted-foreground">
          <span className="inline-block align-top [text-decoration:inherit] max-w-[538px]">
            The Layout component is a core part of your application's UI,
            providing a consistent structure that includes a SideBar for
            navigation, a Navbar, and a dynamic content area rendered via the
            Outlet component from react-router-dom.
          </span>
        </p>
      </div>
      <br />
      <PreviewTabs />
      <br />
      <div className="space-y-2" id="#usage">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">Usage</h3>
        <hr />
        <CodeBlocks code={importCode} language="js" />
        <br />
        <CodeBlocks code={previewCode} language="js" />
      </div>
      <br />
      <div className="space-y-2">
        <h3
          className="scroll-m-20 text-2xl font-bold tracking-tight"
          id="#props"
        >
          Props
        </h3>
        <hr />
        <CustomTable
          columns={columns}
          data={propsData}
          className="mt-4 border-collapse border border-gray-200 shadow-lg"
          headerClassName="bg-gray-100 text-gray-700"
          bodyClassName="bg-white"
        />
      </div>
    </div>
  );
}

export default Index;
