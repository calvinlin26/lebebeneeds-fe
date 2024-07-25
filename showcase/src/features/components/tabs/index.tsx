import CodeBlocks from "../../../components/codeBLock";
import CustomTable from "mainApp/table";
import PreviewTabs from "./previewTabs";

const TabShowcase = () => {
  const importCode = `import { CustomTabs } from "../../components/tabs";;
    `;
  const previewCode = `
const App = () => {
  return (
    <div>
      <CustomTabs
        tabs={[
            {
                trigger: <div>Account</div>,
                value: "account",
                content: <div>Make changes to your account here.</div>
            },
            {
                trigger: <div>Password</div>,
                value: "password",
                content: <div>Change your password here.</div>
            }
        ]}
      />
      {/* Rest of the app */}
    </div>
  );
};

export default App;
  `;

  const propsData = [
    {
      name: "asChild",
      type: "boolean",
      default: "None",
      description:
        "Change the default rendered element for the one passed as a child, merging their props and behavior.",
    },
    {
      name: "defaultValue",
      type: "string",
      default: "None",
      description:
        "The value of the tab that should be active when initially rendered. Use when you do not need to control the state of the tabs.",
    },
    {
      name: "value",
      type: "string",
      default: "None",
      description:
        "The value of the tab that should be active when initially rendered. Use when you do not need to control the state of the tabs.",
    },
    {
      name: "onValueChange",
      type: "function",
      default: "None",
      description: "Event handler called when the value changes.",
    },
    {
      name: "orientation",
      type: '"vertical" | "horizontal"',
      default: "None",
      description: "The orientation of the component.",
    },
    {
      name: "trigger",
      type: "ReactNode",
      default: "None",
      description: "The button that activates its associated content.",
    },
    {
      name: "content",
      type: "ReactNode",
      default: "None",
      description: "Contains the content associated with each trigger.",
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
          Custom Tabs
        </h1>
        <p className="text-base text-muted-foreground">
          <span className="inline-block align-top [text-decoration:inherit]">
            The Tabs is a flexible and accessible tabbed interface built with
            React and TypeScript. This component allows for easy switching
            between different content sections, supporting both controlled and
            uncontrolled states. It also offers flexibility in rendering tabs
            with different elements and styles.
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
        <CodeBlocks code={`npm install @radix-ui/react-tabs`} language="js" />
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

export default TabShowcase;
