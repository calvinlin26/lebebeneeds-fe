import { CustomTabs } from "mainApp/tabs";
import DropdownSelect from "mainApp/select";
import CodeBlocks from "../../../components/codeBLock";

function DisabledTabs() {
  const previewCode = `
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
  disabled={true}
/>
`;

  const data = [
    {
      label: "Fruits",
      items: [
        { value: "apple", label: "Apple" },
        { value: "banana", label: "Banana" },
      ],
    },
    { value: "meat", label: "Meat" },
  ];

  const tabs = [
    {
      trigger: <span>Preview</span>,
      value: "preview",
      content: (
        <div className="w-full border h-[400px] rounded-sm flex items-center justify-center">
          <DropdownSelect
            className="w-[300px]"
            data={data}
            dfaultValue="apple"
            disabled={true}
            name="foodSelect"
            placeholder="Select a food"
            emptyState="No options available"
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
        id="#example-disabled"
      >
        Disabled
      </h5>
      <CustomTabs
        tabs={tabs}
        onValueChange={() => console.log("Tab changed")}
      />
    </>
  );
}

export default DisabledTabs;
