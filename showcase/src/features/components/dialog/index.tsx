import React from "react";
import CustomTable from "mainApp/table";
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import useScrollIntoView from "../../../hooks/useScrollIntoView";
import { CustomDialog } from 'mainApp/dialog'
import { Button } from 'mainApp/button'
import { CustomTabs } from "mainApp/tabs";
import { Input } from "mainApp/input";
import CustomClose from "./customCloseButon";

const Index: React.FC = () => {
  useNavSideBar([
    { path: "/dialog#installation", label: "Installation" },
    { path: "/dialog#usage", label: "Usage" },
    {
        path: "/dialog#example",
        label: "Example",
        items: [
          { path: "/dialog#example-customClose", label: "Custom Close Button" },
        ],
    },
    { path: "/dialog#props", label: "Props" },
  ]);
  useScrollIntoView()

  const importCode = `import { CustomDialog } from "mainApp/dialog";
  `;
  const previewCode = `
const ContentDialog =
         (
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="name" className="text-right">
                        Name
                    </label>
                    <Input
                        id="name"
                        defaultValue="Pedro Duarte"
                        className="col-span-3 focus-visible:none focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="username" className="text-right">
                        Username
                    </label>
                    <Input
                        id="name"
                        defaultValue="Pedro Duarte"
                        className="col-span-3"
                    />
                </div>
            </div>
        )

<CustomDialog
    title="Edit Profile"
    description="Make changes to your profile here. Click save when you're done."
    content={ContentDialog}
    styleContent="sm:max-w-[425px]"
    footer= {<Button type="submit">Save changes</Button>}
    >
        <Button variant="outline">Edit Profile</Button>
</CustomDialog>
`;

    const ContentDialog =
         (
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="name" className="text-right">
                        Name
                    </label>
                    <Input
                        id="name"
                        defaultValue="Pedro Duarte"
                        className="col-span-3 focus-visible:none focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="username" className="text-right">
                        Username
                    </label>
                    <Input
                        id="name"
                        defaultValue="Pedro Duarte"
                        className="col-span-3"
                    />
                </div>
            </div>
        )

    const tabs = [
        {
            trigger: <span>Preview</span>,
            value: "preview",
            content: (
                <div className="w-full border h-[400px] rounded-sm flex items-center justify-center">
                    <CustomDialog
                        title="Edit Profile"
                        description="Make changes to your profile here. Click save when you're done."
                        content={ContentDialog}
                        styleContent="sm:max-w-[425px]"
                        footer= {<Button type="submit">Save changes</Button>}
                    >
                        <Button variant="outline">Edit Profile</Button>
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

  const propsData = [
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Change the default rendered element for the one passed as a child, merging their props and behavior.",
    },
    {
      name: "title",
      type: "string",
      default: "undefined",
      description: "An accessible title to be announced when the dialog is opened.",
    },
    {
      name: "description",
      type: "string",
      default: "undefined",
      description: "An optional accessible description to be announced when the dialog is opened.",
    },
    {
      name: "content",
      type: "ReactNode",
      default: "undefined",
      description: "Contains content to be rendered in the open dialog.",
    },
    {
        name: "footer",
        type: "ReactNode",
        default: "undefined",
        description: "Contains footer to be rendered in the open dialog.",
      },
    {
      name: "defaultOpen ",
      type: "boolean",
      default: "undefined",
      description: "The open state of the dialog when it is initially rendered. Use when you do not need to control its open state.",
    },
    {
      name: "onOpenChange  ",
      type: "function",
      default: "undefined",
      description:"Event handler called when the open state of the dialog changes.",
    },
    {
        name: "modal ",
        type: "boolean",
        default: "true",
        description:"The modality of the dialog. When set to true, interaction with outside elements will be disabled and only dialog content will be visible to screen readers.",
    },
    {
        name: "open",
        type: "boolean",
        default: "undefined",
        description:"The controlled open state of the dialog. Must be used in conjunction with onOpenChange.",
    },
    {
        name: "styleContent",
        type: "string",
        default: "undefined",
        description:"Additional CSS classes to apply to the Dialog Content.",
      },
      {
          name: "styleFooter ",
          type: "string",
          default: "undefined",
          description:"Additional CSS classes to apply to the Dialog Footer.",
      },
      {
          name: "closeButtonLabel ",
          type: "string",
          default: "undefined",
          description:"Add Label for bustton on Dialog close (Custom close button).",
      },
  ];

  const valueData = [
    {
        name: "[data-state]",
        value: `{"open" | "closed"}`
    },
  ]

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

  const columnsDataState = [
    {
        header: "Data attribute",
        accessor: "name",
        headerClassName: "text-left font-bold",
    },
    {
        header: "Values",
        accessor: "value",
        headerClassName: "text-left font-bold"
    }
  ]

  return (
    <div>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
          Dialog
        </h1>
        <p className="text-base text-muted-foreground">
          <span className="inline-block align-top [text-decoration:inherit] max-w-[538px]">
          A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.
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
        <CodeBlocks code={`npm install @radix-ui/react-checkbox`} language="js" />
      </div>
      <br />
      <div className="space-y-2">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight" id="#usage">Usage</h3>
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
        <CustomClose />
        <br />
        <br />
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
        <CustomTable
          columns={columnsDataState}
          data={valueData}
          className="mt-4 border-collapse border border-gray-200 shadow-lg"
          headerClassName="bg-gray-100 text-gray-700"
          bodyClassName="bg-white"
        />
      </div>
    </div>
  );
};

export default Index;
