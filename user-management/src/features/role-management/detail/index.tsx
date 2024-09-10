import { ControllerRenderProps, useForm } from "react-hook-form";
import { CustomFormField, Form } from "mainApp/form";
import React, { useEffect } from "react";
import { PostRoleSchema, postRoleSchema } from "../../../services/form";
import { Button } from "mainApp/button";
import CustomTable from "mainApp/table";
import CustomPagination from "mainApp/pagination";
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
}

interface Services {
  serviceCode: string;
  url: string;
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
  const [selectedServices, setSelectedServices] = React.useState<Services[]>(
    []
  );
  const [selectedMenu, setselectedMenu] = React.useState<any[]>([]);

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
  ];

  const columnsServices = [
    {
      header: "Service",
      accessor: "serviceCode",
      headerClassName: "text-left font-bold",
    },
  ];

  useEffect(() => {
    if (roleDetail) {
      form.reset({
        ...roleDetail,
        active: roleDetail.active ? "true" : "false",
      });
      setselectedMenu(roleDetail.menus);
      setSelectedServices(roleDetail.services);
    }
  }, [roleDetail, form]);

  // Table Data
  const { menus, menusSearchParam, setMenusSearchParam, menusPaginationInfo } =
    useRoleMenuData();
  const dataMenu: Menus[] = menus.map((menu) => ({
    menuCode: menu.menuCode,
    label: menu.label,
    description: menu.description,
    url: menu.url,
    parent: menu.parent,
    orderNo: menu.orderNo,
  }));

  const handlePageChangeMenus = (page: number) => {
    setMenusSearchParam({
      ...menusSearchParam,
      page: page,
    });
  };

  const {
    services,
    servicessSearchParam,
    setServicesSearchParam,
    servicesPaginationInfo,
  } = useRoleServiceData();
  const dataService: Services[] = services.map((service) => ({
    serviceCode: service.serviceCode,
    url: service.url,
  }));

  const handlePageChangeServices = (page: number) => {
    setServicesSearchParam({
      ...servicessSearchParam,
      page: page,
    });
  };

  const onSubmit = async (data: PostRoleSchema) => {
    // Handle form submission
    try {
      console.log("Form Data on Submit:", data);
      if (isEdit) {
        await editRole({
          ...data,
          menus: selectedMenu,
          services: selectedServices,
        });
        toast.success("User has been updated");
      } else {
        await postRole({
          ...data,
          menus: selectedMenu,
          services: selectedServices,
        });
        toast.success("User has been created");
      }
      navigate("/roles-management");
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
        {isEdit ? "Edit Role" : "Add Role"}
      </h1>

      <Form {...form}>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
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
            label="Description"
          >
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
            columns={columnsMenus}
            data={dataMenu}
            asSelect
            selected={selectedMenu}
            setSelected={setselectedMenu}
            selectAccessor="menuCode"
            className="mt-4 border-collapse border border-gray-200 shadow-lg"
            headerClassName="bg-gray-100 text-gray-700"
            bodyClassName="bg-white"
          />
          {menusPaginationInfo.totalPages > 0 && (
            <CustomPagination
              currentPage={menusPaginationInfo.page}
              totalPageCount={menusPaginationInfo.totalPages}
              onPageChange={handlePageChangeMenus}
            />
          )}
          <CustomTable
            columns={columnsServices}
            data={dataService}
            asSelect
            selected={selectedServices}
            setSelected={setSelectedServices}
            selectAccessor="serviceCode"
            className="mt-4 border-collapse border border-gray-200 shadow-lg"
            headerClassName="bg-gray-100 text-gray-700"
            bodyClassName="bg-white"
          />
          {servicesPaginationInfo.totalPages > 0 && (
            <CustomPagination
              currentPage={servicesPaginationInfo.page}
              totalPageCount={servicesPaginationInfo.totalPages}
              onPageChange={handlePageChangeServices}
            />
          )}

          <div className="flex flex-row gap-5 mt-4 justify-end">
            <Button
              variant="secondary"
              onClick={() => navigate("/roles-management")}
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
