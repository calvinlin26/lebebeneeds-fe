import { ControllerRenderProps, useForm } from "react-hook-form";
import { CustomFormField, Form } from "mainApp/form";
import { MasterDataSchema, masterDataSchema } from "../../../services/form";
import React, { useEffect } from "react";

import { Button } from "mainApp/button";
import CustomPagination from "mainApp/pagination";
import CustomTable from "mainApp/table";
import DropdownSelect from "mainApp/select";
import { Input } from "mainApp/input";
import { toast } from "sonner";
// import { useNavigate } from "react-router-dom";
import { useQuery } from "mainApp/useQuery";
import { zodResolver } from "@hookform/resolvers/zod";

const Index: React.FC = () => {
  // const navigate = useNavigate();
  //   const query = useQuery();
  //   const username = query.get("username") as string;
  //   const navigate = useNavigate();
  const isEdit = false;
  //   username ? true : false;

  // Use custom hooks
  //   const { rolesData, roleSearchParam, setRoleSearchParam, rolePagination } =
  //     useRolesData();
  //   const userDetail = useUserDetail(username);

  // console.log(userDetail, "user detail");

  const form = useForm<MasterDataSchema>({
    resolver: zodResolver(masterDataSchema),
    defaultValues: {
      productCode: "",
      productName: "",
      productDescription: "",
      content: "",
      productVariants: [{ variantCode: "", variantName: "", unitType: "" }],
    },
    mode: "onChange",
  });

  //   useEffect(() => {
  //     if (userDetail) {
  //       form.reset({
  //         ...userDetail,
  //         locked: userDetail.locked ? "true" : "false",
  //         active: userDetail.active ? "true" : "false",
  //         branch: userDetail.branchCode,
  //       });
  //     }
  //   }, [userDetail, form]);

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
      accessor: "unitType",
    },
    {
      header: "Action",
      accessor: "action",
    },
  ];

  const onSubmit = async (data: MasterDataSchema) => {
    // Handle form submission
  };

  const {
    handleSubmit,
    // formState: { errors }
  } = form;
  // console.log("Errors:", errors);

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
                disabled={isEdit || form.formState.isSubmitting}
                aria-disabled={isEdit || form.formState.isSubmitting}
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
                disabled={isEdit || form.formState.isSubmitting}
                aria-disabled={isEdit || form.formState.isSubmitting}
              />
            )}
          </CustomFormField>

          <CustomFormField
            control={form.control}
            name="productDescription"
            label="Product Description"
          >
            {(
              field: ControllerRenderProps<
                MasterDataSchema,
                "productDescription"
              >
            ) => (
              <Input
                {...field}
                placeholder="Input product description"
                type="text"
                disabled={isEdit || form.formState.isSubmitting}
                aria-disabled={isEdit || form.formState.isSubmitting}
              />
            )}
          </CustomFormField>

          <div className="flex justify-between items-center w-full">
            <h1 className="text-2xl font-bold">Product Variants</h1>
            <Button onClick={() => console.log("ss")}>Add Variant</Button>
          </div>

          <CustomTable
            columns={productVariantColumn}
            data={[]}
            className="mt-4 border-collapse border border-gray-200 shadow-lg"
            headerClassName="bg-gray-100 text-gray-700 whitespace-nowrap"
            bodyClassName="bg-white"
          />

          <div className="flex flex-row gap-5 mt-4 justify-end">
            <Button
              variant="secondary"
              //   onClick={() => navigate("/user-management")}
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
    </div>
  );
};

export default Index;
