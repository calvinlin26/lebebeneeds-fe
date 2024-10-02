import CustomTable from "mainApp/table";
import { CustomFormField, Form } from "mainApp/form";
import { Input } from "mainApp/input";
import { Button } from "mainApp/button";
import { Hash } from "../../../constants";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { ControllerRenderProps, useFieldArray, useForm } from "react-hook-form";
import {
  approvalSetupSchema,
  ApprovalSetupSchema,
} from "../../../services/form";
import { useLevelByModelId } from "../hooks/useLevelByModelId";
import { useQuery } from "mainApp/useQuery";
import { useModelSetup } from "../hooks/useModelSetup";
import { useEffect } from "react";

function ApprovalSetup() {
  const navigate = useNavigate();
  const query = useQuery();
  const id = query.get("id") as string;
  const { data } = useModelSetup(id);
  const { dataListLevel } = useLevelByModelId(id);

  const listLevel =
    dataListLevel?.length > 0
      ? dataListLevel?.map((item: any) => {
          return {
            ...item,
            active: item.active ? "Active" : "Inactive",
            action: (
              <div className="flex gap-2">
                <Button
                  onClick={() =>
                    navigate(
                      `/avm?modelName=${item.modelName}&modelId=${item.modelId}&id=${item.id}${Hash.SETUP_LEVEL}`
                    )
                  }
                >
                  Edit
                </Button>
                <Button
                  onClick={() => console.log("Delete")}
                  variant="destructive"
                >
                  Delete
                </Button>
              </div>
            ),
          };
        })
      : [];

  const modelColumns = [
    {
      header: "Function",
      accessor: "functionCode",
    },
    {
      header: "Rule Exp",
      accessor: "ruleExp",
    },
  ];

  const levelColumns = [
    {
      header: "Level",
      accessor: "levelSequence",
    },
    {
      header: "Level Name",
      accessor: "modelName",
    },
    {
      header: "Status",
      accessor: "active",
    },
    {
      header: "Action",
      accessor: "action",
    },
  ];

  const form = useForm<ApprovalSetupSchema>({
    resolver: zodResolver(approvalSetupSchema),
    defaultValues: {
      model: {
        name: "",
        description: "",
      },
      mappings: [],
      level: [],
    },
    mode: "onChange",
  });

  useEffect(() => {
    if (data) {
      form.reset({
        ...data,
      });
    }
  }, [data, form]);

  const { fields } = useFieldArray({
    control: form.control,
    name: "mappings",
  });

  const onSubmit = async (data: ApprovalSetupSchema) => {
    try {
      const payload = { ...data };
      console.log(payload);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const {
    handleSubmit,
    // formState: { errors },
  } = form;

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold">Approval Setup</h1>
      <br />
      <Form {...form}>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          <CustomFormField
            control={form.control}
            name="model.name"
            label="Name"
          >
            {(
              field: ControllerRenderProps<ApprovalSetupSchema, "model.name">
            ) => (
              <Input
                {...field}
                disabled={true}
                type="text"
                placeholder="Input Name"
              />
            )}
          </CustomFormField>
          <CustomFormField
            control={form.control}
            name="model.description"
            label="Description"
          >
            {(
              field: ControllerRenderProps<
                ApprovalSetupSchema,
                "model.description"
              >
            ) => (
              <Input
                {...field}
                disabled={true}
                type="text"
                placeholder="Input Description"
              />
            )}
          </CustomFormField>
          <CustomTable
            caption="Model Mapping"
            columns={modelColumns}
            data={fields}
            className="mt-4 border-collapse border border-gray-200 shadow-lg"
            headerClassName="bg-gray-100 text-gray-700 whitespace-nowrap"
            bodyClassName="bg-white"
          />
          <div className="flex justify-end items-center w-full">
            <Button
              onClick={() =>
                navigate(
                  `/avm?modelName=${data?.model?.name}&modelId=${id}${Hash.SETUP_LEVEL}`
                )
              }
            >
              Add Level
            </Button>
          </div>
          <CustomTable
            columns={levelColumns}
            data={listLevel}
            className="mt-4 border-collapse border border-gray-200 shadow-lg"
            headerClassName="bg-gray-100 text-gray-700 whitespace-nowrap"
            bodyClassName="bg-white"
          />
          {/* <CustomPagination
            currentPage={1}
            totalPageCount={10}
            onPageChange={console.log}
          /> */}
        </form>
      </Form>
    </div>
  );
}

export default ApprovalSetup;
