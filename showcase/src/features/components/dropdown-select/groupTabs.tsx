import { CustomTabs } from "mainApp/tabs";
import DropdownSelect from "mainApp/select";
import CodeBlocks from "../../../components/codeBLock";

function GroupTabs() {
  const previewCode = `
const data = [ 
  {
    label: "Fruits",
    items: [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
    ],
  },
  {
    label: "Meat",
    items: [
      { value: "wagyu", label: "Wagyu" },
      { value: "wahyu", label: "Wahyu" },
    ],
  },
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
    {
      label: "Meat",
      items: [
        { value: "wagyu", label: "Wagyu" },
        { value: "wahyu", label: "Wahyu" },
      ],
    },
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
      content: <CodeBlocks code={previewCode} language="js" />,
    },
  ];
  return (
    <>
      <h5
        className="scroll-m-20 text-xl font-bold tracking-tight"
        id="#example-group"
      >
        Group
      </h5>
      <CustomTabs tabs={tabs} />
    </>
  );
}

export default GroupTabs;
