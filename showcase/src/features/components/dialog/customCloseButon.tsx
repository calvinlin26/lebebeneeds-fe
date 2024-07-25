import { CustomTabs } from "mainApp/tabs";
import { Input } from "mainApp/input";
import { Button } from "mainApp/button";
import { CustomDialog } from "mainApp/dialog";
import { Copy } from "lucide-react"

import CodeBlocks from "../../../components/codeBLock";

function CustomClose() {
  const previewCode = `
<CustomDialog
    title="Share link"
    description="Anyone who has this link will be able to view this."
    content={<ContentDialogClose />}
    closeButtonLabel="Close"
    styleContent="sm:max-w-md"
    styleFooter="sm:justify-start"
    >
        <Button>Open Dialog</Button>
</CustomDialog>
`;

const ContentDialogClose = 
     (
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <label htmlFor="link" className="sr-only">
              Link
            </label>
            <Input
              className="focus-visible:none focus-visible:ring-0 focus-visible:ring-offset-0"
              id="link"
              defaultValue="https://showcase.com/docs/installation"
              readOnly
            />
          </div>
          <Button type="submit" size="sm" className="px-3">
            <span className="sr-only">Copy</span>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
    )

    const tabs = [
        {
            trigger: <span>Preview</span>,
            value: "preview",
            content: (
                <div className="w-full border h-[400px] rounded-sm flex items-center justify-center">
                    <CustomDialog
                        title="Share link"
                        description="Anyone who has this link will be able to view this."
                        content={ContentDialogClose}
                        closeButtonLabel="Close"
                        styleContent="sm:max-w-md"
                        styleFooter="sm:justify-start"
                    >
                        <Button>Open Dialog</Button>
                    </CustomDialog>
                </div>
            ),
        },
        {
            trigger: <span>Code</span>,
            value: "code",
            content: <CodeBlocks code={previewCode} language="js" />,
        }
    ]

  return (
    <>
      <h5
        className="scroll-m-20 text-xl font-bold tracking-tight"
        id="#example-customClose"
      >
         Custom Close Button
      </h5>
      <CustomTabs
        tabs={tabs}
        onValueChange={() => console.log("Tab changed")}
      />
    </>
  );
}

export default CustomClose;
