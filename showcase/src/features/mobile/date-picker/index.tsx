import React from "react";
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import useScrollIntoView from "../../../hooks/useScrollIntoView";
import PreviewImage from "../../../assets/date-picker.png";
import CustomTable from "mainApp/table";

const Index: React.FC = () => {
  useNavSideBar([
    { path: "/date-picker#preview", label: "Preview" },
    { path: "/date-picker#usage", label: "Usage" },
    { path: "/date-picker#parameters", label: "Parameters" },
  ]);
  useScrollIntoView();

  const propsData = [
    {
      key: "initialDate",
      type: "DateTime",
      mandatory: "No",
      description: "Initial selected date",
      sampleValues: "",
    },
    {
      key: "firstDate",
      type: "DateTime",
      mandatory: "No",
      description: "Earliest date allowed to be picked",
      sampleValues: "",
    },
    {
      key: "lastDate",
      type: "DateTime",
      mandatory: "No",
      description: "Last date allowed to be picked",
      sampleValues: "",
    },
    {
      key: "initialEntryMode",
      type: "Enum DatePickerEntryMode",
      mandatory: "No",
      description: "Change initial input mode (calendar / textfield)",
      sampleValues: "",
    },
    {
      key: "primaryColor",
      type: "Color",
      mandatory: "No",
      description: "To change selected date & button color",
      sampleValues: "",
    },
    {
      key: "onPrimaryColor",
      type: "Color",
      mandatory: "No",
      description: "To change primary decoratioin color",
      sampleValues: "",
    },
    {
      key: "onSurfaceColor",
      type: "Color",
      mandatory: "No",
      description: "To change dominant dates color",
      sampleValues: "",
    },
    {
      key: "selectableDayPredicate",
      type: "Bool Function(DateTime)",
      mandatory: "No",
      description: "To allow only specific dates for selections",
      sampleValues: "",
    },
    {
      key: "helpText",
      type: "String",
      mandatory: "No",
      description: "label displayed at the top of the dialog, or textfield suggestion",
      sampleValues: "",
    },
    {
      key: "cancelButtonText",
      type: "String",
      mandatory: "No",
      description: "label on the cancel button",
      sampleValues: "",
    },
    {
      key: "confirmButtonText",
      type: "String",
      mandatory: "No",
      description: "label on the OK button",
      sampleValues: "",
    },
    {
      key: "initialDatePickerMode",
      type: "Enum DatePickerMode",
      mandatory: "No",
      description: "To change wether to pick year first, or straight to date",
      sampleValues: "",
    },
  ];

  const columns = [
    {
      header: "Key",
      accessor: "key",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Type/Format",
      accessor: "type",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Mandatory",
      accessor: "mandatory",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Description",
      accessor: "description",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Sample Values",
      accessor: "sampleValues",
      headerClassName: "text-left font-bold",
    },
  ];

  return (
    <div>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
          Date Picker
        </h1>
        <p className="text-base text-muted-foreground">
          <span className="inline-block align-top [text-decoration:inherit] max-w-[538px]">
          This component allows you to select a date within a specified range, with various customization options for colors, labels, and date selection behavior. 
          </span>
        </p>
      </div>
      <br />
      <div className="space-y-2" id="#preview">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Preview
        </h3>
        <hr />
        <div className="w-full border h-[400px] rounded-sm flex items-center justify-center">
          <img className="h-[300px]" src={PreviewImage} />
        </div>
        <h5 className="scroll-m-20 text-xl font-bold tracking-tight">Files</h5>
        <CodeBlocks
          code={`/util/extension/extensions/context_extension.dart
/presentation/screen`}
          language="js"
        />
        <h5 className="scroll-m-20 text-xl font-bold tracking-tight">
          Additional libraries
        </h5>
        <CodeBlocks
          code={`None`}
          language="js"
        />
      </div>
      <br />
      <div className="space-y-2" id="#usage">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">Usage</h3>
        <hr />
        <CodeBlocks
          code={`BaseButton.primary(
            title:'Show Date Picker Calender',
            onPressed: () async {
                DateTime? date = await context.sharedDatePicker();
                if (date !== null){
                    controller.selectedDate.value = date;
                }
            }
            )
        }`}
          language="js"
        />
      </div>
      <br />
      <div className="space-y-2">
        <h3
          className="scroll-m-20 text-2xl font-bold tracking-tight"
          id="#parameters"
        >
          Parameters
        </h3>
        <hr />
        <CustomTable
          columns={columns}
          data={propsData}
          className="mt-4 border-collapse border border-gray-200 shadow-lg"
          headerClassName="bg-gray-100 text-gray-700"
          bodyClassName="bg-white"
        />
      </div>
    </div>
  );
};

export default Index;
