import { ControllerRenderProps, useForm } from "react-hook-form";
import { CustomFormField, Form } from "mainApp/form";
import { StockVariantSchema, stockVariantSchema } from "../../../services/form";
import { useEffect, useState } from "react";

import { Button } from "mainApp/button";
import { CustomDialog } from "mainApp/dialog";
import CustomPagination from "mainApp/pagination";
import CustomTable from "mainApp/table";
import DropdownSelect from "mainApp/select";
import { Input } from "mainApp/input";
import { useStockVariantData } from "../hooks/useStockVariantData";
import { zodResolver } from "@hookform/resolvers/zod";

// import { useNavigate } from "react-router-dom";

const Index: React.FC = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [searchField, setSearchField] = useState<string>("description");
  const [csvType, setCsvType] = useState<string>("shopee");
  const [openDialog, setOpenDialog] = useState(false);
  //   const navigate = useNavigate();

  //use custom hooks
  const { stockVariant, searchParam, setSearchParam, paginationInfo } =
    useStockVariantData();

  const form = useForm<StockVariantSchema>({
    resolver: zodResolver(stockVariantSchema),
    defaultValues: {
      quantity: 0,
    },
    mode: "onChange",
  });

  // Columns definition
  const columns = [
    {
      header: "Variant Code",
      accessor: "variantCode",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Variant Name",
      accessor: "variantName",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Quantity",
      accessor: "quantity",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Last Updated Date",
      accessor: "date",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Action",
      accessor: "action",
    },
  ];

  const data = stockVariant.map((item: StockVariant) => {
    return {
      ...item,
      action: (
        <div className="flex flex-row gap-3">
          <Button onClick={() => setOpenDialog((prev) => !prev)}>
            Manual Adjustment
          </Button>
        </div>
      ),
    };
  });

  const handlePageChange = (page: number) => {
    setSearchParam({
      ...searchParam,
      page: page,
    });
  };

  const handleChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleChangeSearchField = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchField(e.target.value);
  };

  const handleSearch = () => {
    setSearchParam({
      ...searchParam,
      search: keyword,
      searchField: searchField,
    });
  };

  const onSubmit = async (data: any) => {
    console.log(data, "data");
  };

  const { handleSubmit } = form;

  useEffect(() => {
    document
      .getElementById("stockVariant")
      ?.scrollIntoView({ behavior: "smooth" });
  }, [stockVariant]);

  return (
    <div className="flex flex-col" id="stockVariant">
      <h1 className="text-2xl font-bold">Master Product</h1>
      <div className="flex w-full justify-between items-center mt-5">
        <div className="flex gap-x-4 items-center">
          <Input
            variant={"default"}
            fieldSize={"default"}
            type={"text"}
            placeholder={"Enter keyword"}
            onChange={handleChangeKeyword}
          />
          <DropdownSelect
            placeholder={"Please Select"}
            data={[
              { label: "Description", value: "description" },
              { label: "Status", value: "status" },
            ]}
            onChange={handleChangeSearchField}
            value={searchField}
          />
          <Button onClick={handleSearch}>Search</Button>
        </div>
        <Button
          className="bg-primary"
          //   onClick={() => navigate(`/admin/params?action=1`)}
        >
          Add Product
        </Button>
      </div>

      <div className="flex gap-x-4 items-center mt-5">
        <div className="w-64">
          <DropdownSelect
            placeholder={"Please Select"}
            data={[
              { label: "Shopee", value: "shopee" },
              { label: "Tokopedia", value: "tokopedia" },
            ]}
            onChange={handleChangeSearchField}
            value={csvType}
          />
        </div>
        <Button>Upload CSV</Button>
      </div>

      <CustomTable
        columns={columns}
        data={data}
        className="mt-4 mb-10 border-collapse border border-gray-200 shadow-lg"
        headerClassName="bg-gray-100 text-gray-700"
        bodyClassName="bg-white"
      />
      {paginationInfo.totalPages > 0 && (
        <CustomPagination
          currentPage={paginationInfo.page}
          totalPageCount={paginationInfo.totalPages}
          onPageChange={handlePageChange}
        />
      )}

      <CustomDialog
        open={openDialog}
        onOpenChange={() => {
          setOpenDialog(!openDialog);
        }}
        title="Manual Adjustment"
        content={
          <Form {...form}>
            <form
              className="flex flex-col w-full gap-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="font-semibold">NINTENDO-DS-64</div>
              <CustomFormField<StockVariantSchema>
                control={form.control}
                name="quantity"
                label="Quantity"
              >
                {(
                  field: ControllerRenderProps<StockVariantSchema, "quantity">
                ) => (
                  <Input
                    {...field}
                    type="number"
                    placeholder="Please Input"
                    disabled={form.formState.isSubmitting}
                    aria-disabled={form.formState.isSubmitting}
                  />
                )}
              </CustomFormField>

              <div className="flex justify-end gap-5 mt-5">
                <Button variant="outline">Back</Button>
                <Button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  aria-disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Loading..." : "Save"}
                </Button>
              </div>
            </form>
          </Form>
        }
      />
    </div>
  );
};

export default Index;
