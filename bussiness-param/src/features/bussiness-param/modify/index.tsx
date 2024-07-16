import React, { useEffect } from "react";
import { CustomFormField, Form } from "mainApp/form";
import { Input } from "mainApp/input";
import { Button } from "mainApp/button";
import DropdownSelect from "mainApp/select";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { ControllerRenderProps, useForm, useFieldArray } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import {
  createParamSchema,
  updateParamSchema,
  ParamSchema,
} from "../../../services/form";
import { postParam, updateParam } from "../../../services";
import { useBussinessParamDetail } from "../hooks/useBussinessParamDetail";

const Index: React.FC<{ id?: string | null }> = ({ id }) => {
  const navigate = useNavigate();
  const bussinessParamDetail = useBussinessParamDetail(id ?? "");
  const form = useForm<ParamSchema>({
    resolver: zodResolver(id ? updateParamSchema : createParamSchema),
    defaultValues: {
      id: "",
      orderNo: "",
      category: "",
      valueType: "",
      parentId: "",
      paramValue: "",
      paramTxt: [],
      active: "",
      frontEnd: "",
    },
    mode: "onChange",
  });

  useEffect(() => {
    if (bussinessParamDetail) {
      form.reset(bussinessParamDetail);
    }
  }, [bussinessParamDetail, form]);

  const onSubmit = async (data: ParamSchema) => {
    try {
      if (id) {
        await updateParam(data);
        toast.success("Parameter has been updated");
      } else {
        await postParam(data);
        toast.success("Parameter has been created");
      }
      navigate("/bussiness-param");
    } catch (error) {
      toast.error("Error submitting form");
      console.error("Error submitting form:", error);
    }
  };

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "paramTxt",
  });

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold">
        {id ? `Edit` : `Create`} Bussiness Param
      </h1>
      <Form {...form}>
        <form
          className="flex flex-col gap-5"
          onSubmit={form.handleSubmit(onSubmit)}
        >
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

            <CustomFormField
              control={form.control}
              name="id"
              label="Category ID"
            >
              {(field: ControllerRenderProps<ParamSchema, "id">) => (
                <Input
                  {...field}
                  placeholder="Input Category ID"
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
              disabled={form.formState.isSubmitting}
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

export default Index;
