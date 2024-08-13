import React from "react";
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import useScrollIntoView from "../../../hooks/useScrollIntoView";
import PreviewImage1 from "../../../assets/switch1.png";
import PreviewImage2 from "../../../assets/switch2.png";
import CustomTable from "mainApp/table";

const Index: React.FC = () => {
  useNavSideBar([
    { path: "/switch#preview", label: "Preview" },
    { path: "/switch#usage", label: "Usage" },
    { path: "/switch#parameters", label: "Parameters" },
  ]);
  useScrollIntoView();

  const propsData = [
    {
      key: "value",
      type: "boolean",
      mandatory: "Yes",
      description: "Determines if the switch is on or off",
      sampleValues: "controller.rxValue.value",
    },
    {
      key: "onToggle",
      type: "void Function(bool)",
      mandatory: "Yes",
      description: "Called when the user toggles the switch.",
      sampleValues: `(newVal) {
controller. rxValue.value = newVal;}
`,
    },
    {
      key: "disabled",
      type: "boolean",
      mandatory: "No",
      description: "Determines whether the switch is disabled.",
      sampleValues: "",
    },
    {
      key: "showOnOff",
      type: "boolean",
      mandatory: "No",
      description: `Displays an on or off text. (Text value can be override by the [activeText] and [inactiveText] properties.)`,
      sampleValues: "",
    },
    {
      key: "activeText",
      type: "String",
      mandatory: "No",
      description: "The text to display when the switch is on. (only necessary when [showOnOff] property is true.)",
      sampleValues: "",
    },
    {
      key: "inactiveText",
      type: "String",
      mandatory: "No",
      description: "The text to display when the switch is off. (only necessary when [showOnOff] property is true.)",
      sampleValues: "",
    },
    {
      key: "activeColor",
      type: "Color",
      mandatory: "No",
      description: "The color to use on the switch when the switch is on.",
      sampleValues: "",
    },
    {
      key: "inactiveColor",
      type: "Color",
      mandatory: "No",
      description: "The color to use on the switch when the switch is off.",
      sampleValues: "",
    },
    {
      key: "activeTextColor",
      type: "Color",
      mandatory: "No",
      description: "The color to use on the text value when the switch is on. (only necessary when [showOnOff] property is true)",
      sampleValues: "",
    },
    {
      key: "inactiveTextColor",
      type: "Color",
      mandatory: "No",
      description: "The color to use on the text value when the switch is off. (only necessary when [showOnOff] property is true)",
      sampleValues: "",
    },
    {
      key: "toggleColor",
      type: "Color",
      mandatory: "No",
      description: "The color to use on the toggle of the switch.",
      sampleValues: "",
    },
    {
      key: "activeToggleColor",
      type: "Color",
      mandatory: "No",
      description: "The color to use on the toggle of the switch when the given value is true (ignoring toggleColor)",
      sampleValues: "",
    },
    {
        key: "inactiveToggleColor",
        type: "Color",
        mandatory: "No",
        description: "The color to use on the toggle of the switch when the given value is false (ignoring toggleColor)",
        sampleValues: "",
      },
      {
        key: "activeTextFontWeight",
        type: "FontWeight",
        mandatory: "No",
        description: "The font weight to use on the text value when the switch is on.",
        sampleValues: "",
      },
      {
        key: "inactiveTextFontWeight",
        type: "FontWeight",
        mandatory: "No",
        description: "The font weight to use on the text value when the switch is off.",
        sampleValues: "",
      },
      {
        key: "width",
        type: "double",
        mandatory: "No",
        description: "width of the switch",
        sampleValues: "",
      },
      {
        key: "height",
        type: "double",
        mandatory: "No",
        description: "height of the switch",
        sampleValues: "",
      },
      {
        key: "toggleSize",
        type: "double",
        mandatory: "No",
        description: "The size of the toggle of the switch",
        sampleValues: "",
      },
      {
        key: "valueFontSize",
        type: "double",
        mandatory: "No",
        description: "The font size of the values of the switch",
        sampleValues: "",
      },
      {
        key: "borderRadius",
        type: "double",
        mandatory: "No",
        description: "The border radius of the switch.",
        sampleValues: "",
      },
      {
        key: "padding",
        type: "double",
        mandatory: "No",
        description: "The padding of the switch",
        sampleValues: "",
      },
      {
        key: "switchBorder",
        type: "BoxBorder",
        mandatory: "No",
        description: "The border of the switch",
        sampleValues: "",
      },
      {
        key: "activeSwitchBorder",
        type: "BoxBorder",
        mandatory: "No",
        description: "The border of the switch when the given value is true. (ignoring switchBorder)",
        sampleValues: "",
      },
      {
        key: "activeToggleBorder",
        type: "BoxBorder",
        mandatory: "No",
        description: "The border of the toggle when the given value is true. (ignoring toggleBorder)",
        sampleValues: "",
      },
      {
        key: "inactiveSwitchBorder",
        type: "BoxBorder",
        mandatory: "No",
        description: "The border of the switch when the given value is false. (ignoring switchBorder)",
        sampleValues: "",
      },
      {
        key: "toggleBorder",
        type: "BoxBorder",
        mandatory: "No",
        description: "The border of the toggle when the given value is true. (ignoring toggleBorder)",
        sampleValues: "",
      },
      {
        key: "inactiveToggleBorder",
        type: "BoxBorder",
        mandatory: "No",
        description: "The border of the toggle when the given value is false. (ignoring toggleBorder)",
        sampleValues: "",
      },
      {
        key: "activeIcon",
        type: "Widget",
        mandatory: "No",
        description: "The icon inside the toggle when the given value is true.",
        sampleValues: "",
      },
      {
        key: "inactiveIcon",
        type: "Widget",
        mandatory: "No",
        description: "The icon inside the toggle when the given value is false.",
        sampleValues: "",
      },
      {
        key: "duration",
        type: "Duration",
        mandatory: "No",
        description: "The duration in milliseconds to change the state of the switch",
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
          Switch
        </h1>
        <p className="text-base text-muted-foreground">
          <span className="inline-block align-top [text-decoration:inherit] max-w-[538px]">
          A customizable switch widget for Flutter applications. This component allows you to create a toggle switch with a wide range of styling and behavior options
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
          code={`/ui_kit/shared/shared_switch.dart
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
          code={`Obx(
    () => SharedSwitch(
        value: controller.allValue.value.
        onToogle: controller.onSwitchAllChanged,
    ),            
),
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
