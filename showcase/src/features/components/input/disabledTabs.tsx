import { CustomTabs } from "mainApp/tabs";
import { Input } from "mainApp/input";
import CodeBlocks from "../../../components/codeBLock";

function PreviewTabs() {
  const previewCode = `
<Input
  type="text"
  disabled={true}
  className="custom-class"
  placeholder="Enter your text here"
/>
`;

  const tabs = [
    {
      trigger: <span>Preview</span>,
      value: "preview",
      content: (
        <div className="w-full border h-[400px] rounded-sm flex items-center justify-center">
          <Input
            type="text"
            disabled={true}
            className="w-[400px]"
            placeholder="Enter your text here"
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
      <CustomTabs tabs={tabs} />
    </>
  );
}

export default PreviewTabs;
