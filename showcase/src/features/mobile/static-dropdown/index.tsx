import React from "react";
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import useScrollIntoView from "../../../hooks/useScrollIntoView";
import PreviewImage1 from "../../../assets/static-dropdown1.png";
import PreviewImage2 from "../../../assets/static-dropdown2.png";
import CustomTable from "mainApp/table";

const Index: React.FC = () => {
  useNavSideBar([
    { path: "/static-dropdown#preview", label: "Preview" },
    { path: "/static-dropdown#usage", label: "Usage" },
    { path: "/static-dropdown#parameters", label: "Parameters" },
  ]);
  useScrollIntoView();

  const propsData = [
    {
      key: "titleDropdown",
      type: "String",
      mandatory: "Yes",
      description: "Hint text shown before dropdown open",
      sampleValues: "“Dropdown”",
    },
    {
      key: "onChangedDropdown",
      type: "void Function(DropdownOption?)",
      mandatory: "Yes",
      description: "What to do after item picked",
      sampleValues: `(val) { debugPrint(val?.value); 
}
`,
    },
    {
      key: "dropdownItems",
      type: "List<DropdownOption>",
      mandatory: "Yes",
      description: "List of options",
      sampleValues: `[DropdownOption(value: "martabak"),
DropdownOption(value: "nasi goreng"),
DropdownOption(value: "soto"),]
`,
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
          API Dropdown
        </h1>
        <p className="text-base text-muted-foreground">
          <span className="inline-block align-top [text-decoration:inherit] max-w-[538px]">
          This component provides a dropdown with static options and allows customization of its behavior and appearance.
          </span>
        </p>
      </div>
      <br />
      <div className="space-y-2" id="#preview">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Preview
        </h3>
        <hr />
        <div className="flex justify-around w-full border h-[400px] rounded-sm items-center">
          <img className="w-1/5" src={PreviewImage1} />
          <img className="w-1/5" src={PreviewImage2} />
        </div>
        <h5 className="scroll-m-20 text-xl font-bold tracking-tight">Files</h5>
        <CodeBlocks
          code={`/domain/entity/mandatories/dropdown_option.dart
/ui_kit/shared/shared_static_dropdown.dart
/presentation/screen
            `}
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
          code={`SharedStaticDropdown(
    dropdownItems: const [
        DropdownOption(value: "martabaka"),
        DropdownOption(value: "nasi goreng"),
        DropdownOption(value: "soto"),
    ],
    titleDropdown: "pilih menu",
    onChangedDropdown: (val) {
        debugPrint(val?.value);
    },
)
            `}
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
