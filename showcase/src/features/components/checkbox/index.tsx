import React from "react";
import CustomTable from "mainApp/table";
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import WithText from "./withText";
import Disabled from "./disabled";
import useScrollIntoView from "../../../hooks/useScrollIntoView";
import FormCheckbox from "./formCheckbox";

const Index: React.FC = () => {
  useNavSideBar([
    { path: "/checkbox#installation", label: "Installation" },
    { path: "/checkbox#usage", label: "Usage" },
    {
        path: "/checkbox#example",
        label: "Example",
        items: [
          { path: "/checkbox#example-withtext", label: "With Text" },
          { path: "/checkbox#example-disabled", label: "Disabled" },
        ],
    },
    { path: "/checkbox#props", label: "Props" },
  ]);
  useScrollIntoView()

  const importCode = `import { CustomCheckbox } from "mainApp/checkbox";
  `;
  const previewCode = `
<CustomCheckbox 
    id="terms" 
    styleLabel="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" 
    label= "Accept terms and conditions"
 />
`;


  const propsData = [
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Change the default rendered element for the one passed as a child, merging their props and behavior.",
    },
    {
      name: "defaultChecked",
      type: "boolean | indeterminate",
      default: "undefined",
      description: "The checked state of the checkbox when it is initially rendered. Use when you do not need to control its checked state.",
    },
    {
      name: "checked",
      type: "boolean | indeterminate",
      default: "undefined",
      description: "The controlled checked state of the checkbox. Must be used in conjunction with onCheckedChange.",
    },
    {
      name: "onCheckedChange",
      type: "function",
      default: "undefined",
      description: "Event handler called when the checked state of the checkbox changes.",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "undefined",
      description: "When true, prevents the user from interacting with the checkbox.",
    },
    {
      name: "required ",
      type: "boolean",
      default: "undefined",
      description:"When true, indicates that the user must check the checkbox before the owning form can be submitted.",
    },
    {
        name: "name ",
        type: "string",
        default: "undefined",
        description:"The name of the checkbox. Submitted with its owning form as part of a name/value pair.",
    },
    {
        name: "value ",
        type: "string",
        default: "on",
        description:"The value given as data when submitted with a name.",
    },
  ];

  const valueData = [
    {
        name: "[data-state]",
        value: `{"checked" | "unchecked" | "indeterminate"}`
    },
    {
        name: "[data-disabled]",
        value: `Present when disabled`
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
          Checkbox
        </h1>
        <p className="text-base text-muted-foreground">
          <span className="inline-block align-top [text-decoration:inherit] max-w-[538px]">
          A control that allows the user to toggle between checked and not checked.
          </span>
        </p>
      </div>
      <br />
      <div className="space-y-2">
        <FormCheckbox />
      </div>
      <br />
      <div className="space-y-2" id="#installation">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Installation
        </h3>
        <hr />
        <CodeBlocks code={`npm install @radix-ui/react-checkbox`} language="js" />
      </div>
      <br />
      <div className="space-y-2">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight" id="#usage">Usage</h3>
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
        <WithText />
        <br />
        <Disabled />
        <br />
        <br />
      </div>
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
