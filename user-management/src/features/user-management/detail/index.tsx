import { Controller, ControllerRenderProps, useForm } from "react-hook-form";
import { CustomFormField, Form } from "mainApp/form";
import React, { useEffect, useState } from "react";
import {
  createUserSchema,
  updateUserSchema,
  UserSchema,
} from "../../../services/form";
import { Button } from "mainApp/button";
import { Checkbox } from "mainApp/checkbox";
import CustomTable from "mainApp/table";
import DropdownSelect from "mainApp/select";
import { Input } from "mainApp/input";
import { postUser, editUser } from "../../../services/api";
import { toast } from "sonner";
// import { useNavigate } from "react-router-dom";
import { useQuery } from "mainApp/useQuery";
import { useRolesData } from "../hooks/useRolesData";
import { useUserDetail } from "../hooks/useUserDetail";
import { zodResolver } from "@hookform/resolvers/zod";

interface RoleData {
  roleCode: string;
  action: JSX.Element;
}

const statusOptions: StatusOption[] = [
  { value: "true", label: "Yes" },
  { value: "false", label: "No" },
];

const Index: React.FC = () => {
  // const navigate = useNavigate();
  const query = useQuery();
  const username = query.get("username") as string;

  //const username = "test1234567";
  const isEdit = username ? true : false;
  // console.log(username, "username");

  // Use custom hooks
  const roleData = useRolesData();
  const userDetail = useUserDetail(username);

  // console.log(userDetail, "user detail");

  const form = useForm<UserSchema>({
    resolver: zodResolver(isEdit ? updateUserSchema : createUserSchema),
    defaultValues: {
      username: "",
      password: "",
      name: "",
      email: "",
      branch: "",
      title: "",
      invalidPasswordRetry: 0,
      locked: "false",
      active: "true",
      roles: [],
    },
    mode: "onChange",
  });

  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  useEffect(() => {
    if (userDetail) {
      form.reset({
        ...userDetail,
        locked: userDetail.locked ? "true" : "false",
        active: userDetail.active ? "true" : "false",
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
    {
      header: "Action",
      accessor: "action",
    },
  ];

  // Table Data
  const data: RoleData[] = roleData.map(role => ({
    roleCode: role.roleCode,
    action: (
      <Controller
        name="roles"
        control={form.control}
        render={({ field }) => (
          <Checkbox
            onCheckedChange={(checked: boolean) =>
              handleRoleChange(checked, role.roleCode, field)
            }
            checked={field.value.some(r => r.roleCode === role.roleCode)}
          />
        )}
      />
    ),
  }));

  const handleRoleChange = (
    checked: boolean,
    role: string,
    field: ControllerRenderProps<UserSchema, "roles">
  ) => {
    const newRoles = checked
      ? [...(field.value as { roleCode: string }[]), { roleCode: role }]
      : (field.value as { roleCode: string }[]).filter(
          r => r.roleCode !== role
        );
    field.onChange(newRoles);
  };

  const onSubmit = async (data: UserSchema) => {
    // Handle form submission
    try {
      console.log("Form Data on Submit:", data);
      if (isEdit) {
        await editUser(data);
        toast.success("User has been updated");
      } else {
        await postUser(data);
        toast.success("User has been created");
      }
      // navigate("/user-management");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold">
        {isEdit ? "Edit User" : "Add User"}
      </h1>

      <Form {...form}>
        <form
          className="flex flex-col gap-5"
          onSubmit={form.handleSubmit(onSubmit)}
        >
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
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
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

              <Input
                value={passwordConfirmation}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPasswordConfirmation(e.target.value)
                }
                placeholder="Confirm Password"
                type="password"
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
                className="border-tyellow focus-visible:ring-tyellow"
              />
            </>
          )}

          <CustomFormField control={form.control} name="name" label="Name">
            {(field: ControllerRenderProps<UserSchema, "name">) => (
              <Input
                {...field}
                placeholder="Input name"
                type="text"
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
              />
            )}
          </CustomFormField>

          <CustomFormField control={form.control} name="email" label="Email">
            {(field: ControllerRenderProps<UserSchema, "email">) => (
              <Input
                {...field}
                placeholder="Input email"
                type="email"
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
              />
            )}
          </CustomFormField>

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

          <CustomFormField control={form.control} name="title" label="Title">
            {(field: ControllerRenderProps<UserSchema, "title">) => (
              <Input
                {...field}
                placeholder="Input title"
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
                      statusOptions.find(option => option.value === field.value)
                        ?.value
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
                      statusOptions.find(option => option.value === field.value)
                        ?.value
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
            className="mt-4 border-collapse border border-gray-200 shadow-lg"
            headerClassName="bg-gray-100 text-gray-700"
            bodyClassName="bg-white"
          />

          <div className="flex flex-row gap-5 mt-4 justify-end">
            <Button variant="secondary">Back</Button>
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
