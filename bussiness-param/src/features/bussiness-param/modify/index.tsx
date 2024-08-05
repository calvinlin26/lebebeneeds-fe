import React, { useEffect } from "react";
import { CustomFormField, Form } from "mainApp/form";
import { Input } from "mainApp/input";
import { Button } from "mainApp/button";
import DropdownSelect from "mainApp/select";
import withUserAccess from "mainApp/withUserAccess";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { ControllerRenderProps, useForm, useFieldArray } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import {
  createParamSchema,
  updateParamSchema,
  ParamSchema,
} from "../../../services/form";
import { postParam } from "../../../services";
import { useBussinessParamDetail } from "../hooks/useBussinessParamDetail";

interface Props {
  code?: string | null;
  ADMIN_PARAM_SAVE: boolean;
}

const Index: React.FC<Props> = ({
  code,
  ADMIN_PARAM_SAVE,
}) => {
  const navigate = useNavigate();
  const bussinessParamDetail = useBussinessParamDetail(code ?? "");
  const form = useForm<ParamSchema>({
    resolver: zodResolver(code ? updateParamSchema : createParamSchema),
    defaultValues: {
      code: "",
      orderNo: "",
      category: "",
      valueType: "",
      paramValue: "",
      paramTxt: [],
      active: "",
      frontEnd: "",
    },
    mode: "onChange",
  });

  useEffect(() => {
    if (bussinessParamDetail) {
      form.reset({
        code: bussinessParamDetail.code ?? "",
        orderNo: bussinessParamDetail.orderNo ?? "",
        category: bussinessParamDetail.category ?? "",
        valueType: bussinessParamDetail.valueType ?? "",
        active: bussinessParamDetail.active ? "true" : "false",
        frontEnd: bussinessParamDetail.frontEnd ? "true" : "false",
        paramValue: bussinessParamDetail.paramValue ?? "",
        paramTxt: bussinessParamDetail.paramTxt,
      });
    }
  }, [bussinessParamDetail, form]);

  const onSubmit = async (data: ParamSchema) => {
    try {
      await postParam(data);
      toast.success("Parameter has been updated successfully");
      navigate("/bussiness-params");
    } catch (error) {
      toast.error("Error submitting form");
      console.error("Error submitting form:", error);
    }
  };

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "paramTxt",
  });

  const {
    handleSubmit,
    // formState: { errors },
  } = form;

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold">
        {code ? `Edit` : `Create`} Bussiness Param
      </h1>
      <Form {...form}>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-5">
            <CustomFormField
              control={form.control}
              name="category"
              label="Category"
            >
              {(field: ControllerRenderProps<ParamSchema, "category">) => (
                <Input
                  {...field}
                  placeholder="Input category"
                  type="text"
                  disabled={form.formState.isSubmitting}
                  aria-disabled={form.formState.isSubmitting}
                />
              )}
            </CustomFormField>

            <CustomFormField control={form.control} name="code" label="Code">
              {(field: ControllerRenderProps<ParamSchema, "code">) => (
                <Input
                  {...field}
                  placeholder="Input Code"
                  type="text"
                  disabled={form.formState.isSubmitting}
                  aria-disabled={form.formState.isSubmitting}
                />
              )}
            </CustomFormField>

            <CustomFormField
              control={form.control}
              name="orderNo"
              label="Order No"
            >
              {(field: ControllerRenderProps<ParamSchema, "orderNo">) => (
                <Input
                  {...field}
                  placeholder="Input Order"
                  type="text"
                  disabled={form.formState.isSubmitting}
                  aria-disabled={form.formState.isSubmitting}
                />
              )}
            </CustomFormField>

            <CustomFormField
              control={form.control}
              name="valueType"
              label="Value Type"
            >
              {(field: ControllerRenderProps<ParamSchema, "valueType">) => (
                <DropdownSelect
                  {...field}
                  placeholder="Input Value Type"
                  disabled={form.formState.isSubmitting}
                  data={[
                    { label: "CHOICE", value: "CHOICE" },
                    { label: "TEXT", value: "TEXT" },
                    { label: "INTEGER", value: "INTEGER" },
                    { label: "DECIMAL", value: "DECIMAL" },
                    { label: "BOOLEAN", value: "BOOLEAN" },
                  ]}
                />
              )}
            </CustomFormField>

            <CustomFormField
              control={form.control}
              name="frontEnd"
              label="Front End"
            >
              {(field: ControllerRenderProps<ParamSchema, "frontEnd">) => (
                <DropdownSelect
                  {...field}
                  placeholder="Select Front End"
                  disabled={form.formState.isSubmitting}
                  data={[
                    { label: "true", value: "true" },
                    { label: "false", value: "false" },
                  ]}
                />
              )}
            </CustomFormField>

            <CustomFormField
              control={form.control}
              name="active"
              label="Active"
            >
              {(field: ControllerRenderProps<ParamSchema, "active">) => (
                <DropdownSelect
                  {...field}
                  placeholder="Select Active"
                  disabled={form.formState.isSubmitting}
                  data={[
                    { label: "Active", value: "true" },
                    { label: "Inactive", value: "false" },
                  ]}
                />
              )}
            </CustomFormField>

            {form.watch("frontEnd") == "false" && (
              <div className="col-span-2 w-full">
                <CustomFormField
                  control={form.control}
                  name="paramValue"
                  label="Param Value"
                >
                  {(
                    field: ControllerRenderProps<ParamSchema, "paramValue">
                  ) => (
                    <Input
                      {...field}
                      className="w-full"
                      placeholder="Input Param Value"
                      type="text"
                      disabled={form.formState.isSubmitting}
                      aria-disabled={form.formState.isSubmitting}
                    />
                  )}
                </CustomFormField>
              </div>
            )}

            {form.watch("frontEnd") == "true" && (
              <>
                <div className="flex gap-5 col-span-2 items-center">
                  <label>Parameter List</label>
                  <Button
                    type="button"
                    onClick={() => {
                      append({ langCode: "", text: "", description: "" });
                    }}
                  >
                    +
                  </Button>
                </div>
                <div className="flex flex-col gap-5 col-span-2 overflow-y-auto">
                  {fields.map((_, index) => (
                    <div key={index} className="flex gap-5 items-center p-1">
                      {index + 1}.{" "}
                      <div className="w-[200px]">
                        <CustomFormField
                          control={form.control}
                          name={`paramTxt[${index}].langCode`}
                        >
                          {(
                            field: ControllerRenderProps<
                              ParamSchema,
                              "paramTxt"
                            >
                          ) => (
                            <Input
                              {...field}
                              placeholder="Lang Code"
                              type="text"
                              disabled={form.formState.isSubmitting}
                              aria-disabled={form.formState.isSubmitting}
                            />
                          )}
                        </CustomFormField>
                      </div>
                      <div className="w-4/12">
                        <CustomFormField
                          control={form.control}
                          name={`paramTxt[${index}].text`}
                        >
                          {(
                            field: ControllerRenderProps<
                              ParamSchema,
                              "paramTxt"
                            >
                          ) => (
                            <Input
                              {...field}
                              placeholder="Input Text"
                              type="text"
                              disabled={form.formState.isSubmitting}
                              aria-disabled={form.formState.isSubmitting}
                            />
                          )}
                        </CustomFormField>
                      </div>
                      <div className="w-full">
                        <CustomFormField
                          control={form.control}
                          name={`paramTxt[${index}].description`}
                        >
                          {(
                            field: ControllerRenderProps<
                              ParamSchema,
                              "paramTxt"
                            >
                          ) => (
                            <Input
                              {...field}
                              placeholder="Input Description"
                              type="text"
                              disabled={form.formState.isSubmitting}
                              aria-disabled={form.formState.isSubmitting}
                            />
                          )}
                        </CustomFormField>
                      </div>
                      <Button
                        type="button"
                        onClick={() => {
                          remove(index);
                        }}
                      >
                        -
                      </Button>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={form.formState.isSubmitting || !ADMIN_PARAM_SAVE}
              aria-disabled={form.formState.isSubmitting}
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default withUserAccess(Index);
