import React from "react";
import CustomTable from "mainApp/table";
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import useScrollIntoView from "../../../hooks/useScrollIntoView";
import PreviewTabs from "./previewTabs";

const Index: React.FC = () => {
  useNavSideBar([
    { path: "/big-number-input#installation", label: "Installation" },
    { path: "/big-number-input#usage", label: "Usage" },
    { path: "/big-number-input#props", label: "Props" },
  ]);
  useScrollIntoView();

  const importCode = `
  import BigInput from './path/to/BigInput';
  `;
  const previewCode = `
  
  <BigInput 
  variant="default" 
  fieldSize=”default”
  placeholder=”Input placeholder”
  fetchedValue={fetchedValue}
  className={“bg-background rounded-lg”}
  onChange={() => foo()}
/>
   
`;

  const propsData = [
    {
      name: "variant",
      type: "string",
      default: "default",
      description: "The input style field variants.",
    },
    {
      name: "fieldSize",
      type: "string",
      default: "default",
      description: "TThe size of input field.",
    },
    {
      name: "placeholder",
      type: "string",
      default: "",
      description: "The input’s field placeholder.",
    },
    {
      name: "fetchedValue",
      type: "string | number | readonly String[]",
      default: "undefined",
      description: "Big input field’s value.",
    },
    {
      name: "className",
      type: "string",
      default: "undefined",
      description: "Tailwindcss class string.",
    },
    {
      name: "onChange",
      type: "string",
      default: "((value: string) => void",
      description: "A function to control Big Input value.",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description:
        "When true, prevents the user from interacting with the input.",
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
          Big Number Input
        </h1>
        <p className="text-base text-muted-foreground">
          <span className="inline-block align-top [text-decoration:inherit] max-w-[538px]">
            Displays a form input field or a component that looks like an input
            field with Big Number input (14.2).
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
        <CodeBlocks code={`npm install @radix-ui/react-input`} language="js" />
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
      </div>
    </div>
  );
};

export default Index;
