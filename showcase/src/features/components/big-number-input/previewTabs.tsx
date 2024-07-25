import { CustomTabs } from "mainApp/tabs";
//import { Input } from "mainApp/input";
import { BigInput } from "mainApp/big-number-input";
import CodeBlocks from "../../../components/codeBLock";

function PreviewTabs() {
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

  const fetchValue = "99999999999999.99";

  const tabs = [
    {
      trigger: <span>Preview</span>,
      value: "preview",
      content: (
        <div className="w-full border h-[400px] rounded-sm flex items-center justify-center">
          <div>
            <div className="flex items-center space-x-2">
              <BigInput
                placeholder="Input Big Number"
                fetchedValue={fetchValue}
                className={"bg-white text-black"}
              />
            </div>
          </div>
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
