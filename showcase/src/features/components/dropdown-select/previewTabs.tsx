import { CustomTabs } from "mainApp/tabs";
import DropdownSelect from "mainApp/select";
import CodeBlocks from "../../../components/codeBLock";

function PreviewTabs() {
  const importCode = `import DropdownSelect from "mainApp/select";
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
            defaultValue="apple"
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
      content: <CodeBlocks code={importCode + previewCode} language="js" />,
    },
  ];
  return (
    <div className="space-y-2">
      <CustomTabs tabs={tabs} />
    </div>
  );
}

export default PreviewTabs;
