import React from "react";
import CustomTable from "mainApp/table";
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import useScrollIntoView from "../../../hooks/useScrollIntoView";
import PreviewTabs from "./previewTabs";

const Index: React.FC = () => {
  useNavSideBar([
    { path: "/table#installation", label: "Installation" },
    { path: "/table#usage", label: "Usage" },
    { path: "/table#props", label: "Props" },
  ]);
  useScrollIntoView();

  const importCode = `import CustomTable from './path/to/CustomTable';";
  `;
  const previewCode = `

  const columns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Active', accessor: 'active' },
  ];

  const data = [
    { name: 'John Doe', active: 'Yes' },
    { name: 'Jane Smith', active: 'No' },
  ];
  
  const footer = { name: 'Total', active: '2' };

  <CustomTable
  columns={columns}
  data={data}
  caption="User Information"
  className="min-w-full divide-y divide-gray-200"
  headerClassName="bg-gray-50"
  bodyClassName="bg-white divide-y divide-gray-200"
  footerClassName="bg-gray-50"
/>
`;

  const propsData = [
    {
      name: "columns",
      type: "string",
      default: "undefined",
      description: "An array of objects defining the columns of the table.",
    },
    {
      name: "header",
      type: "string",
      default: "undefined",
      description: "The placeholder text for the select input.",
    },
    {
      name: "accessor",
      type: "[]",
      default: '"No data"',
      description: "The key in the data object that this column will display.",
    },
    {
      name: "headerClassName",
      type: '"string"',
      default: "undefined",
      description: "(Optional) A custom class for the header cell",
    },
    {
      name: "data",
      type: "[]",
      default: "[]",
      description:
        "An array of objects representing the rows of the table. Each object should have keys that correspond to the accessor values in the columns array.",
    },
    {
      name: "caption",
      type: "string",
      default: "undefined",
      description: "(optional) A string for the table's caption.",
    },
    {
      name: "footer",
      type: "string",
      default: "undefined",
      description:
        "(optional) An object representing the footer row, similar to the data objects.",
    },
    {
      name: "className",
      type: "string",
      default: "undefined",
      description: "(optional) A custom class for the entire table.",
    },
    {
      name: "headerClassName",
      type: "string",
      default: "undefined",
      description: "(optional) A custom class for the header row.",
    },
    {
      name: "bodyClassName",
      type: "string",
      default: "undefined",
      description: "(optional) A custom class for the body section.",
    },
    {
      name: "footerClassName",
      type: "boolean",
      default: "undefined",
      description: "(optional) A custom class for the footer row.",
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
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">Table</h1>
        <p className="text-base text-muted-foreground">
          <span className="inline-block align-top [text-decoration:inherit] max-w-[538px]">
            A responsive table component.
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
        <CodeBlocks code={`npm install @radix-ui/react-table`} language="js" />
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
