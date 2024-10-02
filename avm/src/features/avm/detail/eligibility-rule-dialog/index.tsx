import { ControllerRenderProps, useForm } from "react-hook-form";
import { CustomFormField, Form } from "mainApp/form";
import {
  EligibilityRuleSchema,
  eligibilityRuleSchema,
} from "../../../../services/form";
import { Button } from "mainApp/button";
import DropdownSelect from "mainApp/select";
import { Input } from "mainApp/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

type EligibilityRuleDialogProps = {
  eligibility?: EligibilityRuleSchema | null; 
  onSave: (data: EligibilityRuleSchema) => void;
  onClose: () => void;
};

const EligibilityRuleDialog: React.FC<EligibilityRuleDialogProps> = ({eligibility, onSave, onClose}) => {
  const form = useForm<EligibilityRuleSchema>({
    resolver: zodResolver(eligibilityRuleSchema),
    defaultValues: {
      name: "",
      ruleDescription: "",
      fieldExp: "",
      valueType: "",
      valueChoice: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: EligibilityRuleSchema) => {
    try {
      onSave(data);
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    if (eligibility) {
      form.reset({
        name: eligibility.name || "",
        ruleDescription: eligibility.ruleDescription || "",
        fieldExp: eligibility.fieldExp || "",
        valueType: eligibility.valueType || "",
        valueChoice: eligibility.valueChoice || "",
      });
    }
  }, [eligibility, form]);

  const {
    handleSubmit,
    formState: { isSubmitting },
    // formState: { errors },
  } = form;
  return (
    <Form {...form}>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <CustomFormField control={form.control} name="name" label="Name">
          {(field: ControllerRenderProps<EligibilityRuleSchema, "name">) => (
            <Input
              {...field}
              type="text"
              placeholder="Input Name"
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
            />
          )}
        </CustomFormField>

        <CustomFormField
          control={form.control}
          name="ruleDescription"
          label="Description"
        >
          {(
            field: ControllerRenderProps<EligibilityRuleSchema, "ruleDescription">
          ) => (
            <Input
              {...field}
              type="text"
              placeholder="Input Description"
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
            />
          )}
        </CustomFormField>

        <CustomFormField
          control={form.control}
          name="fieldExp"
          label="Field EXP"
        >
          {(
            field: ControllerRenderProps<EligibilityRuleSchema, "fieldExp">
          ) => (
            <Input
              {...field}
              type="text"
              placeholder="Input Field EXP"
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
            />
          )}
        </CustomFormField>

        <CustomFormField
          control={form.control}
          name="valueType"
          label="Value Type"
        >
          {(
            field: ControllerRenderProps<EligibilityRuleSchema, "valueType">
          ) => (
            <DropdownSelect
              {...field}
              placeholder="Input Value Type"
              disabled={form.formState.isSubmitting}
              data={[{ label: "CHOICE", value: "CHOICE" }]}
            />
          )}
        </CustomFormField>

        <CustomFormField
          control={form.control}
          name="valueChoice"
          label="Value Choice"
        >
          {(
            field: ControllerRenderProps<EligibilityRuleSchema, "valueChoice">
          ) => (
            <Input
              {...field}
              type="text"
              placeholder="Input Value Choice"
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
            />
          )}
        </CustomFormField>
        <div className="flex justify-end gap-3">
          <Button onClick={() => {onClose(); }} variant="secondary" disabled={isSubmitting}>
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

export default EligibilityRuleDialog;
