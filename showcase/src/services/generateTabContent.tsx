import { ReactNode } from "react";
import CodeBlocks from "../components/codeBLock";

export const generateTabContent = (element: ReactNode, code: string) => [
  {
    trigger: <span>Preview</span>,
    value: "preview",
    content: (
      <div className="w-full border h-[400px] rounded-sm flex items-center justify-center gap-4">
        {element}
      </div>
    ),
  },
  {
    trigger: <span>Code</span>,
    value: "code",
    content: <CodeBlocks code={code} language="js" />,
  },
];
