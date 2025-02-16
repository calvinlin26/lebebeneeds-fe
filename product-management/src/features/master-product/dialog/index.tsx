import React, { useEffect } from "react";
import { ControllerRenderProps, useForm } from "react-hook-form";
import { variantShema, VariantShema } from "../../../services/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CustomFormField, Form } from "mainApp/form";
import { Input } from "mainApp/input";
import { Button } from "mainApp/button";
import DropdownSelect from "mainApp/select";

const Index: React.FC<{
  append: any;
  update: any;
  variantIndex: number;
  closeDialog: () => void;
  detailData: VariantShema | undefined;
  isEdit: boolean;
  unitData: { label: string; value: string }[];
}> = ({
  append,
  update,
  variantIndex,
  closeDialog,
  detailData,
  isEdit,
  unitData,
}) => {
  const form = useForm<VariantShema>({
    resolver: zodResolver(variantShema),
    defaultValues: {
      variantCode: "",
      variantName: "",
      unitTypeId: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: VariantShema) => {
    // Handle form submission
    if (isEdit) {
      update(variantIndex, data);
    } else {
      append(data);
    }

    closeDialog();
    form.reset();
  };

  const { handleSubmit } = form;

  useEffect(() => {
    if (isEdit && unitData) {
      form.reset({
        ...detailData,
      });
    }
  }, [detailData, isEdit, unitData]);
  return (
    <Form {...form}>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <CustomFormField
          control={form.control}
          name="variantCode"
          label="Variant Code"
        >
          {(field: ControllerRenderProps<VariantShema, "variantCode">) => (
            <Input
              {...field}
              placeholder="Input product code"
              type="text"
              disabled={form.formState.isSubmitting}
              aria-disabled={form.formState.isSubmitting}
            />
          )}
        </CustomFormField>

        <CustomFormField
          control={form.control}
          name="variantName"
          label="Variant Name"
        >
          {(field: ControllerRenderProps<VariantShema, "variantCode">) => (
            <Input
              {...field}
              placeholder="Input product code"
              type="text"
              disabled={form.formState.isSubmitting}
              aria-disabled={form.formState.isSubmitting}
            />
          )}
        </CustomFormField>

        <CustomFormField
          control={form.control}
          name="unitTypeId"
          label="Unit Type"
        >
          {(field: ControllerRenderProps<VariantShema, "unitTypeId">) => (
            <>
              <DropdownSelect
                name="unitTypeId"
                placeholder="Select status"
                emptyState="No options available"
                data={unitData}
                value={
                  unitData.find((option) => option.value === field.value)?.value
                }
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  field.onChange(e?.target.value);
                }}
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
              />
            </>
          )}
        </CustomFormField>

        <div className="flex flex-row gap-5 mt-4 justify-end">
          <Button
            variant="secondary"
            onClick={() => {
              closeDialog();
              form.reset();
            }}
          >
            Back
          </Button>
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            aria-disabled={form.formState.isSubmitting}
          >
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default Index;
