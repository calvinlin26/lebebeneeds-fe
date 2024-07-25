import { CustomTabs } from "mainApp/tabs";
import { Input } from "mainApp/input";
import CodeBlocks from "../../../components/codeBLock";

function PreviewTabs() {
  const importCode = `import { Input } from "mainApp/input";
  `;
  const previewCode = `
<Input
  type="text"
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
            variant="default"
            fieldSize="large"
            className="w-[400px]"
            placeholder="Enter your text here"
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
