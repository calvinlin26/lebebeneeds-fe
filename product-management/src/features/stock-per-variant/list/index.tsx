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
import { format } from "date-fns";
import { postAdjustByCsv, postStockAdjustment } from "../../../services";
import { toast } from "sonner";
import { useMarketPlaceData } from "../hooks/useMarketPlaceData";

// import { useNavigate } from "react-router-dom";

const Index: React.FC = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [searchField, setSearchField] = useState<string>("variantName");
  const [csvType, setCsvType] = useState<string>("TOKOPEDIA");
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [id, setId] = useState<string>("");
  const [uploadDialog, setUploadDialog] = useState<boolean>(false);
  const [csvFile, setCsvFile] = useState<File>();
  const [loading, setLoading] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<string>("");
  //   const navigate = useNavigate();

  //use custom hooks
  const { stockVariant, searchParam, setSearchParam, paginationInfo } =
    useStockVariantData();
  const { marketPlaceData } = useMarketPlaceData();

  const form = useForm<StockVariantSchema>({
    resolver: zodResolver(stockVariantSchema),
    defaultValues: {
      quantity: "",
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
      accessor: "modifiedDate",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Last Updated By",
      accessor: "modifiedBy",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Action",
      accessor: "action",
    },
  ];

  const data = stockVariant.map((item: Variant) => {
    return {
      ...item,
      modifiedDate: `${format(
        new Date(item.modifiedDate),
        "dd-MMM-yyyy HH:mm:ss"
      )}`,
      action: (
        <div className="flex flex-row gap-3">
          <Button
            onClick={() => {
              setId(item.variantId);
              setQuantity(item.quantity.toString());
              setOpenDialog((prev) => !prev);
            }}
          >
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

  const handleChangeCsvType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCsvType(e.target.value);
  };

  const handleSearch = () => {
    setSearchParam({
      ...searchParam,
      search: keyword,
      searchField: searchField,
    });
  };

  const onSubmit = async (data: StockVariantSchema) => {
    try {
      await postStockAdjustment({ ...data, variantId: id });

      toast.success(`Product has been updated`);
      setSearchParam({
        ...searchParam,
      });
      form.reset();
      setOpenDialog((prev) => !prev);
    } catch (error: any) {
      console.error(
        "Error submitting form:",
        error.response?.data || error.message
      );
      toast.error("Failed to save product. Please try again.");
    }
  };

  const handleUpload = async () => {
    if (csvFile) {
      setLoading((prev) => !prev);
      try {
        await postAdjustByCsv(csvFile, csvType);

        toast.success(`Product has been updated`);
        setSearchParam({
          ...searchParam,
        });
        setLoading((prev) => !prev);
        setUploadDialog((prev) => !prev);
      } catch (error: any) {
        setLoading((prev) => !prev);
        console.error(
          "Error submitting form:",
          error.response?.data || error.message
        );
        toast.error("Failed to save product. Please try again.");
      }
    }
  };

  const { handleSubmit } = form;

  useEffect(() => {
    if (quantity) {
      form.setValue("quantity", quantity);
    }
  }, [quantity, openDialog, form]);

  useEffect(() => {
    document
      .getElementById("stockVariant")
      ?.scrollIntoView({ behavior: "smooth" });
  }, [stockVariant]);

  return (
    <div className="flex flex-col" id="stockVariant">
      <h1 className="text-2xl font-bold">Stock Per-Variant</h1>
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
              { label: "Variant Name", value: "variantName" },
              { label: "Variant Code", value: "variantCode" },
            ]}
            onChange={handleChangeSearchField}
            value={searchField}
          />
          <Button onClick={handleSearch}>Search</Button>
        </div>
      </div>

      <div className="flex gap-x-4 items-center mt-5">
        <div className="w-64">
          <DropdownSelect
            placeholder={"Please Select"}
            data={marketPlaceData}
            onChange={handleChangeCsvType}
            value={csvType}
          />
        </div>
        <Button onClick={() => setUploadDialog((prev) => !prev)}>
          Upload CSV
        </Button>
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
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      if (Number(e.target.value) < 0) {
                        e.target.value = "0";
                      }
                      field.onChange(e);
                    }}
                  />
                )}
              </CustomFormField>

              <div className="flex justify-end gap-5 mt-5">
                <Button
                  variant="outline"
                  onClick={() => setOpenDialog((prev) => !prev)}
                >
                  Back
                </Button>
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

      <CustomDialog
        open={uploadDialog}
        onOpenChange={() => {
          setUploadDialog((prev) => !prev);
        }}
        title="CSV Upload"
        content={
          <div className="flex flex-col">
            <Input
              type="file"
              accept=".csv, .xlsx, .xls"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setCsvFile(e.target.files?.[0]);
              }}
            />

            <div className="flex justify-end gap-5 mt-5">
              <Button
                variant="outline"
                onClick={() => setUploadDialog((prev) => !prev)}
              >
                Back
              </Button>
              <Button
                type="submit"
                disabled={loading}
                aria-disabled={loading}
                onClick={handleUpload}
              >
                {loading ? "Loading..." : "Upload"}
              </Button>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Index;
