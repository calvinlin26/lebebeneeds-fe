import { ControllerRenderProps, useFieldArray, useForm } from "react-hook-form";
import { CustomFormField, Form } from "mainApp/form";
import { MasterDataSchema, masterDataSchema } from "../../../services/form";
import React, { useEffect, useState } from "react";

import { Button } from "mainApp/button";
// import CustomPagination from "mainApp/pagination";
import CustomTable from "mainApp/table";
// import DropdownSelect from "mainApp/select";
import { Input } from "mainApp/input";
import { useQuery } from "mainApp/useQuery";
import { CustomDialog } from "mainApp/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import FormDialog from "../dialog";
import { postMaterData } from "../../../services";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useMasterDetail } from "../hooks/useMasterDetail";
import { useUnitData } from "../hooks/useUnitData";

const Index: React.FC = () => {
  const { unitData } = useUnitData();
  const navigate = useNavigate();
  const query = useQuery();
  const id = query.get("id") as string;
  const isEdit = id ? true : false;

  const masterDetail = useMasterDetail(id);

  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [variantIndex, setVariantIndex] = useState<number>(0);
  const [isEditVariant, setIsEditVariant] = useState<boolean>(false);

  const form = useForm<MasterDataSchema>({
    resolver: zodResolver(masterDataSchema),
    defaultValues: {
      productCode: "",
      productName: "",
      description: "",
    },
    mode: "onChange",
  });

  useEffect(() => {
    if (masterDetail) {
      form.reset({
        ...masterDetail,
      });
    }
  }, [masterDetail, form]);

  // Columns definition
  const productVariantColumn = [
    {
      header: "Variant Code",
      accessor: "variantCode",
    },
    {
      header: "Variant Name",
      accessor: "variantName",
    },
    {
      header: "Unit Type",
      accessor: "unitTypeId",
    },
    {
      header: "Action",
      accessor: "action",
    },
  ];

  const onSubmit = async (data: MasterDataSchema) => {
    // Handle form submission

    try {
      await postMaterData(data, isEdit, masterDetail);

      toast.success(`Product has been ${isEdit ? "updated" : "created"}`);
      navigate("/master-product");
    } catch (error: any) {
      console.error(
        "Error submitting form:",
        error.response?.data || error.message
      );
      toast.error("Failed to save product. Please try again.");
    }
  };

  const closeDialog = () => {
    setOpenDialog((prev) => !prev);
  };

  const { fields, append, update } = useFieldArray({
    control: form.control,
    name: "variants",
  });

  const fieldsData = fields.map((item, index) => {
    return {
      ...item,
      unitTypeId: unitData.find((option) => option.value === item.unitTypeId)
        ?.label,
      action: (
        <div className="flex flex-row gap-3">
          <Button
            type="button"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              e.stopPropagation();

              setVariantIndex(index);
              setOpenDialog((prev) => !prev);
              setIsEditVariant((prev) => !prev);
            }}
          >
            Edit
          </Button>
        </div>
      ),
    };
  });

  const {
    handleSubmit,
    formState: { errors },
  } = form;
  console.log("Errors:", errors);

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold">
        {isEdit ? "Edit Product" : "Add Product"}
      </h1>

      <Form {...form}>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          <CustomFormField
            control={form.control}
            name="productCode"
            label="Product Code"
          >
            {(
              field: ControllerRenderProps<MasterDataSchema, "productCode">
            ) => (
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
            name="productName"
            label="Product Name"
          >
            {(
              field: ControllerRenderProps<MasterDataSchema, "productName">
            ) => (
              <Input
                {...field}
                placeholder="Input product name"
                type="text"
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
              />
            )}
          </CustomFormField>

          <CustomFormField
            control={form.control}
            name="description"
            label="Product Description"
          >
            {(
              field: ControllerRenderProps<MasterDataSchema, "description">
            ) => (
              <Input
                {...field}
                placeholder="Input product description"
                type="text"
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
              />
            )}
          </CustomFormField>

          <div className="flex justify-between items-center w-full">
            <h1 className="text-2xl font-bold">Product Variants</h1>
            <Button
              type="button"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                e.stopPropagation();

                setOpenDialog((prev) => !prev);
              }}
            >
              Add Variant
            </Button>
          </div>

          <CustomTable
            columns={productVariantColumn}
            data={fieldsData}
            className="mt-4 border-collapse border border-gray-200 shadow-lg"
            headerClassName="bg-gray-100 text-gray-700 whitespace-nowrap"
            bodyClassName="bg-white"
          />

          <div className="flex flex-row gap-5 mt-4 justify-end">
            <Button
              type="button"
              variant="secondary"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                e.stopPropagation();
                navigate("/master-product");
              }}
            >
              Back
            </Button>
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              aria-disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting
                ? "Submitting..."
                : isEdit
                ? "Update"
                : "Submit"}
            </Button>
          </div>
        </form>
      </Form>

      <CustomDialog
        open={openDialog}
        onOpenChange={() => {
          setOpenDialog(!openDialog);
          setIsEditVariant((prev) => !prev);
        }}
        title={isEditVariant ? "Edit Variant" : "Add Variant"}
        content={
          <FormDialog
            append={append}
            update={update}
            variantIndex={variantIndex}
            detailData={fields[variantIndex]}
            closeDialog={closeDialog}
            isEdit={isEditVariant}
            unitData={unitData}
          />
        }
      />
    </div>
  );
};

export default Index;
