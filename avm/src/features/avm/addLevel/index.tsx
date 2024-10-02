import CustomTable from "mainApp/table";
import DropdownSelect from "mainApp/select";
import CustomPagination from "mainApp/pagination";
import { CustomFormField, Form } from "mainApp/form";
import { Input } from "mainApp/input";
import { Button } from "mainApp/button";
import { CustomDialog } from "mainApp/dialog";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { ControllerRenderProps, useFieldArray, useForm } from "react-hook-form";
import {
  addLevelSchema,
  AddLevelSchema,
  ReviewersSchema,
} from "../../../services/form";
import { useEffect, useState } from "react";
import { useQuery } from "mainApp/useQuery";
import { useLevelById } from "../hooks/useLevelById";
import { useRiviewers } from "../hooks/useReviewers";
import { setupLevel } from "../../../services";
import { useEligibilityRules } from "../hooks/useEligibilityRules";

function AddLevel() {
  const navigate = useNavigate();
  const query = useQuery();
  const id = query.get("id") as string;
  const modelName = query.get("modelName") as string;
  const modelId = query.get("modelId") as string;
  const { data } = useLevelById(id);
  const { dataEligibilityRules } = useEligibilityRules(modelId);
  const [keyword, setKeyword] = useState("");
  const [open, setOpen] = useState(false);
  const { dataReviewers, params, setParams, reviewersTotalPages } =
    useRiviewers();
  const [selectedReviewers, setSelectedReviewers] = useState<ReviewersSchema[]>(
    []
  );

  const reviewerColumns = [
    {
      header: "Reviewer",
      accessor: "userOrGroupName",
    },
    {
      header: "Type",
      accessor: "reviewerType",
    },
    {
      header: "Action",
      accessor: "action",
    },
  ];

  const dialogColums = [
    {
      header: "Reviewer",
      accessor: "userOrGroupName",
    },
    {
      header: "Type",
      accessor: "reviewerType",
    },
  ];

  const form = useForm<AddLevelSchema>({
    resolver: zodResolver(addLevelSchema),
    defaultValues: {
      level: {
        eligibilityRuleId: "",
        compareValue: "",
        quorumValue: "",
        levelMode: "",
      },
      reviewers: [],
    },
    mode: "onChange",
  });

  useEffect(() => {
    if (data) {
      form.reset({
        level: {
          ...data.level,
          levelSequence: data.level.levelSequence.toString(),
          priority: data.level.levelSequence.toString(),
          modelId: modelId,
          modelName,
          quorumValue: data.level.quorumValue ?? "",
        },
        reviewers: data.reviewers.map((item) => ({
          ...item,
          userOrGroupName: item.userOrGroupName ?? item.id,
        })),
      });
    } else {
      form.reset({
        level: {
          modelId: modelId,
          modelName,
          eligibilityRuleId: "",
          compareValue: "",
          quorumValue: "",
          levelMode: "",
        },
      });
    }
  }, [data, form, modelName, modelId]);

  const onSubmit = async (data: AddLevelSchema) => {
    try {
      const payload = { ...data, level: { ...data.level, id } };
      await setupLevel(payload);
      navigate(-1);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "reviewers",
  });

  const reviewersData = fields?.map((item: ReviewersSchema, index: number) => {
    return {
      ...item,
      userOrGroupName: item.userOrGroupName ?? item.id,
      action: (
        <div className="flex gap-2">
          <Button
            onClick={() => {
              remove(index);
              setSelectedReviewers(
                selectedReviewers.filter((_, i) => i !== index)
              );
            }}
            variant="destructive"
          >
            Delete
          </Button>
        </div>
      ),
    };
  });

  const {
    handleSubmit,
    formState: { errors },
  } = form;
  console.log(errors);

  const ContentDialog = (
    <div className="overflow-y-auto max-h-[600px] p-2">
      <div className="flex flex-col">
        <div className="flex gap-2">
          <DropdownSelect
            placeholder="Select Type"
            className="w-1/3"
            onChange={(e: any) =>
              setParams({
                ...params,
                page: 0,
                reviewerType: e.target.value,
              })
            }
            value={params.reviewerType}
            defaultValue={params.reviewerType}
            data={[
              { label: "GROUP", value: "GROUP" },
              { label: "USER", value: "USER" },
            ]}
          />
          <Input
            onChange={(e: any) => setKeyword(e.target.value)}
            placeholder="Input Search"
          />
          <Button
            onClick={() =>
              setParams({
                ...params,
                page: 0,
                criteria: keyword,
              })
            }
          >
            Search
          </Button>
        </div>
        <CustomTable
          columns={dialogColums}
          data={
            params.reviewerType === "GROUP"
              ? dataReviewers?.groups
              : dataReviewers?.users
          }
          asSelect
          selected={selectedReviewers}
          setSelected={setSelectedReviewers}
          selectAccessor="id"
          className="mt-4 border-collapse border border-gray-200 shadow-lg"
          headerClassName="bg-gray-100 text-gray-700 whitespace-nowrap"
          bodyClassName="bg-white"
        />
        <br />
        <CustomPagination
          currentPage={params.page + 1}
          totalPageCount={reviewersTotalPages}
          onPageChange={(page: number) =>
            setParams({ ...params, page: page - 1 })
          }
        />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold">{id ? "Edit" : "Add"} Level</h1>
      <br />
      <Form {...form}>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          <CustomFormField
            control={form.control}
            name="level.modelName"
            label="Model"
          >
            {(
              field: ControllerRenderProps<AddLevelSchema, "level.modelName">
            ) => (
              <Input
                {...field}
                disabled={true}
                type="text"
                placeholder="Model"
              />
            )}
          </CustomFormField>
          <CustomFormField
            control={form.control}
            name="level.levelSequence"
            label="Level"
          >
            {(
              field: ControllerRenderProps<
                AddLevelSchema,
                "level.levelSequence"
              >
            ) => <Input {...field} type="string" placeholder="Input Level" />}
          </CustomFormField>
          <CustomFormField
            control={form.control}
            name="level.priority"
            label="Priority"
          >
            {(
              field: ControllerRenderProps<AddLevelSchema, "level.priority">
            ) => (
              <Input {...field} type="string" placeholder="Input Priority" />
            )}
          </CustomFormField>
          <CustomFormField
            control={form.control}
            name="level.levelMode"
            label="Level Mode"
          >
            {(
              field: ControllerRenderProps<AddLevelSchema, "level.levelMode">
            ) => (
              <DropdownSelect
                {...field}
                placeholder="Select Level Mode"
                disabled={form.formState.isSubmitting}
                data={[
                  { label: "ALL", value: "ALL" },
                  { label: "ONE", value: "ONE" },
                  { label: "COUNT", value: "COUNT" },
                  { label: "PERCENTAGE", value: "PERCENTAGE" },
                ]}
              />
            )}
          </CustomFormField>
          {form.watch("level.levelMode") !== "ALL" &&
            form.watch("level.levelMode") !== "ONE" &&
            form.watch("level.levelMode") !== "" && (
              <CustomFormField
                control={form.control}
                name="level.quorumValue"
                label="Quorum Value"
              >
                {(
                  field: ControllerRenderProps<
                    AddLevelSchema,
                    "level.quorumValue"
                  >
                ) => (
                  <Input
                    {...field}
                    type="text"
                    placeholder="Input Quorum Value"
                  />
                )}
              </CustomFormField>
            )}
          <span className="mt-4">Eligibility</span>
          <div className="flex flex-col gap-5 px-4 pb-4">
            <CustomFormField
              control={form.control}
              name="level.eligibilityRuleId"
              label="Rule"
            >
              {(
                field: ControllerRenderProps<
                  AddLevelSchema,
                  "level.eligibilityRuleId"
                >
              ) => (
                <DropdownSelect
                  {...field}
                  placeholder="Select Eligibility Rule"
                  disabled={form.formState.isSubmitting}
                  data={dataEligibilityRules.map((item) => {
                    return {
                      label: item.name,
                      value: item.id,
                    };
                  })}
                />
              )}
            </CustomFormField>
            <CustomFormField
              control={form.control}
              name="level.compareValue"
              label="Compare Value"
            >
              {(
                field: ControllerRenderProps<
                  AddLevelSchema,
                  "level.compareValue"
                >
              ) => (
                <Input
                  {...field}
                  type="text"
                  placeholder="Input Compare Value"
                />
              )}
            </CustomFormField>
          </div>
          <div className="flex justify-end items-center w-full">
            <CustomDialog
              title="Reviewers"
              content={ContentDialog}
              open={open}
              onOpenChange={() => setOpen(!open)}
              styleContent="sm:max-w-[425px] max-h-[800px]"
              footer={
                <>
                  <Button
                    type="button"
                    onClick={() => {
                      let newReviewers: ReviewersSchema[] = [];
                      selectedReviewers.map((item) => {
                        if (
                          !reviewersData.find(
                            (reviewer) =>
                              reviewer.userOrGroupId === item.userOrGroupId
                          )
                        ) {
                          newReviewers.push({
                            ...item,
                            reviewerType: item.reviewerType,
                          });
                        }
                      });
                      append(newReviewers);
                      setOpen(false);
                    }}
                  >
                    Save
                  </Button>
                </>
              }
            >
              <Button>Add Reviewer</Button>
            </CustomDialog>
          </div>
          <CustomTable
            columns={reviewerColumns}
            data={reviewersData}
            className="mt-4 border-collapse border border-gray-200 shadow-lg"
            headerClassName="bg-gray-100 text-gray-700 whitespace-nowrap"
            bodyClassName="bg-white"
          />
          <div className="flex flex-row gap-5 mt-4 justify-end">
            <Button variant="secondary" onClick={() => navigate(-1)}>
              Back
            </Button>
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              aria-disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Submitting..." : "Save"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default AddLevel;
