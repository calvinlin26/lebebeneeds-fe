import CustomTable from "mainApp/table";
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import useScrollIntoView from "../../../hooks/useScrollIntoView";
import PreviewTabs from "./previewTabs";
function Index() {
  useNavSideBar([
    { path: "/avatar#installation", label: "Installation" },
    { path: "/avatar#usage", label: "Usage" },
    { path: "/avatar#props", label: "Props" },
  ]);
  useScrollIntoView();

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

  const propsData = [
    {
      name: "asChild",
      type: "boolean",
      default: "-",
      description:
        "A boolean indicating if the button should render as a different element using the Slot component from Radix UI.",
    },
    {
      name: "onLoadingStatusChange",
      type: "function",
      default: "-",
      description:
        "A callback providing information about the loading status of the image. This is useful in case you want to control more precisely what to render as the image is loading, the value is function (status: “idle” | “loading” | “loaded” | “error”) => void",
    },
    {
      name: "image",
      type: "string",
      default: "-",
      description:
        "the image to render. It will only render when it had loaded.",
    },
    {
      name: "fallback",
      type: "string",
      default: "-",
      description:
        "the element that renders when the image hasn’t loaded. This means whilst it’s loading or if there was an error.",
    },
    {
      name: "className",
      type: "string",
      default: "-",
      description: "Additional CSS classes to apply to the Avatar.",
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
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
          Avatar
        </h1>
        <p className="text-base text-muted-foreground">
          <span className="inline-block align-top [text-decoration:inherit] max-w-[538px]">
            An image element with a fallback for representing the user.
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
        <CodeBlocks code={`npm install @radix-ui/react-avatar`} language="js" />
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
