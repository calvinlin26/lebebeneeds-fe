import React from "react";
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import useScrollIntoView from "../../../hooks/useScrollIntoView";
import PreviewImage from "../../../assets/text-field.png";
import CustomTable from "mainApp/table";

const Index: React.FC = () => {
  useNavSideBar([
    { path: "/text-field#preview", label: "Preview" },
    { path: "/text-field#dependencies", label: "Dependencies" },
    { path: "/text-field#usage", label: "Usage" },
    { path: "/text-field#parameters", label: "Parameters" },
  ]);
  useScrollIntoView();

  const propsData = [
    {
      key: "controller",
      type: "TextEditingController",
      mandatory: "Yes",
      description: "Controls the textfield",
      sampleValues: "TextEditingController()",
    },
    {
      key: "inputFormatters",
      type: "List<TextInputFormatter>",
      mandatory: "No",
      description: "List of formatting rules for string input",
      sampleValues: ``,
    },
    {
      key: "floatingLabelBehavior",
      type: "FloatingLabelBehavior",
      mandatory: "No",
      description: "Enum to control floating label options",
      sampleValues: "",
    },
    {
      key: "inputType",
      type: "TextInputType",
      mandatory: "No",
      description: "Enum to control input behavior",
      sampleValues: "",
    },
    {
      key: "contentPadding",
      type: "EdgeInsetsGeometry",
      mandatory: "No",
      description: "Padding for the input decoration's containe",
      sampleValues: "",
    },
    {
      key: "borderRadius",
      type: "BorderRadiusGeometry",
      mandatory: "No",
      description: "To change button corner radius",
      sampleValues: "",
    },
    {
      key: "enabled",
      type: "boolean",
      mandatory: "No",
      description: "To change wether the button is clickable",
      sampleValues: "",
    },
    {
      key: "hintStyle",
      type: "TextStyle",
      mandatory: "No",
      description: "Control styling af hint text property",
      sampleValues: "",
    },
    {
      key: "errorStyle",
      type: "TextStyle",
      mandatory: "No",
      description: "Control styling af hint text property",
      sampleValues: "",
    },
    {
      key: "onTap",
      type: "Function",
      mandatory: "No",
      description: "What to do when textfield tapped",
      sampleValues: "",
    },
    {
      key: "onFocusChange",
      type: "Function(bool)",
      mandatory: "No",
      description: "What to do when textfield focus changed",
      sampleValues: "",
    },
    {
      key: "onSubmitted",
      type: "Function(String)",
      mandatory: "No",
      description: "What to do user finishes editing",
      sampleValues: "",
    },
    {
        key: "onTextChanged",
        type: "Function(String)",
        mandatory: "No",
        description: "What to do when textfield value changes",
        sampleValues: "",
    },
    {
        key: "validator",
        type: "String? Function(String?)",
        mandatory: "No",
        description: "Return string as validation text based on textfield’s value",
        sampleValues: "",
    },
    {
        key: "obscure",
        type: "bool",
        mandatory: "No",
        description: "To change wether text is obscure",
        sampleValues: "",
    },
    {
        key: "enable",
        type: "bool",
        mandatory: "No",
        description: "To change wether textfield is",
        sampleValues: "",
    },
    {
        key: "readonly",
        type: "bool",
        mandatory: "No",
        description: "To change wether textfield is read-only",
        sampleValues: "",
    },
    {
        key: "suffixIcon",
        type: "Widget",
        mandatory: "No",
        description: "Widget at the end and inside textfield",
        sampleValues: "",
    },
    {
        key: "leadingWidget",
        type: "Widget",
        mandatory: "No",
        description: "Widget decoration at left outside textfield",
        sampleValues: "",
    },
    {
        key: "trailingWidget",
        type: "Widget",
        mandatory: "No",
        description: "Widget decoration at right outside textfield",
        sampleValues: "",
    },
    {
        key: "height",
        type: "double",
        mandatory: "No",
        description: "Button height",
        sampleValues: "",
    },
    {
        key: "fillColor",
        type: "Color",
        mandatory: "No",
        description: "Color inside textfield ",
        sampleValues: "",
    },
    {
        key: "borderColor",
        type: "Color",
        mandatory: "No",
        description: "Textfield border color",
        sampleValues: "",
    },
    {
        key: "borderWidth",
        type: "double",
        mandatory: "No",
        description: "Change border’s thickness",
        sampleValues: "",
    },
    {
        key: "hint",
        type: "String",
        mandatory: "No",
        description: "Text to display as textfield’s hint",
        sampleValues: "",
    },
    {
        key: "errorText",
        type: "String",
        mandatory: "No",
        description: "Text to display as validator text, and prioritized over returned validator’s String value",
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
          Text Field
        </h1>
        <p className="text-base text-muted-foreground">
          <span className="inline-block align-top [text-decoration:inherit] max-w-[538px]">
          This component provides a highly customizable input field, allowing for a wide range of configurations to suit different UI requirements. 
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
          code={`/ui_kit/shared/base_input.dart
/presentation/screen`}
          language="js"
        />
        <h5 className="scroll-m-20 text-xl font-bold tracking-tight">
          Additional libraries
        </h5>
        <CodeBlocks
          code={`Responsive Sizer (https://pub.dev/packages/responsive_sizer)
Getx (https://pub.dev/packages/get)
            `}
          language="js"
        />
        <div className="space-y-2" id="#dependencies">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Dependencies
        </h3>
        <hr />
        <CodeBlocks
          code={`/pubspec.yaml:

dependencies:
  get: ^[latest]
  responsive_sizer: ^[latest]`}
          language="js"
        />
      </div>
      <br />
      </div>
      <div className="space-y-2" id="#usage">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">Usage</h3>
        <hr />
        <CodeBlocks
          code={`BaseInput(
controller: TextEditingController(),
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
      <br />
    </div>
  );
};

export default Index;
