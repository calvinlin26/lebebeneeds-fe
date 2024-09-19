import { ControllerRenderProps, useForm } from "react-hook-form";
import { CustomFormField, Form } from "mainApp/form";
import React, { useEffect } from "react";
import {
  createUserSchema,
  updateUserSchema,
  UserSchema,
} from "../../../services/form";
import { Button } from "mainApp/button";
import CustomTable from "mainApp/table";
import CustomPagination from "mainApp/pagination";
import withUserAccess from "mainApp/withUserAccess";
import DropdownSelect from "mainApp/select";
import { Input } from "mainApp/input";
import { postUser, editUser } from "../../../services/api";
import { toast } from "sonner";
// import { useNavigate } from "react-router-dom";
import { useQuery } from "mainApp/useQuery";
import { useRolesData } from "../hooks/useRolesData";
import { useUserDetail } from "../hooks/useUserDetail";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

interface RoleData {
  roleCode: string;
}

const statusOptions: StatusOption[] = [
  { value: "true", label: "Yes" },
  { value: "false", label: "No" },
];

const Index: React.FC = () => {
  // const navigate = useNavigate();
  const query = useQuery();
  const username = query.get("username") as string;
  const navigate = useNavigate();
  //const username = "test1234567";
  const isEdit = username ? true : false;
  // console.log(username, "username");
  const [selectedRoles, setSelectedRoles] = React.useState<RoleData[]>([]);

  // Use custom hooks
  const { rolesData, roleSearchParam, setRoleSearchParam, rolePagination } =
    useRolesData();
  const userDetail = useUserDetail(username);

  // console.log(userDetail, "user detail");

  const form = useForm<UserSchema>({
    resolver: zodResolver(isEdit ? updateUserSchema : createUserSchema),
    defaultValues: {
      username: "",
      password: "",
      branch: "",
      invalidPasswordRetry: 0,
      locked: "false",
      active: "true",
      roles: [],
    },
    mode: "onChange",
  });

  useEffect(() => {
    if (userDetail) {
      form.reset({
        ...userDetail,
        locked: userDetail.locked ? "true" : "false",
        active: userDetail.active ? "true" : "false",
        branch: userDetail.branchCode,
      });
    }
  }, [userDetail, form]);

  // Columns definition
  const columns = [
    {
      header: "Role",
      accessor: "roleCode",
      headerClassName: "text-left font-bold",
    },
  ];

  // Table Data
  const data: RoleData[] = rolesData.map((role) => ({
    roleCode: role.roleCode,
  }));

  const handlePageChangeRole = (page: number) => {
    setRoleSearchParam({
      ...roleSearchParam,
      page: page,
    });
  };

  const onSubmit = async (data: UserSchema) => {
    // Handle form submission
    try {
      if (isEdit) {
        await editUser({
          ...data,
          roles: selectedRoles,
        });
        toast.success("User has been updated");
      } else {
        await postUser({
          ...data,
          roles: selectedRoles,
        });
        toast.success("User has been created");
      }
      navigate("/user-management");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const {
    handleSubmit,
    // formState: { errors }
  } = form;
  // console.log("Errors:", errors);

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold">
        {isEdit ? "Edit User" : "Add User"}
      </h1>

      <Form {...form}>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          <CustomFormField
            control={form.control}
            name="username"
            label="Username"
          >
            {(field: ControllerRenderProps<UserSchema, "username">) => (
              <Input
                {...field}
                placeholder="Input username"
                type="text"
                disabled={isEdit || form.formState.isSubmitting}
                aria-disabled={isEdit || form.formState.isSubmitting}
              />
            )}
          </CustomFormField>

          {!isEdit && (
            <>
              <CustomFormField
                control={form.control}
                name="password"
                label="Password"
              >
                {(field: ControllerRenderProps<UserSchema, "password">) => (
                  <Input
                    {...field}
                    placeholder="Input password"
                    type="password"
                    disabled={form.formState.isSubmitting}
                    aria-disabled={form.formState.isSubmitting}
                  />
                )}
              </CustomFormField>
              <CustomFormField control={form.control} name="confirmPassword">
                {(
                  field: ControllerRenderProps<UserSchema, "confirmPassword">
                ) => (
                  <Input
                    {...field}
                    placeholder="Confirm password"
                    type="password"
                    disabled={form.formState.isSubmitting}
                    aria-disabled={form.formState.isSubmitting}
                  />
                )}
              </CustomFormField>
            </>
          )}

          <CustomFormField control={form.control} name="branch" label="Branch">
            {(field: ControllerRenderProps<UserSchema, "branch">) => (
              <Input
                {...field}
                placeholder="Input branch"
                type="text"
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
              />
            )}
          </CustomFormField>

          {isEdit && (
            <>
              <CustomFormField
                control={form.control}
                name="locked"
                label="Locked"
              >
                {(field: ControllerRenderProps<UserSchema, "locked">) => (
                  <DropdownSelect
                    name="locked"
                    placeholder="Select status"
                    emptyState="No options available"
                    data={statusOptions}
                    value={
                      statusOptions.find(
                        (option) => option.value === field.value
                      )?.value
                    }
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      console.log(e.target.value);

                      field.onChange(e?.target.value);
                    }}
                    disabled={form.formState.isSubmitting}
                    aria-disabled={form.formState.isSubmitting}
                  />
                )}
              </CustomFormField>

              <CustomFormField
                control={form.control}
                name="active"
                label="Active"
              >
                {(field: ControllerRenderProps<UserSchema, "active">) => (
                  <DropdownSelect
                    name="active"
                    placeholder="Select status"
                    emptyState="No options available"
                    data={statusOptions}
                    value={
                      statusOptions.find(
                        (option) => option.value === field.value
                      )?.value
                    }
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      field.onChange(e?.target.value)
                    }
                    disabled={form.formState.isSubmitting}
                    aria-disabled={form.formState.isSubmitting}
                  />
                )}
              </CustomFormField>
            </>
          )}

          <CustomTable
            columns={columns}
            data={data}
            asSelect
            selected={selectedRoles}
            setSelected={setSelectedRoles}
            selectAccessor="roleCode"
            className="mt-4 border-collapse border border-gray-200 shadow-lg"
            headerClassName="bg-gray-100 text-gray-700"
            bodyClassName="bg-white"
          />
          {rolePagination.totalPages > 0 && (
            <CustomPagination
              currentPage={rolePagination.page}
              totalPageCount={rolePagination.totalPages}
              onPageChange={handlePageChangeRole}
            />
          )}

          <div className="flex flex-row gap-5 mt-4 justify-end">
            <Button
              variant="secondary"
              onClick={() => navigate("/user-management")}
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

export default withUserAccess(Index);
