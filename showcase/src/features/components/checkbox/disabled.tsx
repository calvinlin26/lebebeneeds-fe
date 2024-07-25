import { CustomTabs } from "mainApp/tabs";
import { CustomCheckbox } from "mainApp/checkbox";
import CodeBlocks from "../../../components/codeBLock";

function Disabled() {
  const previewCode = `
<CustomCheckbox 
    id="terms" 
    styleLabel="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" 
    label= "Accept terms and conditions"
    disabled= {true}
 />
`;

const tabs = [
    {
        trigger: <span>Preview</span>,
        value: "preview",
        content: (
            <div className="w-full border h-[400px] rounded-sm flex items-center justify-center">
                <CustomCheckbox
                    id="terms"
                    styleLabel="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    label="Accept terms and conditions"
                    disabled={true}
                />
            </div>
        ),
    },
    {
        trigger: <span>Code</span>,
        value: "code",
        content: <CodeBlocks code={ previewCode} language="js" />,
    }
]

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

export default Disabled;
