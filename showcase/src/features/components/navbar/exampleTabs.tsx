import CodeBlocks from "../../../components/codeBLock";
import { CustomTabs } from "mainApp/tabs";
import { GlobeIcon } from "@radix-ui/react-icons";
import Navbar from "mainApp/navbar";

const ExampleTabs = () => {
  const previewCode = `
const items = [
    {
      path: "/home",
      label: "Home",
      icon: <HomeIcon />,
    },
    {
      path: "/services",
      label: "Services",
      icon: <GearIcon />,
      items: [
        {
          path: "/services/design",
          label: "Design",
          icon: <Pencil1Icon />,
        },
        {
          path: "/services/development",
          label: "Development",
          icon: <RocketIcon />,
        },
      ],
    },
  ];

const App = () => (
  <Sidebar
    items={items}
  />
);

export default App;
    `;

  const tabs = [
    {
      trigger: <span>Preview</span>,
      value: "preview",
      content: (
        <div className="w-full border h-[400px] rounded-sm items-center justify-center">
          <Navbar
            shadow="shadow-md"
            maxWidth="max-w-5xl"
            logoIcon={<GlobeIcon />}
            links={[
              { path: "/", label: "Home" },
              { path: "/services", label: "Services" },
              { path: "/contact", label: "Contact" },
            ]}
            linksPosition="right"
          />
        </div>
      ),
    },
    {
      trigger: <span>Code</span>,
      value: "code",
      content: <CodeBlocks code={previewCode} language="js" />,
    },
  ];
  return (
    <>
      <h5
        className="scroll-m-20 text-xl font-bold tracking-tight"
        id="#example-responsive-navbar"
      >
        Responsive Navbar
      </h5>
      <CustomTabs
        tabs={tabs}
        onValueChange={() => console.log("Tab changed")}
      />
    </>
  );
};

export default ExampleTabs;
