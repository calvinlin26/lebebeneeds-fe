import CodeBlocks from "../../../components/codeBLock";
import CustomTable from "mainApp/table";
import ExampleTabs from "./exampleTabs";
import PreviewTabs from "./previewTabs";
import useNavSideBar from "../../../hooks/useNavSideBar";
import useScrollIntoView from "../../../hooks/useScrollIntoView";

const NavbarShowCase = () => {
  useNavSideBar([
    { path: "/navbar#installation", label: "Installation" },
    { path: "/navbar#usage", label: "Usage" },
    {
      path: "/navbar#example",
      label: "Example",
      items: [
        {
          path: "/navbar#example-responsive-navbar",
          label: "Nested Sidebar With Icon",
        },
      ],
    },
    { path: "/navbar#props", label: "Props" },
  ]);

  useScrollIntoView();

  const importCode = `import Navbar from './navbar';
    `;
  const previewCode = `
const App = () => {
  return (
    <div>
      <Navbar
        backgroundColor="bg-blue-500"
        shadow="shadow-lg"
        maxWidth="max-w-6xl"
        logoIcon={<img src="/logo.png" alt="Logo" className="h-8" />}
        logoText="MyApp"
        links={[
          { path: "/", label: "Home" },
          { path: "/about", label: "About" },
          { path: "/contact", label: "Contact" },
        ]}
        linksPosition="center"
      />
      {/* Rest of the app */}
    </div>
  );
};

export default App;
  `;

  const propsData = [
    {
      name: "backgroundColor",
      type: "string",
      default: "bg-white",
      description: "Background color class of the navbar.",
    },
    {
      name: "shadow",
      type: "string",
      default: "shadow-sm",
      description: "Shadow class of the navbar.",
    },
    {
      name: "maxWidth",
      type: "string",
      default: "max-w-7xl",
      description: "Maximum width class of the navbar container.",
    },
    {
      name: "logoIcon",
      type: "React.ReactNode",
      default: "None",
      description: "An optional React node to display as the logo icon.",
    },
    {
      name: "logoText",
      type: "string",
      default: '""',
      description: "Text to display next to the logo icon.",
    },
    {
      name: "links",
      type: "Array<{ path: string; label: string }>",
      default: "None",
      description: "Array of link objects with path and label properties.",
    },
    {
      name: "linksPosition",
      type: '"left" | "center" | "right"',
      default: '"left"',
      description: "Position of the links.",
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
          Navbar
        </h1>
        <p className="text-base text-muted-foreground">
          <span className="inline-block align-top [text-decoration:inherit]">
            The Navbar component is a customizable navigation bar for React
            applications. It supports various customization options like
            background color, shadow, maximum width, logo, and links. It also
            includes a responsive design with a collapsible menu for smaller
            screens.
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
        <CodeBlocks code={`npm i react-router-dom`} language="js" />
      </div>
      <br />
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
        <ExampleTabs />
        <hr />
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

export default NavbarShowCase;
