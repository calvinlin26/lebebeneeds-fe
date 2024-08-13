import React from "react";
import CustomTable from "mainApp/table";
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import useScrollIntoView from "../../../hooks/useScrollIntoView";
import PreviewImage from "../../../assets/app-bar.png";

const Index: React.FC = () => {
  useNavSideBar([
    { path: "/app-bar#preview", label: "Preview" },
    { path: "/app-bar#usage", label: "Usage" },
    { path: "/app-bar#parameters", label: "Parameters" },
  ]);
  useScrollIntoView();

  const propsData = [
    {
      key: "title",
      typeFormat: "String",
      mandatory: "Yes",
      description: "To change the title of the page",
      sampleValues: "SharedAppBar",
    },
    {
      key: "actions",
      typeFormat: "List<Widget>",
      mandatory: "No",
      description:
        "Widgets that will be rendered at the bottom-right of the appbar",
      sampleValues: "",
    },
    {
      key: "centerTitle",
      typeFormat: "Boolean",
      mandatory: "No",
      description: "To make the title at the center or at the left side",
      sampleValues: "",
    },
    {
      key: "textStyle",
      typeFormat: "TextStyle",
      mandatory: "No",
      description: "To apply styling to a text",
      sampleValues: "",
    },
    {
      key: "onPressedBackButton",
      typeFormat: "VoidCallback",
      mandatory: "No",
      description: "To define an action upon back button press",
      sampleValues: "",
    },
    {
      key: "icon",
      typeFormat: "Icon",
      mandatory: "No",
      description: "To change the back icon",
      sampleValues: "",
    },
    {
      key: "iconBackButtonSize",
      typeFormat: "double",
      mandatory: "No",
      description: "To change the icon size",
      sampleValues: "",
    },
    {
      key: "backgroundColor",
      typeFormat: "Color",
      mandatory: "No",
      description: "To change the background color of the app bar",
      sampleValues: "",
    },
    {
      key: "iconBackButtonColor",
      typeFormat: "Color",
      mandatory: "No",
      description: "To change the color of the back button icon",
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
      accessor: "typeFormat",
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
          App Bar
        </h1>
        <p className="text-base text-muted-foreground">
          <span className="inline-block align-top [text-decoration:inherit] max-w-[538px]">
            The App Bar component is a container for items such as the
            application title, navigation controls, and other interactive
            elements.
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
          <img src={PreviewImage} />
        </div>
        <h5 className="scroll-m-20 text-xl font-bold tracking-tight">Files</h5>
        <CodeBlocks
          code={`/ui_kit/shared/base_appbar.dart
/presentation/screen`}
          language="js"
        />
      </div>
      <br />
      <div className="space-y-2" id="#usage">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">Usage</h3>
        <hr />
        <CodeBlocks
          code={`SharedAppBar(
  title: 'SharedAppBar',
    onPressedBackButton: () {
    Get.back();
  },
)`}
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
