import React from "react";
import { CustomTabs } from "mainApp/tabs";
import CustomTable from "mainApp/table";
import { Input } from "mainApp/input";
import { SubmitHandler, ControllerRenderProps, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CustomFormField, Form } from "mainApp/form";
import { z, ZodSchema } from "zod"
import { Button } from "mainApp/button"
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import useScrollIntoView from "../../../hooks/useScrollIntoView";
import { toast } from "sonner";

type UserSchema = {
    username: string;
  };

const formSchema:  ZodSchema<UserSchema> = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  });


const Index: React.FC = () => {
    const form = useForm<UserSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
        },
      });

      const onSubmit: SubmitHandler<UserSchema> = (data)=> {
        toast.success(`Form submitted successfully with value: ${data.username}`);
      }
    
  useNavSideBar([
    { path: "/form#installation", label: "Installation" },
    { path: "/form#usage", label: "Usage" },
    { path: "/form#props", label: "Props" },
  ]);
  useScrollIntoView()

  const importCode = `import { CustomFormField, Form } from "mainApp/form";
  `;
  const previewCode = `
import { Input } from "mainApp/input";
import { SubmitHandler, ControllerRenderProps, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const form = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function ProfileForm() {

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <CustomFormField
          control={form.control}
          name="username"
          label="Username"
        >
          {(field: ControllerRenderProps<UserSchema, "username">) => (
            <Input
             {...field}
             placeholder="Input username"
             type="text"
             disabled={form.formState.isSubmitting}
             aria-disabled={form.formState.isSubmitting}
           />
         )}
       </CustomFormField>
       <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}


`;

  const tabs = [
    {
      trigger: <span>Preview</span>,
      value: "preview",
      content: (
        <div className="w-full border h-[400px] rounded-sm flex items-center justify-center">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <CustomFormField
          control={form.control}
          name="username"
          label="Username"
        >
            {(field: ControllerRenderProps<UserSchema, "username">) => (
            <Input
             {...field}
             placeholder="Input username"
             type="text"
           />
            )}
       </CustomFormField>
       <Button type="submit">Submit</Button>
      </form>
    </Form>
        </div>
      ),
    },
    {
      trigger: <span>Code</span>,
      value: "code",
      content: <CodeBlocks code={importCode + previewCode} language="js" />,
    },
  ];

  const propsData = [
    {
      name: "name",
      type: "FieldPath<T>",
      default: "undefined",
      description: "The name of the field.",
    },
    {
      name: "label",
      type: "string",
      default: "undefined",
      description: " The label for the form field.",
    },
    {
      name: "placeholder",
      type: "string",
      default: "undefined",
      description: "The placeholder text for the form field.",
    },
    {
      name: "options ",
      type: "any[]",
      default: "undefined",
      description: "Options for select fields or similar.",
    },
    {
      name: "description",
      type: "string",
      default: "undefined",
      description: "Description text for the form field.",
    },
    {
      name: "control",
      type: "Control<T>",
      default: "undefined",
      description:"The control object from react-hook-form.",
    },
    {
        name: "required",
        type: "boolean",
        default: "undefined",
        description: "If true, a required indicator will be shown.",
      },
      {
        name: "children",
        type: "function",
        default: "undefined",
        description:"A render function that provides the form field props.",
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
  
  const codeAnatomy = `
<Form>
  <FormField
    control={...}
    name="..."
    render={() => (
      <FormItem>
        <FormLabel />
        <FormControl>
          { /* Your form field */}
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />
</Form>
  `
  const codeFormSchema = `
import { z } from "zod"

const formSchema = z.object({
  username: z.string().min(2).max(50),
})
  `
  const codeDefinedForm = `
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // This will be type-safe and validated.
    console.log(values)
  }
}
  `

  const formComponentsList = [
    {
      name: "Form",
      description: (
        <>
          Wrapper component that provides form context using{" "}
          <span className="font-bold text-green-500">FormProvider</span> from{" "}
          <span className="font-bold text-green-500">react-hook-form</span>.
        </>
      ),
    },
    {
      name: "FormField",
      description: (
        <>
          Wrapper around <span className="font-bold text-green-500">Controller</span> from{" "}
          <span className="font-bold text-green-500">react-hook-form</span> providing context for individual form fields.
        </>
      ),
    },
    {
      name: "useFormField",
      description: <>Custom hook to access form field context and state.</>,
    },
    {
      name: "FormItem",
      description: <>Wrapper component providing layout and context for form items.</>,
    },
    {
      name: "FormLabel",
      description: <>Component for form field labels, connected to form control.</>,
    },
    {
      name: "FormControl",
      description: (
        <>
          Wrapper around <span className="font-bold text-green-500">Slot</span> from Radix UI, connected to form field.
        </>
      ),
    },
    {
      name: "FormDescription",
      description: <>Component for form field descriptions.</>,
    },
    {
      name: "FormMessage",
      description: <>Component for form field error messages.</>,
    },
    {
      name: "CustomFormField",
      description: <>Custom form field component (imported from a separate module).</>,
    },
  ];

  return (
    <div>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
          Form
        </h1>
        <p className="text-base text-muted-foreground">
          <span className="inline-block align-top [text-decoration:inherit] max-w-[538px]">
          Building forms with React Hook Form and Zod.
          </span>
        </p>
      </div>
      <br />
      <div className="space-y-2" id="#installation">
              <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
                  Components Overview
              </h3>
              <ul className="list-disc list-inside">
          {formComponentsList.map((component, index) => (
            <li key={index}>
              <span className="font-bold">{component.name}</span>: {component.description}
            </li>
          ))}
        </ul>
        <hr />
      </div>
      <br />
      <div className="space-y-2" id="#installation">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Installation
        </h3>
        <hr />  
        <CodeBlocks code={`npm install @radix-ui/react-label @radix-ui/react-slot react-hook-form @hookform/resolvers zod`} language="js" />
      </div>
      <br />
      <div className="space-y-2" id="#installation">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Anatomy
        </h3>
        <hr />  
        <CodeBlocks code={codeAnatomy} language="js" />
      </div>
      <br />
      <div className="space-y-2" id="#usage">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">Usage</h3>
        <h3 className="scroll-m-20 text-xl font-bold tracking-tight">Create a form schema</h3>
        <p className="text-base">Create a form schema Define the shape of your form using a Zod schema. You can read more about using Zod in the <span className="font-bold text-green-500">Zod documentation</span>.</p>
        <hr />
        <CodeBlocks code={codeFormSchema} language="js" />
        <br />
        <CodeBlocks code={codeAnatomy} language="js" />
        <h3 className="scroll-m-20 text-xl font-bold tracking-tight">Define a form</h3>
        <p className="text-base">Use the <span className="font-bold text-green-500">useForm</span> hook from <span className="font-bold text-green-500">react-hook-form</span> to create a form.</p>
        <hr />
        <CodeBlocks code={codeDefinedForm} language="js" />
        <br />
        <p className="text-base">Since <span className="font-bold text-green-500">FormField</span> is using a controlled component, you need to provide a default value for the field. See the <span className="font-bold text-green-500">React Hook Form docs</span> to learn more about controlled components.</p>
        <h3 className="scroll-m-20 text-xl font-bold tracking-tight">Build your form</h3>
        <p className="text-base">We can now use the <span className="font-bold text-green-500">form</span> components to build our form.</p>
        <hr />
        <div className="space-y-2">
        <CustomTabs
          tabs={tabs}
          onValueChange={() => console.log("Tab changed")}
        />
      </div>
      </div>
      <br />
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

export default Index;
