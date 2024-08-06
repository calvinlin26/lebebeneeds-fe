import { Controller, ControllerRenderProps, useForm } from "react-hook-form";
import { CustomFormField, Form } from "mainApp/form";
import React, { useEffect } from "react";
import { PostRoleSchema, postRoleSchema } from "../../../services/form";
import { Button } from "mainApp/button";
import { Checkbox } from "mainApp/checkbox";
import CustomTable from "mainApp/table";
import { Input } from "mainApp/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRoleMenuData } from "../hooks/useRoleMenusData";
import { useQuery } from "mainApp/useQuery";
import { useRoleDetail } from "../hooks/useRoleServiceDetailData";
import { useRoleServiceData } from "../hooks/useRoleServiceData";
import DropdownSelect from "mainApp/select";
import { editRole, postRole } from "../../../services/api";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";


interface Menus {
  menuCode: string;
  label: string;
  description: string;
  url: string;
  parent: string;
  orderNo: string;
  action: JSX.Element;
}

interface Services {
  serviceCode: string;
  url: string;
  action: JSX.Element;
}

const statusOptions: StatusOption[] = [
  { value: "true", label: "Yes" },
  { value: "false", label: "No" },
];

const Index: React.FC = () => {
  const query = useQuery();
  const roleCode = query.get("rolecode") as string;
  const navigate = useNavigate();
  const isEdit = roleCode ? true : false;
  const roleDetail = useRoleDetail(roleCode);

  const form = useForm<PostRoleSchema>({
    resolver: zodResolver(postRoleSchema),
    defaultValues: {
      roleCode: "",
      roleName: "",
      description: "",
      active: "true",
      menus: [],
      services: [],
    },
    mode: "onChange",
  });

  // Columns definition
  const columnsMenus = [
    {
      header: "Menu",
      accessor: "label",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Action",
      accessor: "action",
    },
  ];

  const columnsServices = [
    {
      header: "Service",
      accessor: "serviceCode",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Action",
      accessor: "action",
    },
  ];

  useEffect(() => {
    if (roleDetail) {
      form.reset({
        ...roleDetail,
        active: roleDetail.active ? "true" : "false",
      });
    }
  }, [roleDetail, form]);

  // Table Data
  const menus = useRoleMenuData();
  const dataMenu: Menus[] = menus.map((menu) => ({
    menuCode: menu.menuCode,
    label: menu.label,
    description: menu.description,
    url: menu.url,
    parent: menu.parent,
    orderNo: menu.orderNo,
    action: (
      <Controller
        name="menus"
        control={form.control}
        render={({ field }) => (
          <Checkbox
            onChange={(checked: boolean) =>
              handleMenuChangeMenu(checked, menu.label, field)
            }
            checked={field.value.some(r => r.label === menu.label)}
          />
        )}
      />
    ),
  }));

  const services = useRoleServiceData();
  const dataService: Services[] = services.map((service) => ({
    serviceCode: service.serviceCode,
    url: service.url,
    action: (
      <Controller
        name="services"
        control={form.control}
        render={({ field }) => (
          <Checkbox
            onChange={(checked: boolean) =>
              handleMenuChangeService(checked, service.serviceCode, field)
            }
            checked={field.value.includes(service as any)}
          />
        )}
      />
    ),
  }));

  const handleMenuChangeService = (
    checked: boolean,
    service: string,
    field: ControllerRenderProps<PostRoleSchema, "services">
  ) => {
    const newService = checked
      ? [...field.value as { serviceCode: string}[]]
      : (field.value as {serviceCode: string}[]).filter(r => r.serviceCode !== service);
    field.onChange(newService);
  };

  const handleMenuChangeMenu = (
    checked: boolean,
    menu: string,
    field: ControllerRenderProps<PostRoleSchema, "menus">
  ) => {
    const newMenus = checked
      ? [...(field.value as { label: string}[]), {label : menu}]
      : (field.value as {label: string}[]).filter(r => r.label !== menu);
    field.onChange(newMenus);
  };

  const onSubmit = async (data: PostRoleSchema) => {
    // Handle form submission
    try {
      console.log("Form Data on Submit:", data);
      if (isEdit) {
        await editRole(data);
        toast.success("User has been updated");
      } else {
        await postRole(data);
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
        {isEdit? "Edit Role" : "Add Role"}
      </h1>

      <Form {...form}>
        <form
          className="flex flex-col gap-5"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <CustomFormField
            control={form.control}
            name="roleCode"
            label="Role Code"
          >
            {(field: ControllerRenderProps<PostRoleSchema, "roleCode">) => (
              <Input
                {...field}
                placeholder="Input Role Code"
                type="text"
                disabled={isEdit || form.formState.isSubmitting}
                aria-disabled={isEdit || form.formState.isSubmitting}
              />
            )}
          </CustomFormField>

          <CustomFormField
            control={form.control}
            name="roleName"
            label="Role Name"
          >
            {(field: ControllerRenderProps<PostRoleSchema, "roleName">) => (
              <Input
                {...field}
                placeholder="Input Role Name"
                type="text"
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
              />
            )}
          </CustomFormField>

          <CustomFormField
            control={form.control} 
            name="description" 
            label="Description">
            {(field: ControllerRenderProps<PostRoleSchema, "description">) => (
              <Input
                {...field}
                placeholder="Input Description"
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
                name="active"
                label="Active"
              >
                {(field: ControllerRenderProps<RoleListItem, "active">) => (
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
            columns={columnsMenus}
            data={dataMenu}
            className="mt-4 border-collapse border border-gray-200 shadow-lg"
            headerClassName="bg-gray-100 text-gray-700"
            bodyClassName="bg-white"
          />

          <CustomTable
            columns={columnsServices}
            data={dataService}
            className="mt-4 border-collapse border border-gray-200 shadow-lg"
            headerClassName="bg-gray-100 text-gray-700"
            bodyClassName="bg-white"
          />

          <div className="flex flex-row gap-5 mt-4 justify-end">
            <Button variant="secondary" onClick={() => navigate("/roles-management")}>Back</Button>
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              aria-disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Submitting..." : isEdit ? "Update": "Submit"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Index;
