import { Button } from "mainApp/button";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import CodeBlocks from "../../../components/codeBLock";
import CustomTable from "mainApp/table";
import { CustomTabs } from "mainApp/tabs";
import { ReactNode } from "react";
import useNavSideBar from "../../../hooks/useNavSideBar";
import useScrollIntoView from "../../../hooks/useScrollIntoView";

const ButtonShowCase = () => {
  useNavSideBar([
    { path: "/button#installation", label: "Installation" },
    {
      path: "/button#usage",
      label: "Usage",
      items: [
        { path: "/button#default-button", label: "Default Button" },
        { path: "/button#destructive-button", label: "Destructive Button" },
        { path: "/button#outline-button", label: "Outline Button" },
        { path: "/button#secondary-button", label: "Secondary Button" },
        { path: "/button#ghost-button", label: "Ghost Button" },
        { path: "/button#link-button", label: "Link Button" },
        { path: "/button#small-button", label: "Small Button" },
        { path: "/button#large-button", label: "Large Button" },
        { path: "/button#icon-button", label: "Icon Button" },
        {
          path: "/button#custom-element-button",
          label: "Custom Element Button",
        },
      ],
    },
    { path: "/button#props", label: "Props" },
  ]);

  useScrollIntoView();

  const importCode = `import { Button, buttonVariants } from "mainApp/button";`;
  const previewCode = `
export function ButtonDemo() {
  return <Button>Button</Button>;
}
`;

  const generateTabContent = (buttonElement: ReactNode, codeString: string) => [
    {
      trigger: <span>Preview</span>,
      value: "preview",
      content: (
        <div className="w-full border h-[400px] rounded-sm flex items-center justify-center">
          {buttonElement}
        </div>
      ),
    },
    {
      trigger: <span>Code</span>,
      value: "code",
      content: <CodeBlocks code={codeString} language="js" />,
    },
  ];

  const tabs = generateTabContent(
    <Button>Button</Button>,
    importCode + previewCode
  );
  const defaultButton = generateTabContent(
    <Button>Default Button</Button>,
    `<Button>Default Button</Button>`
  );
  const destructiveButton = generateTabContent(
    <Button variant="destructive">Destructive Button</Button>,
    `<Button variant="destructive">Destructive Button</Button>`
  );
  const outlineButton = generateTabContent(
    <Button variant="outline">Outline Button</Button>,
    `<Button variant="outline">Outline Button</Button>`
  );
  const secondaryButton = generateTabContent(
    <Button variant="secondary">Secondary Button</Button>,
    `<Button variant="secondary">Secondary Button</Button>`
  );
  const ghostButton = generateTabContent(
    <Button variant="ghost">Ghost Button</Button>,
    `<Button variant="ghost">Ghost Button</Button>`
  );
  const linkButton = generateTabContent(
    <Button variant="link">Link Button</Button>,
    `<Button variant="link">Link Button</Button>`
  );
  const smallButton = generateTabContent(
    <Button size="sm">Small Button</Button>,
    `<Button size="sm">Small Button</Button>`
  );
  const largeButton = generateTabContent(
    <Button size="lg">Large Button</Button>,
    `<Button size="lg">Large Button</Button>`
  );
  const iconButton = generateTabContent(
    <Button variant="outline" size="icon">
      <ChevronRightIcon className="h-4 w-4" />
    </Button>,
    `<Button size="icon"><svg>...</svg> {/* Your icon here */}</Button>`
  );
  const customElementButton = generateTabContent(
    <Button asChild>
      <a href="https://example.com">Link styled as Button</a>
    </Button>,
    `<Button asChild><a href="https://example.com">Link styled as Button</a></Button>`
  );

  const propsData = [
    {
      name: "asChild",
      type: "boolean (optional)",
      default: "false",
      description:
        "A boolean indicating if the button should render as a different element using the Slot component from Radix UI",
    },
    {
      name: "variant",
      type: `"default" | "destructive" | "outline" | "secondary" | "ghost" | "link" (optional)`,
      default: `"default"`,
      description: "Specifies the button variant style.",
    },
    {
      name: "size",
      type: `"default" | "sm" | "lg" | "icon" (optional)`,
      default: `"default"`,
      description: "Specifies the button size.",
    },
    {
      name: "className",
      type: "string (optional)",
      default: "undefined",
      description: "Additional CSS classes to apply to the button.",
    },
    {
      name: "ref",
      type: "React.Ref<HTMLButtonElement> (optional)",
      default: "undefined",
      description: "Ref for the button element.",
    },
    {
      name: "children",
      type: "React.ReactNode",
      default: "undefined",
      description: "The content of the button.",
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
          Button
        </h1>
        <p className="text-base text-muted-foreground">
          <span className="inline-block align-top [text-decoration:inherit] max-w-[538px]">
            Displays a button or a component that looks like a button.
          </span>
        </p>
      </div>
      <br />
      <div className="space-y-2">
        <CustomTabs
          tabs={tabs}
          onValueChange={() => console.log("Tab changed")}
        />
      </div>
      <br />
      <div className="space-y-2" id="#installation">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Installation
        </h3>
        <hr />
        <p className="text-base">
          <span className="inline-block align-top [text-decoration:inherit] max-w-[538px]">
            Ensure you have the necessary dependencies installed:
          </span>
        </p>
        <CodeBlocks
          code={`npm install @radix-ui/react-slot class-variance-authority`}
          language="js"
        />
      </div>
      <br />
      <div className="space-y-2" id="#usage">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">Usage</h3>
        <hr />
        <h5
          className="scroll-m-20 text-xl font-bold tracking-tight"
          id="#default-button"
        >
          Default Button
        </h5>
        <CustomTabs
          tabs={defaultButton}
          onValueChange={() => console.log("Tab changed")}
        />
        <br />
        <h5
          className="scroll-m-20 text-xl font-bold tracking-tight"
          id="#destructive-button"
        >
          Destructive Button
        </h5>
        <CustomTabs
          tabs={destructiveButton}
          onValueChange={() => console.log("Tab changed")}
        />
        <br />
        <h5
          className="scroll-m-20 text-xl font-bold tracking-tight"
          id="#outline-button"
        >
          Outline Button
        </h5>
        <CustomTabs
          tabs={outlineButton}
          onValueChange={() => console.log("Tab changed")}
        />
        <br />
        <h5
          className="scroll-m-20 text-xl font-bold tracking-tight"
          id="#secondary-button"
        >
          Secondary Button
        </h5>
        <CustomTabs
          tabs={secondaryButton}
          onValueChange={() => console.log("Tab changed")}
        />
        <br />
        <h5
          className="scroll-m-20 text-xl font-bold tracking-tight"
          id="#ghost-button"
        >
          Ghost Button
        </h5>
        <CustomTabs
          tabs={ghostButton}
          onValueChange={() => console.log("Tab changed")}
        />
        <br />
        <h5
          className="scroll-m-20 text-xl font-bold tracking-tight"
          id="#link-button"
        >
          Link Button
        </h5>
        <CustomTabs
          tabs={linkButton}
          onValueChange={() => console.log("Tab changed")}
        />
        <br />
        <h5
          className="scroll-m-20 text-xl font-bold tracking-tight"
          id="#small-button"
        >
          Small Button
        </h5>
        <CustomTabs
          tabs={smallButton}
          onValueChange={() => console.log("Tab changed")}
        />
        <br />
        <h5
          className="scroll-m-20 text-xl font-bold tracking-tight"
          id="#large-button"
        >
          Large Button
        </h5>
        <CustomTabs
          tabs={largeButton}
          onValueChange={() => console.log("Tab changed")}
        />
        <br />
        <h5
          className="scroll-m-20 text-xl font-bold tracking-tight"
          id="#icon-button"
        >
          Icon Button
        </h5>
        <CustomTabs
          tabs={iconButton}
          onValueChange={() => console.log("Tab changed")}
        />
        <br />
        <h5
          className="scroll-m-20 text-xl font-bold tracking-tight"
          id="#custom-element-button"
        >
          Custom Element Button
        </h5>
        <CustomTabs
          tabs={customElementButton}
          onValueChange={() => console.log("Tab changed")}
        />
      </div>
      <br />
      <div className="space-y-2" id="#props">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">Props</h3>
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
};

export default ButtonShowCase;
