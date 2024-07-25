import CustomTable from "mainApp/table";
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import useScrollIntoView from "../../../hooks/useScrollIntoView";
import PreviewTabs from "./previewTabs";
import DefaultTabs from "./defaultTabs";
import UndelinedTabs from "./underlinedTabs";
import FileTabs from "./fileTabs";
import DisabledTabs from "./disabledTabs";

function Index() {
  useNavSideBar([
    { path: "/input#installation", label: "Installation" },
    { path: "/input#usage", label: "Usage" },
    {
      path: "/input#example",
      label: "Example",
      items: [
        { path: "/input#example-default", label: "default" },
        { path: "/input#example-underlined", label: "underlined" },
        { path: "/input#example-file", label: "file" },
        { path: "/input#example-disabled", label: "disabled" },
      ],
    },
    { path: "/input#props", label: "Props" },
  ]);
  useScrollIntoView();

  const importCode = `import { Input } from "mainApp/input";
  `;
  const previewCode = `
<Input
  type="text"
  className="custom-class"
  placeholder="Enter your text here"
/>
`;

  const propsData = [
    {
      name: "variant",
      type: "string (“default” | “underlined” | “file”)",
      default: "default",
      description: "The input style field variants.",
    },
    {
      name: "fieldSize",
      type: "string (“default” | “sm” | “lg”)",
      default: "default",
      description: "The size of input field.",
    },
    {
      name: "placeholder",
      type: "string",
      default: "-",
      description: "The input’s field placeholder.",
    },
    {
      name: "fetchedValue",
      type: "string",
      default: "-",
      description: "Big input field’s value.",
    },
    {
      name: "className",
      type: "string | undefined",
      default: "-",
      description: "Tailwindcss class string.",
    },
    {
      name: "onChange",
      type: "(value: string) => void | undefined",
      default: "-",
      description: "A function to control Big Input value.",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "-",
      description:
        "When true, prevents the user from interacting with the input.",
    },
  ];

  const columns = [
    {
      header: "Props Name",
      accessor: "name",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Type",
      accessor: "type",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Default",
      accessor: "default",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Description",
      accessor: "description",
      headerClassName: "text-left font-bold",
    },
  ];

  return (
    <div>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">Input</h1>
        <p className="text-base text-muted-foreground">
          <span className="inline-block align-top [text-decoration:inherit] max-w-[538px]">
            Displays a form input field or a component that looks like an input
            field.
          </span>
        </p>
      </div>
      <br />
      <PreviewTabs />
      <br />
      <div className="space-y-2" id="#installation">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Installation
        </h3>
        <hr />
        <CodeBlocks code={`npm install @radix-ui/react-input`} language="js" />
      </div>
      <br />
      <div className="space-y-2" id="#usage">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">Usage</h3>
        <hr />
        <CodeBlocks code={importCode} language="js" />
        <br />
        <CodeBlocks code={previewCode} language="js" />
      </div>
      <br />
      <div className="space-y-2">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Example
        </h3>
        <hr />
        <DefaultTabs />
        <br />
        <UndelinedTabs />
        <br />
        <FileTabs />
        <br />
        <DisabledTabs />
      </div>
      <br />
      <div className="space-y-2">
        <h3
          className="scroll-m-20 text-2xl font-bold tracking-tight"
          id="#props"
        >
          Props
        </h3>
        <hr />
        <CustomTable
          columns={columns}
          data={propsData}
          className="mt-4 border-collapse border border-gray-200 shadow-lg"
          headerClassName="bg-gray-100 text-gray-700"
          bodyClassName="bg-white"
        />
      </div>
    </div>
  );
}

export default Index;
