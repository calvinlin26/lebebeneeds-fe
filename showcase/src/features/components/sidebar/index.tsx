import CodeBlocks from "../../../components/codeBLock";
import CustomTable from "mainApp/table";
import NestedSidebar from "./nestedSidebar";
import PreviewTabs from "./previewTabs";
import useNavSideBar from "../../../hooks/useNavSideBar";
import useScrollIntoView from "../../../hooks/useScrollIntoView";

const SidebarShowCase = () => {
  useNavSideBar([
    { path: "/sidebar#installation", label: "Installation" },
    { path: "/sidebar#usage", label: "Usage" },
    {
      path: "/sidebar#example",
      label: "Example",
      items: [
        {
          path: "/sidebar#example-nested-sidebar",
          label: "Nested Sidebar With Icon",
        },
      ],
    },
    { path: "/sidebar#props", label: "Props" },
  ]);

  useScrollIntoView();

  const importCode = `import Sidebar from './Sidebar';
import { SidebarItemType } from './type';
    `;
  const previewCode = `
const items: SidebarItemType[] = [
  {
    path: '/home',
    label: 'Home',
  },
  {
    path: '/about',
    label: 'About',
    items: [
      {
        path: '/about/team',
        label: 'Team',
      },
      {
        path: '/about/company',
        label: 'Company',
      },
    ],
  },
];

const App = () => (
  <Sidebar
    header={<h1>My Sidebar</h1>}
    items={items}
    padding="p-4"
    borderRadius="rounded-md"
    shadow="shadow-lg"
  />
);

export default App;
  `;

  const propsData = [
    {
      name: "header",
      type: "ReactNode",
      default: "None",
      description: "The header content of the sidebar.",
    },
    {
      name: "items",
      type: "SidebarItemType[]",
      default: "None",
      description: "An array of items to be displayed in the sidebar.",
    },
    {
      name: "backgroundColor",
      type: "string",
      default: "bg-white",
      description: "CSS classes for the background color of the sidebar.",
    },
    {
      name: "textColor",
      type: "string",
      default: "text-black",
      description: "CSS classes for the text color of the sidebar items.",
    },
    {
      name: "activeColor",
      type: "string",
      default: "bg-gray-100 text-gray-900",
      description:
        "CSS classes for the background and text color of the active sidebar item.",
    },
    {
      name: "hoverBgColor",
      type: "string",
      default: "hover:bg-gray-100",
      description:
        "CSS classes for the background color of a sidebar item on hover.",
    },
    {
      name: "hoverTextColor",
      type: "string",
      default: "hover:text-gray-900",
      description: "CSS classes for the text color of a sidebar item on hover.",
    },
    {
      name: "fontSize",
      type: "string",
      default: "text-base",
      description: "CSS classes for the font size of the sidebar items.",
    },
    {
      name: "padding",
      type: "string",
      default: "p-2",
      description: "CSS classes for the padding of the sidebar items.",
    },
    {
      name: "borderRadius",
      type: "string",
      default: "rounded-lg",
      description: "CSS classes for the border radius of the sidebar items.",
    },
    {
      name: "shadow",
      type: "string",
      default: "shadow-sm",
      description: "CSS classes for the box shadow of the sidebar.",
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
          Sidebar
        </h1>
        <p className="text-base text-muted-foreground">
          <span className="inline-block align-top [text-decoration:inherit]">
            The Sidebar component is a versatile and customizable sidebar menu
            for React applications. It supports nested items, custom styling,
            and active state management.
          </span>
        </p>
      </div>
      <br />
      <div className="space-y-2">
        <PreviewTabs />
      </div>
      <br />
      <div className="space-y-2" id="#installation">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Installation
        </h3>
        <hr />
        <CodeBlocks
          code={`not required to install any library`}
          language="js"
        />
      </div>
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
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Example
        </h3>
        <hr />
        <NestedSidebar />
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
};

export default SidebarShowCase;
