import CodeBlocks from "../../../components/codeBLock";
import { CustomTabs } from "mainApp/tabs";
import { MoonIcon } from "@radix-ui/react-icons";
import Navbar from "mainApp/navbar";

function PreviewTabs() {
  const importCode = `import Navbar from './navbar';
    `;
  const previewCode = `
<Navbar
  shadow="shadow-lg"
  maxWidth="max-w-6xl"
  logoIcon={<MoonIcon />}
  links={[
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ]}
  linksPosition="center"
/>
  `;

  const tabs = [
    {
      trigger: <span>Preview</span>,
      value: "preview",
      content: (
        <div className="w-full border h-[400px] rounded-sm items-center justify-center">
          <Navbar
            shadow="shadow-lg"
            maxWidth="max-w-6xl"
            logoIcon={<MoonIcon />}
            links={[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/contact", label: "Contact" },
            ]}
            linksPosition="center"
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
