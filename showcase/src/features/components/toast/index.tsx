import { useState } from "react";
import { Button } from "mainApp/button";
import CodeBlocks from "../../../components/codeBLock";
import { CustomTabs } from "mainApp/tabs";
import { toast, Toaster } from "sonner";
import useNavSideBar from "../../../hooks/useNavSideBar";
import useScrollIntoView from "../../../hooks/useScrollIntoView";
import { generateTabContent } from "../../../services/generateTabContent";

const Index = () => {
  const [propsToaster, setPropsToaster] = useState({});
  useNavSideBar([
    { path: "/toast#installation", label: "Installation" },
    { path: "/toast#usage", label: "Usage" },
    {
      path: "/toast#example",
      label: "Example",
      items: [
        { label: "Position", path: "/toast#example-position" },
        { label: "Rich Color", path: "/toast#example-richColor" },
        { label: "Close Button", path: "/toast#example-closeButton" },
        { label: "Default", path: "/toast#example-default" },
        { label: "Description", path: "/toast#example-description" },
        { label: "Success", path: "/toast#example-success" },
        { label: "Info", path: "/toast#example-info" },
        { label: "Warning", path: "/toast#example-warning" },
        { label: "Error", path: "/toast#example-error" },
        { label: "Action", path: "/toast#example-action" },
        { label: "Promise", path: "/toast#example-promise" },
        { label: "Custom", path: "/toast#example-custom" },
        { label: "Headless", path: "/toast#example-headless" },
      ],
    },
  ]);

  useScrollIntoView();

  const importCode = `import { Toaster, toast } from "path/to/sonner";
`;
  const previewCode = `
<React.StrictMode>
  <TokenProvider>
    <RouterProvider router={router} />
    <Toaster/>
  </TokenProvider>
</React.StrictMode>

//...

toast("Event has been created", {
  description: "Sunday, December 03, 2023 at 9:00 AM",
  action: {
    label: "Undo",
    onClick: () => console.log("Undo"),
  },
})
`;

  const usageCode = `import { toast } from "sonner";
`;
  const previewUsageCode = `
<button onClick={()=>
    toast("Event has been created", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    })
  }
>
  Try Me
</button>
`;

  const positionTabs = generateTabContent(
    <>
      <Button
        onClick={() => {
          setPropsToaster({ ...propsToaster, position: "top-left" });
          toast("Event has been created");
        }}
      >
        Top Left
      </Button>
      <Button
        onClick={() => {
          setPropsToaster({ ...propsToaster, position: "top-center" });
          toast("Event has been created");
        }}
      >
        Top Center
      </Button>
      <Button
        onClick={() => {
          setPropsToaster({ ...propsToaster, position: "top-right" });
          toast("Event has been created");
        }}
      >
        Top Right
      </Button>
      <Button
        onClick={() => {
          setPropsToaster({ ...propsToaster, position: "bottom-left" });
          toast("Event has been created");
        }}
      >
        Bottom Left
      </Button>
      <Button
        onClick={() => {
          setPropsToaster({ ...propsToaster, position: "bottom-center" });
          toast("Event has been created");
        }}
      >
        Bottom Center
      </Button>
      <Button
        onClick={() => {
          setPropsToaster({ ...propsToaster, position: "bottom-right" });
          toast("Event has been created");
        }}
      >
        Bottom Right
      </Button>
    </>,
    `
<Toaster position="top-left" />
<Toaster position="top-center" />
<Toaster position="top-right" />
<Toaster position="bottom-left" />
<Toaster position="bottom-center" />
<Toaster position="bottom-right" />
    `
  );

  const richColorTabs = generateTabContent(
    <>
      <Button
        onClick={() => {
          setPropsToaster({ ...propsToaster, richColors: true });
          toast.success("Event has been created");
        }}
      >
        Success
      </Button>
      <Button
        onClick={() => {
          setPropsToaster({ ...propsToaster, richColors: true });
          toast.info("Event has been created");
        }}
      >
        Info
      </Button>
      <Button
        onClick={() => {
          setPropsToaster({ ...propsToaster, richColors: true });
          toast.warning("Event has been created");
        }}
      >
        Warning
      </Button>
      <Button
        onClick={() => {
          setPropsToaster({ ...propsToaster, richColors: true });
          toast.error("Event has been created");
        }}
      >
        Error
      </Button>
      <Button
        onClick={() => {
          setPropsToaster({ ...propsToaster, richColors: false });
          toast("Event has been created");
        }}
      >
        Default
      </Button>
    </>,
    `<Toaster richColors />`
  );

  const closeButtonTabs = generateTabContent(
    <>
      <Button
        onClick={() => {
          setPropsToaster({ ...propsToaster, closeButton: true });
          toast("Event has been created", {
            description: "Monday, January 3rd at 6:00pm",
          });
        }}
      >
        Close Button
      </Button>
      <Button
        onClick={() => {
          setPropsToaster({ ...propsToaster, closeButton: false });
          toast("Event has been created", {
            description: "Monday, January 3rd at 6:00pm",
          });
        }}
      >
        Default
      </Button>
    </>,
    `<Toaster closeButton />`
  );

  const previewTabs = generateTabContent(
    <Button
      onClick={() =>
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Try Me
    </Button>,
    importCode + previewCode
  );

  const defaultTabs = generateTabContent(
    <Button onClick={() => toast("Event has been created")}>Try Me</Button>,
    `toast('Event has been created')`
  );

  const descriptionTabs = generateTabContent(
    <Button
      onClick={() =>
        toast.message("Event has been created", {
          description: "Monday, January 3rd at 6:00pm",
        })
      }
    >
      Try Me
    </Button>,
    `toast.message('Event has been created', {
  description: 'Monday, January 3rd at 6:00pm',
})`
  );

  const successTabs = generateTabContent(
    <Button onClick={() => toast.success("Event has been created")}>
      Try Me
    </Button>,
    `toast.success('Event has been created')`
  );

  const infoTabs = generateTabContent(
    <Button onClick={() => toast.info("Event has been created")}>
      Try Me
    </Button>,
    `toast.info('Event has been created')`
  );

  const warningTabs = generateTabContent(
    <Button onClick={() => toast.warning("Event has been created")}>
      Try Me
    </Button>,
    `toast.warning('Event has been created')`
  );

  const errorTabs = generateTabContent(
    <Button onClick={() => toast.error("Event has been created")}>
      Try Me
    </Button>,
    `toast.error('Event has been created')`
  );

  const actionTabs = generateTabContent(
    <Button
      onClick={() =>
        toast("Event has been created", {
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Try Me
    </Button>,
    `toast('Event has been created', {
  action: {
    label: 'Undo',
    onClick: () => console.log('Undo')
  },
})`
  );

  const promiseTabs = generateTabContent(
    <Button
      onClick={() => {
        const promise = () =>
          new Promise((resolve) =>
            setTimeout(() => resolve({ name: "Sonner" }), 2000)
          );
        toast.promise(promise, {
          loading: "Loading...",
          success: (data: any) => {
            return `${data.name} toast has been added`;
          },
          error: "Error",
        });
      }}
    >
      Try Me
    </Button>,
    `const promise = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ name: "Sonner" }), 2000)
  );
toast.promise(promise, {
  loading: "Loading...",
  success: (data: any) => {
    return {data.name} toast has been added;
  },
  error: "Error",
});`
  );

  const customTabs = generateTabContent(
    <Button
      onClick={() => toast(<div>A custom toast with default styling</div>)}
    >
      Try Me
    </Button>,
    `toast(<div>A custom toast with default styling</div>)`
  );

  const headlessTabs = generateTabContent(
    <Button
      onClick={() =>
        toast.custom((t) => (
          <div>
            <h1>Custom toast</h1>
            <button onClick={() => toast.dismiss(t)}>Dismiss</button>
          </div>
        ))
      }
    >
      Try Me
    </Button>,
    `toast.custom((t) => (
  <div>
    <h1>Custom toast</h1>
     <button onClick={() => toast.dismiss(t)}>Dismiss</button>
  </div>
))`
  );

  return (
    <div>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
          Toast (Sonner)
        </h1>
        <p className="text-base text-muted-foreground">
          <span className="inline-block align-top [text-decoration:inherit] max-w-[538px]">
            The Toast is a flexible and customizable notification system for
            React applications. This component allows for displaying transient
            messages to the user, such as success, error, or informational
            notifications, in a non-intrusive manner.
          </span>
        </p>
      </div>
      <br />
      <div className="space-y-2">
        <CustomTabs tabs={previewTabs} />
      </div>
      <br />
      <div className="space-y-2" id="#installation">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Installation
        </h3>
        <p className="text-base">
          <span className="inline-block align-top [text-decoration:inherit] max-w-[538px]">
            Ensure you have the necessary dependencies installed:
          </span>
        </p>
        <CodeBlocks code={`npm install sonner next-themes`} language="js" />
      </div>
      <br />
      <div className="space-y-2" id="#usage">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">Usage</h3>
        <hr />
        <CodeBlocks code={usageCode} language="js" />
        <br />
        <CodeBlocks code={previewUsageCode} language="js" />
      </div>
      <br />
      <div className="space-y-2">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Example
        </h3>
        <hr />
        <h5
          className="scroll-m-20 text-xl font-bold tracking-tight"
          id="#example-position"
        >
          Position
        </h5>
        <CustomTabs tabs={positionTabs} />
        <br />
        <h5
          className="scroll-m-20 text-xl font-bold tracking-tight"
          id="#example-richColor"
        >
          Rich Color
        </h5>
        <CustomTabs tabs={richColorTabs} />
        <br />
        <h5
          className="scroll-m-20 text-xl font-bold tracking-tight"
          id="#example-closeButton"
        >
          Close Button
        </h5>
        <CustomTabs tabs={closeButtonTabs} />
        <br />
        <h5
          className="scroll-m-20 text-xl font-bold tracking-tight"
          id="#example-default"
        >
          Default
        </h5>
        <CustomTabs tabs={defaultTabs} />
        <br />
        <h5
          className="scroll-m-20 text-xl font-bold tracking-tight"
          id="#example-default"
        >
          Default
        </h5>
        <CustomTabs tabs={defaultTabs} />
        <br />
        <h5
          className="scroll-m-20 text-xl font-bold tracking-tight"
          id="#example-description"
        >
          Description
        </h5>
        <CustomTabs tabs={descriptionTabs} />
        <br />
        <h5
          className="scroll-m-20 text-xl font-bold tracking-tight"
          id="#example-success"
        >
          Success
        </h5>
        <CustomTabs tabs={successTabs} />
        <br />
        <h5
          className="scroll-m-20 text-xl font-bold tracking-tight"
          id="#example-info"
        >
          Info
        </h5>
        <CustomTabs tabs={infoTabs} />
        <br />

        <h5
          className="scroll-m-20 text-xl font-bold tracking-tight"
          id="#example-warning"
        >
          Warning
        </h5>
        <CustomTabs tabs={warningTabs} />
        <br />
        <h5
          className="scroll-m-20 text-xl font-bold tracking-tight"
          id="#example-error"
        >
          Error
        </h5>
        <CustomTabs tabs={errorTabs} />
        <br />
        <h5
          className="scroll-m-20 text-xl font-bold tracking-tight"
          id="#example-action"
        >
          Action
        </h5>
        <CustomTabs tabs={actionTabs} />
        <br />
        <h5
          className="scroll-m-20 text-xl font-bold tracking-tight"
          id="#example-promise"
        >
          Promise
        </h5>
        <CustomTabs tabs={promiseTabs} />
        <br />
        <h5
          className="scroll-m-20 text-xl font-bold tracking-tight"
          id="#example-custom"
        >
          Custom
        </h5>
        <CustomTabs tabs={customTabs} />
        <br />
        <h5
          className="scroll-m-20 text-xl font-bold tracking-tight"
          id="#example-headless"
        >
          Headless
        </h5>
        <CustomTabs tabs={headlessTabs} />
      </div>
      <Toaster {...propsToaster} />
    </div>
  );
};

export default Index;
