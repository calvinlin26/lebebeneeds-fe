import { CustomTabs } from "mainApp/tabs";
import { CustomAvatar } from "mainApp/avatar";
import CodeBlocks from "../../../components/codeBLock";
import { useState } from "react";

function PreviewTabs() {
  const [status, setStatus] = useState("");
  const importCode = `import { CustomAvatar } from "mainApp/avatar";
  `;
  const previewCode = `
<CustomAvatar
  className="bg-cyan-500 text-7xl text-black"
  image={image}
  fallback={status}
  onLoadingStatusChange={setStatus}
/>
`;

  const tabs = [
    {
      trigger: <span>Preview</span>,
      value: "preview",
      content: (
        <div className="w-full border h-[400px] rounded-sm flex items-center justify-center">
          <CustomAvatar
            className="bg-cyan-500 text-7xl text-black"
            image="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            fallback={status}
            onLoadingStatusChange={setStatus}
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
