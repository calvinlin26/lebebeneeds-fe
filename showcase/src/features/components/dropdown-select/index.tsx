import React from "react";
import CustomTable from "mainApp/table";
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import useScrollIntoView from "../../../hooks/useScrollIntoView";
import PreviewTabs from "./previewTabs";
import GroupTabs from "./groupTabs";
import SingleTabs from "./singleTabs";
import DisabledTabs from "./disabledTabs";

const Index: React.FC = () => {
  useNavSideBar([
    { path: "/dropdown-select#installation", label: "Installation" },
    { path: "/dropdown-select#usage", label: "Usage" },
    {
      path: "/dropdown-select#example",
      label: "Example",
      items: [
        { path: "/dropdown-select#example-group", label: "Group" },
        { path: "/dropdown-select#example-single", label: "Single" },
        { path: "/dropdown-select#example-disabled", label: "disabled" },
      ],
    },
    { path: "/dropdown-select#props", label: "Props" },
  ]);
  useScrollIntoView();

  const importCode = `import CustomAvatar from "mainApp/avatar";
  `;
  const previewCode = `
const data = [ 
  { 
    label: 'Fruits', 
    items: [ 
      { value: 'apple', label: 'Apple' }, 
      { value: 'banana', label: 'Banana' },
    ], 
  }, 
  { value: 'meat', label: 'Meat' },
];

<DropdownSelect 
  name="foodSelect" 
  placeholder="Select a food" 
  emptyState="No options available" 
  data={data} 
  onOpenChange={handleOpenChange} 
  onChange={handleChange} 
  value={selected}
  defaultValue=”apple”
  className=”w-1/2”
/>
`;

  const propsData = [
    {
      name: "name",
      type: "string",
      default: '"Select"',
      description: "The name of the select input.",
    },
    {
      name: "placeholder",
      type: "string",
      default: '"Select an option"',
      description: "The placeholder text for the select input.",
    },
    {
      name: "emptyState",
      type: "string",
      default: '"No data"',
      description: "The text to display when there are no options available.",
    },
    {
      name: "position",
      type: '"popper"',
      default: "undefined",
      description: "The position of the dropdown content.",
    },
    {
      name: "data",
      type: "GroupOrItem[]",
      default: "[]",
      description:
        "The data to populate the dropdown options. Can be an array of items or groups of items.",
    },
    {
      name: "onOpenChange",
      type: "(isOpen: boolean) => void",
      default: "() => {}",
      description:
        "Callback function called when the dropdown open state changes.",
    },
    {
      name: "onChange",
      type: "(event: { target: { value: any; name: string } }) => void",
      default: "() => {}",
      description: "Callback function called when a value is selected.",
    },
    {
      name: "defaultValue",
      type: "string",
      default: "undefined",
      description: "The default value of the select input.",
    },
    {
      name: "value",
      type: "string",
      default: "undefined",
      description: "The controlled value of the select input.",
    },
    {
      name: "className",
      type: "string",
      default: "undefined",
      description: "Additional className for custom styling.",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Disables the select input.",
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
          Dropdown Select
        </h1>
        <p className="text-base text-muted-foreground">
          <span className="inline-block align-top [text-decoration:inherit] max-w-[538px]">
            Displays a list of options for the user to pick from—triggered by a
            button.
          </span>
        </p>
      </div>
      <br />
      <PreviewTabs />
      <br />
      <div className="space-y-2" id="#installation">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Installation
        </h3>
        <hr />
        <CodeBlocks code={`npm install @radix-ui/react-select`} language="js" />
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
        <GroupTabs />
        <br />
        <SingleTabs />
        <br />
        <DisabledTabs />
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

export default Index;
