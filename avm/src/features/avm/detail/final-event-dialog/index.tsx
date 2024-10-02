import { ControllerRenderProps, useForm } from "react-hook-form";
import { CustomFormField, Form } from "mainApp/form";
import { FinalEventSchema, finalEventSchema } from "../../../../services/form";
import { Button } from "mainApp/button";
import DropdownSelect from "mainApp/select";
import { Input } from "mainApp/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

type FinalEventDialogProps = {
  event?: FinalEventSchema | null;
  onSave: (data: FinalEventSchema) => void;
  onClose: () => void;
};

const FinalEventDialog: React.FC<FinalEventDialogProps> = ({ event, onSave, onClose }) => {
  const form = useForm<FinalEventSchema>({
    resolver: zodResolver(finalEventSchema),
    defaultValues: {
      functionCode: "",
      handlerType: "",
      handlerSpec: "",
      lastAction: "",
      failureHandling: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: FinalEventSchema) => {
    try {
      onSave(data);
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };


  useEffect(() => {
    if (event) {
      form.reset({
        functionCode: event.functionCode || "",
        handlerType: event.handlerType || "",
        handlerSpec: event.handlerSpec || "",
        lastAction: event.lastAction || "",
        failureHandling: event.failureHandling || "",
      });
    }
  }, [event, form]);

  const {
    handleSubmit,
    formState: { isSubmitting },
    watch
    // formState: { errors },
  } = form;

  const handlerType = watch("handlerType");
  return (
    <Form {...form}>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <CustomFormField
          control={form.control}
          name="functionCode"
          label="Function Code"
        >
          {(field: ControllerRenderProps<FinalEventSchema, "functionCode">) => (
            <Input
              {...field}
              type="text"
              placeholder="Input Function Code"
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
            />
          )}
        </CustomFormField>

        <CustomFormField
          control={form.control}
          name="handlerType"
          label="Handler Type"
        >
          {(field: ControllerRenderProps<FinalEventSchema, "handlerType">) => (
            <DropdownSelect
              {...field}
              placeholder="Input Handle Type"
              disabled={form.formState.isSubmitting}
              data={[{ label: "WEBHOOK", value: "WEBHOOK" },
              { label: "MESSAGE", value: "MESSAGE" },
              ]}
            />
          )}
        </CustomFormField>

        {handlerType === "WEBHOOK" && (
          <>
            <CustomFormField
              control={form.control}
              name="handlerSpec.url"
              label="URL"
            >
              {(field: ControllerRenderProps<FinalEventSchema, "handlerSpec.url">) => (
                <Input
                  {...field}
                  type="text"
                  placeholder="Input URL"
                  disabled={isSubmitting}
                  aria-disabled={isSubmitting}
                />
              )}
            </CustomFormField>

            <CustomFormField
              control={form.control}
              name="handlerSpec.method"
              label="Method"
            >
              {(field: ControllerRenderProps<FinalEventSchema, "handlerSpec.method">) => (
                <DropdownSelect
                  {...field}
                  placeholder="Select Method"
                  disabled={form.formState.isSubmitting}
                  data={[{ label: "POST", value: "POST" },
                  { label: "GET", value: "GET" },
                  { label: "PUT", value: "PUT" },
                  { label: "PATCH", value: "PATCH" },
                  { label: "DELETE", value: "DELETE" },
                  { label: "HEAD", value: "HEAD" },
                  { label: "OPTIONS", value: "OPTIONS" },
                  { label: "TRACE", value: "TRACE" },
                  ]}
                />
              )}
            </CustomFormField>

            <CustomFormField
              control={form.control}
              name="handlerSpec.tokenMethod"
              label="Token Method"
            >
              {(field: ControllerRenderProps<FinalEventSchema, "handlerSpec.tokenMethod">) => (
                <DropdownSelect
                  {...field}
                  placeholder="Select Token Method"
                  disabled={form.formState.isSubmitting}
                  data={[{ label: "HEADER", value: "HEADER" },
                  { label: "BEARER", value: "BEARER" },
                  { label: "PARAM", value: "PARAM" },
                  { label: "NONE", value: "NONE" },
                  ]}
                />
              )}
            </CustomFormField>

            <CustomFormField
              control={form.control}
              name="handlerSpec.tokenName"
              label="Token Name"
            >
              {(field: ControllerRenderProps<FinalEventSchema, "handlerSpec.tokenName">) => (
                <Input
                  {...field}
                  type="text"
                  placeholder="Input Token Name"
                  disabled={isSubmitting}
                  aria-disabled={isSubmitting}
                />
              )}
            </CustomFormField>

            <CustomFormField
              control={form.control}
              name="handlerSpec.external"
              label="External"
            >
              {(field: ControllerRenderProps<FinalEventSchema, "handlerSpec.external">) => (
                <DropdownSelect
                  {...field}
                  placeholder="Select External"
                  disabled={form.formState.isSubmitting}
                  data={[{ label: "TRUE", value: "TRUE" },
                  { label: "FALSE", value: "FALSE" },
                  ]}
                />
              )}
            </CustomFormField>
          </>
        )}

        {handlerType === "MESSAGE" && (
          <>
            <CustomFormField
              control={form.control}
              name="handlerSpec.destType"
              label="Dest Type"
            >
              {(field: ControllerRenderProps<FinalEventSchema, "handlerSpec.destType">) => (
                <DropdownSelect
                  {...field}
                  placeholder="Select External"
                  disabled={form.formState.isSubmitting}
                  data={[{ label: "QUEUE", value: "QUEUE" },
                  { label: "TOPIC", value: "TOPIC" },
                  ]}
                />
              )}
            </CustomFormField>

            <CustomFormField
              control={form.control}
              name="handlerSpec.destName"
              label="Dest Name"
            >
              {(field: ControllerRenderProps<FinalEventSchema, "handlerSpec.destName">) => (
                <Input
                  {...field}
                  type="text"
                  placeholder="Input Destination Name"
                  disabled={isSubmitting}
                  aria-disabled={isSubmitting}
                />
              )}
            </CustomFormField>

            <CustomFormField
              control={form.control}
              name="handlerSpec.tokenName"
              label="Token Name"
            >
              {(field: ControllerRenderProps<FinalEventSchema, "handlerSpec.tokenName">) => (
                <Input
                  {...field}
                  type="text"
                  placeholder="Input Token Name"
                  disabled={isSubmitting}
                  aria-disabled={isSubmitting}
                />
              )}
            </CustomFormField>
          </>
        )}

        <CustomFormField
          control={form.control}
          name="failureHandling"
          label="Failure Handling"
        >
          {(
            field: ControllerRenderProps<FinalEventSchema, "failureHandling">
          ) => (
            <DropdownSelect
              {...field}
              placeholder="Input Failure Handling"
              disabled={form.formState.isSubmitting}
              data={[{ label: "THROW", value: "THROW" }]}
            />
          )}
        </CustomFormField>

        <CustomFormField
          control={form.control}
          name="lastAction"
          label="Last Action"
        >
          {(
            field: ControllerRenderProps<FinalEventSchema, "lastAction">
          ) => (
            <DropdownSelect
              {...field}
              placeholder="Input Failure Handling"
              disabled={form.formState.isSubmitting}
              data={[{ label: "APPROVE", value: "APPROVE" }]}
            />
          )}
        </CustomFormField>

        <div className="flex justify-end gap-3">
          <Button onClick={() => { onClose(); }} variant="secondary" disabled={isSubmitting}>
            Close
          </Button>
          <Button onClick={handleSubmit(onSubmit)} disabled={isSubmitting}>
            {isSubmitting ? "Saving..." : "Save"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FinalEventDialog;
