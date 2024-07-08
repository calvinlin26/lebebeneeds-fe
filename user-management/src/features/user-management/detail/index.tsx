import { Controller, ControllerRenderProps, useForm } from "react-hook-form";
import { CustomFormField, Form } from "mainApp/form";
import React, { useState } from "react";
import { UserSchema, userSchema } from "../../../services/form";

import { Button } from "mainApp/button";
import { Checkbox } from "mainApp/checkbox";
import CustomTable from "mainApp/table";
import { Input } from "mainApp/input";
import { zodResolver } from "@hookform/resolvers/zod";

interface RoleData {
  roleCode: string;
  action: JSX.Element;
}

const Index: React.FC = () => {
  const form = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      username: "",
      password: "",
      name: "",
      email: "",
      branch: "",
      title: "",
      roles: [],
    },
    mode: "onChange",
  });

  const [passwordConfirmation, setPasswordConfirmation] = useState("");

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
  const roles = ["SUPER_ADMIN", "ADMIN", "USER", "GUEST"];
  const data: RoleData[] = roles.map((role) => ({
    roleCode: role,
    action: (
      <Controller
        name="roles"
        control={form.control}
        render={({ field }) => (
          <Checkbox
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleRoleChange(e, role, field)
            }
            checked={field.value.includes(role as any)}
          />
        )}
      />
    ),
  }));

  const handleRoleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    role: string,
    field: ControllerRenderProps<UserSchema, "roles">
  ) => {
    const newRoles = event.target.checked
      ? [...field.value, role]
      : field.value.filter((r: any) => r !== role);
    field.onChange(newRoles);
  };

  const onSubmit = (data: UserSchema) => {
    // Handle form submission
    console.log("Form Data:", data);
  };

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold">Add User</h1>

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

          <CustomTable
            columns={columns}
            data={data}
            caption="User Roles"
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
              {form.formState.isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Index;
