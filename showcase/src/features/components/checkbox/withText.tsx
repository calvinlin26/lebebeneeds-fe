import { CustomTabs } from "mainApp/tabs";
import { CustomCheckbox } from "mainApp/checkbox";
import CodeBlocks from "../../../components/codeBLock";

function WithText() {
  const previewCode = `
<div className="items-start flex space-x-1">
    <CustomCheckbox
        id="terms"
    />
    <div className="grid gap-1.5 leading-none">
        <label
            htmlFor="terms1"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
            Accept terms and conditions
        </label>
        <p className="text-sm text-muted-foreground">
            You agree to our Terms of Service and Privacy Policy.
        </p>
    </div>
</div>
`;

const tabs = [
    {
        trigger: <span>Preview</span>,
        value: "preview",
        content: (
            <div className="w-full border h-[400px] rounded-sm flex items-center justify-center">
                <div className="items-start flex space-x-1">
                    <CustomCheckbox
                        id="terms"
                    />
                    <div className="grid gap-1.5 leading-none">
                        <label
                            htmlFor="terms1"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Accept terms and conditions
                        </label>
                        <p className="text-sm text-muted-foreground">
                            You agree to our Terms of Service and Privacy Policy.
                        </p>
                    </div>
                </div>
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
        id="#example-withtext"
      >
         With text
      </h5>
      <CustomTabs
        tabs={tabs}
        onValueChange={() => console.log("Tab changed")}
      />
    </>
  );
}

export default WithText;
