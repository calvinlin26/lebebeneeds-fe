import React from "react";
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import useScrollIntoView from "../../../hooks/useScrollIntoView";
import PreviewImage from "../../../assets/base-button.png";
import CustomTable from "mainApp/table";

const Index: React.FC = () => {
  useNavSideBar([
    { path: "/base-button#preview", label: "Preview" },
    { path: "/base-button#dependencies", label: "Dependencies" },
    { path: "/base-button#usage", label: "Usage" },
    { path: "/base-button#parameters", label: "Parameters" },
  ]);
  useScrollIntoView();

  const propsData = [
    {
      key: "title",
      type: "String",
      mandatory: "Yes",
      description: "Button title",
      sampleValues: "Login",
    },
    {
      key: "onPressed",
      type: "Function()",
      mandatory: "Yes",
      description: "What to do when button pressed",
      sampleValues: `() {
DebugPrint(“Pressed");
}
`,
    },
    {
      key: "color",
      type: "Color",
      mandatory: "Yes",
      description: "Primary color",
      sampleValues: "Colors.blue",
    },
    {
      key: "borderColor",
      type: "Color",
      mandatory: "Yes",
      description: "Border Color",
      sampleValues: "Colors.blue",
    },
    {
      key: "textColor",
      type: "Color",
      mandatory: "Yes",
      description: "Text Color",
      sampleValues: "Colors.white",
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
      key: "height",
      type: "double",
      mandatory: "No",
      description: "Button height",
      sampleValues: "",
    },
    {
      key: "paddingVertical",
      type: "double",
      mandatory: "No",
      description: "Internal vertical padding to button’s child",
      sampleValues: "",
    },
    {
      key: "paddingHorizontal",
      type: "double",
      mandatory: "No",
      description: "Internal horizontal padding to button’s child",
      sampleValues: "",
    },
    {
      key: "width",
      type: "double",
      mandatory: "No",
      description: "Button width",
      sampleValues: "",
    },
    {
      key: "elevation",
      type: "double",
      mandatory: "No",
      description: "Change the size of the shadow below the raised button",
      sampleValues: "",
    },
    {
        key: "fontSize",
        type: "double",
        mandatory: "No",
        description: "Control button’s text size",
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
          Base Button
        </h1>
        <p className="text-base text-muted-foreground">
          <span className="inline-block align-top [text-decoration:inherit] max-w-[538px]">
          Customizable button with various properties to tailor its appearance and behavior. 
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
          code={`/ui_kit/shared/base_button.dart
/presentation/screen`}
          language="js"
        />
        <h5 className="scroll-m-20 text-xl font-bold tracking-tight">
          Additional libraries
        </h5>
        <CodeBlocks
          code={`Responsive Sizer (https://pub.dev/packages/responsive_sizer)`}
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
          code={`BaseButton(
            color: AppColor.mainColor,
            borderColor: AppColor.mainColor,
            textColor: Colors.white,
            title: "login",
            enabled: true,
            width: context.width,
            paddingHorizontal: 2.5.w,
            height: 5.5h,
            onPressed: () {
                Get.offAllNamed(ShowcaseMenuPage.name);
            }
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
