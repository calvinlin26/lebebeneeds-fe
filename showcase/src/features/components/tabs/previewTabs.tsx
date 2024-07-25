import CodeBlocks from "../../../components/codeBLock";
import { CustomTabs } from "mainApp/tabs";

function PreviewTabs() {
  const importCode = `import { CustomTabs } from './CustomTabs';
    `;
  const previewCode = `
<CustomTabs
  tabs={[
    {
      trigger: <div>Account</div>,
      value: "account",
      content: <div>Make changes to your account here.</div>
    },
    {
      trigger: <div>Password</div>,
      value: "password",
      content: <div>Change your password here.</div>
    }
  ]}
/>
  `;

  const tabs = [
    {
      trigger: <span>Preview</span>,
      value: "preview",
      content: (
        <div className="w-full border h-[400px] rounded-sm flex items-center justify-center">
          <CustomTabs
            tabs={[
              {
                trigger: <div>Account</div>,
                value: "account",
                content: <div>Make changes to your account here.</div>,
              },
              {
                trigger: <div>Password</div>,
                value: "password",
                content: <div>Change your password here.</div>,
              },
            ]}
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
