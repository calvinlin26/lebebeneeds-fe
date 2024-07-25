import { CustomTabs } from "mainApp/tabs";
import { CustomCheckbox } from "mainApp/checkbox";
import CodeBlocks from "../../../components/codeBLock";
import { SubmitHandler, ControllerRenderProps, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CustomFormField, Form } from "mainApp/form";
import { z, ZodSchema } from "zod"
import { toast } from "sonner";
import { Button } from "mainApp/button"


type HookFormSingle = {
    mobile?: boolean;
};

const formSchema: ZodSchema<HookFormSingle> = z.object({
    mobile: z.boolean().default(false).optional(),
});


function FormCheckbox() {
    const form = useForm<HookFormSingle>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            mobile: true,
        },
    });

    const onSubmit: SubmitHandler<HookFormSingle> = (data) => {
        toast.success(`mobile: ${data.mobile}`);
    }

    const previewCode = `
<Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <CustomFormField
            control={form.control}
            name="mobile"
            description= "You can mangage your settings device"
        >
    {(field: ControllerRenderProps<HookFormSingle, "mobile">) => (
    <CustomCheckbox
    label= "Use different settings for my mobile devices"
    checked= {field.value}
    onCheckedChange= {field.onChange}
    />
    )}
    </CustomFormField>
        <Button type="submit">Submit</Button>
    </form>
</Form>
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
                                name="mobile"
                                description= "You can mangage your settings device"
                            >
                                {(field: ControllerRenderProps<HookFormSingle, "mobile">) => (
                                    <CustomCheckbox
                                     label= "Use different settings for my mobile devices"
                                     checked= {field.value}
                                     onCheckedChange= {field.onChange}
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
            content: <CodeBlocks code={previewCode} language="js" />,
        }
    ]

    return (
        <>
            <CustomTabs
                tabs={tabs}
                onValueChange={() => console.log("Tab changed")}
            />
        </>
    );
}

export default FormCheckbox;
