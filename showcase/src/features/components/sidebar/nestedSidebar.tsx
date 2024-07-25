import {
  GearIcon,
  HomeIcon,
  Pencil1Icon,
  RocketIcon,
} from "@radix-ui/react-icons";

import CodeBlocks from "../../../components/codeBLock";
import { CustomTabs } from "mainApp/tabs";
import Sidebar from "mainApp/sidebar";

const NestedSidebar = () => {
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

  const tabs = [
    {
      trigger: <span>Preview</span>,
      value: "preview",
      content: (
        <div className="w-full border h-[400px] rounded-sm flex items-center justify-center">
          <Sidebar items={items} />
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
        id="#example-nested-sidebar"
      >
        Nested Sidebar With Icon
      </h5>
      <CustomTabs
        tabs={tabs}
        onValueChange={() => console.log("Tab changed")}
      />
    </>
  );
};

export default NestedSidebar;
