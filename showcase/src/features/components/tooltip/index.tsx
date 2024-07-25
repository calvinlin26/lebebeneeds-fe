import React from "react";
import { CustomTabs } from "mainApp/tabs";
import CustomTable from "mainApp/table";
import { CustomTooltip } from "mainApp/tooltip"
import { Button } from "mainApp/button"
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import useScrollIntoView from "../../../hooks/useScrollIntoView";

const Index: React.FC = () => {
  useNavSideBar([
    { path: "/tooltip#installation", label: "Installation" },
    { path: "/tooltip#usage", label: "Usage" },
    { path: "/tooltip#props", label: "Props" },
  ]);
  useScrollIntoView()

  const importCode = `import { CustomTooltip } from "mainApp/tooltip";
  `;
  const previewCode = `
<CustomTooltip content={"Add to Library"}>
  <Button>Hover here</Button>
</CustomTooltip>
`;

  const tabs = [
    {
      trigger: <span>Preview</span>,
      value: "preview",
      content: (
        <div className="w-full border h-[400px] rounded-sm flex items-center justify-center">
        <CustomTooltip content={"Add to Library"}>
            <Button>Hover here</Button>
        </CustomTooltip>
        </div>
      ),
    },
    {
      trigger: <span>Code</span>,
      value: "code",
      content: <CodeBlocks code={importCode + previewCode} language="js" />,
    },
  ];

  const propsData = [
    {
      name: "content",
      type: "ReactNode",
      default: "undefined",
      description: "The component that pops out when the tooltip is open.",
    },
    {
      name: "open",
      type: "boolean",
      default: "undefined",
      description: "The controlled open state of the tooltip. Must be used in conjunction with onOpenChange.",
    },
    {
      name: "defaultOpen",
      type: "boolean",
      default: "undefined",
      description: "The open state of the tooltip when it is initially rendered. Use when you do not need to control its open state.",
    },
    {
      name: "onOpenChange",
      type: "function",
      default: "undefined",
      description: "Event handler called when the open state of the tooltip changes.",
    },
    {
      name: "delayDuration",
      type: "number",
      default: "700",
      description: "Override the duration given to the `Provider` to customise the open delay for a specific tooltip.",
    },
    {
      name: "disableHoverableContent ",
      type: "boolean",
      default: "undefined",
      description:"Prevents Tooltip.Content from remaining open when hovering. Disabling this has accessibility consequences. Inherits from Tooltip.Provider.",
    },
  ];

  const valueData = [
    {
        name: "[data-state]",
        value: `{"closed" | "delayed-open" | "instant-open"}`
    }
  ]

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

  const columnsDataState = [
    {
        header: "Data attribute",
        accessor: "name",
        headerClassName: "text-left font-bold",
    },
    {
        header: "Values",
        accessor: "value",
        headerClassName: "text-left font-bold"
    }
  ]

  return (
    <div>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
          Tooltip
        </h1>
        <p className="text-base text-muted-foreground">
          <span className="inline-block align-top [text-decoration:inherit] max-w-[538px]">
          A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
          </span>
        </p>
      </div>
      <br />
      <div className="space-y-2">
        <CustomTabs
          tabs={tabs}
          onValueChange={() => console.log("Tab changed")}
        />
      </div>
      <br />
      <div className="space-y-2" id="#installation">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Installation
        </h3>
        <hr />
        <CodeBlocks code={`npm install @radix-ui/react-tooltip`} language="js" />
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
      <br />
      <div className="space-y-2" id="#props">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">Props</h3>
        <hr />
        <CustomTable
          columns={columns}
          data={propsData}
          className="mt-4 border-collapse border border-gray-200 shadow-lg"
          headerClassName="bg-gray-100 text-gray-700"
          bodyClassName="bg-white"
        />
        <CustomTable
          columns={columnsDataState}
          data={valueData}
          className="mt-4 border-collapse border border-gray-200 shadow-lg"
          headerClassName="bg-gray-100 text-gray-700"
          bodyClassName="bg-white"
        />
      </div>
    </div>
  );
};

export default Index;
