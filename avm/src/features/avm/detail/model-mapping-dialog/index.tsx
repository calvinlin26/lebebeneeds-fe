import { ControllerRenderProps, useForm } from "react-hook-form";
import { CustomFormField, Form } from "mainApp/form";
import { Button } from "mainApp/button";
import {
  ModelMappingSchema,
  modelMappingSchema,
} from "../../../../services/form";

import { Input } from "mainApp/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

type ModelMappingDialogProps = {
  model?: ModelMappingSchema | null; 
  onSave: (data: ModelMappingSchema) => void;
  onClose: () => void;
};

const ModelMappingDialog: React.FC<ModelMappingDialogProps> = ({ model, onSave, onClose }) => {
  const form = useForm<ModelMappingSchema>({
    resolver: zodResolver(modelMappingSchema),
    defaultValues: {
      functionCode: "",
      ruleExp: "",
    },
    mode: "onChange",
  });
  

  useEffect(() => {
    if (model) {
      form.reset({
        functionCode: model.functionCode || "",
        ruleExp: model.ruleExp || "",
      });
    }
  }, [model, form]);

  const onSubmit = (data: ModelMappingSchema) => {
    try {
      onSave(data);
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const {
    handleSubmit,
    formState: { isSubmitting },
    // formState: { errors },
  } = form;
  return (
    <Form {...form}>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <CustomFormField
          control={form.control}
          name="functionCode"
          label="Function Code"
        >
          {(field: ControllerRenderProps<ModelMappingSchema, "functionCode">) => (
            <Input
              {...field}
              type="text"
              placeholder="Input Function Code"
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
            />
          )}
        </CustomFormField>

        <CustomFormField control={form.control} name="ruleExp" label="Rule EXP">
          {(field: ControllerRenderProps<ModelMappingSchema, "ruleExp">) => (
            <Input
              {...field}
              type="text"
              placeholder="Input Rule EXP"
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
            />
          )}
        </CustomFormField>

        <div className="flex justify-end gap-3">
          <Button onClick={() => {onClose();}} variant="secondary" disabled={isSubmitting}>
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

export default ModelMappingDialog;
