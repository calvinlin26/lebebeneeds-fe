import React from "react";
import CustomTable from "mainApp/table";
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import useScrollIntoView from "../../../hooks/useScrollIntoView";
import PreviewImage from "../../../assets/otp-input.png";

const Index: React.FC = () => {
  useNavSideBar([
    { path: "/otp-input#preview", label: "Preview" },
    { path: "/otp-input#dependencies", label: "Dependencies" },
    { path: "/otp-input#usage", label: "Usage" },
    { path: "/otp-input#parameters", label: "Parameters" },
  ]);
  useScrollIntoView();

  const propsData = [
    {
      key: "onCompleted",
      typeFormat: "Function(String?)",
      mandatory: "Yes",
      description: "What to do after input complete",
      sampleValues: "(pin) { DebugPrint(pin); }",
    },
    {
      key: "focusedBorderColor",
      typeFormat: "Color",
      mandatory: "No",
      description: "Border color",
      sampleValues: "",
    },
    {
      key: "fillColor",
      typeFormat: "Color",
      mandatory: "No",
      description: "Box color when filled",
      sampleValues: "",
    },
    {
      key: "errorColor",
      typeFormat: "Color",
      mandatory: "No",
      description: "Border color when validated",
      sampleValues: "",
    },
    {
      key: "keyboardType",
      typeFormat: "TextInputType",
      mandatory: "No",
      description: "Input control options",
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
          OTP Input
        </h1>
        <p className="text-base text-muted-foreground">
          <span className="inline-block align-top [text-decoration:inherit] max-w-[538px]">
            A customizable OTP input field for Flutter applications. This
            component allows you to input OTP with a maximum of 6 digits.
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
          code={`/ui_kit/shared/shared_otp_input.dart
/presentation/screen`}
          language="js"
        />
        <h5 className="scroll-m-20 text-xl font-bold tracking-tight">
          Additional libraries
        </h5>
        <CodeBlocks
          code={`Pinput (https://pub.dev/packages/pinput)`}
          language="js"
        />
      </div>
      <br />
      <div className="space-y-2" id="#dependencies">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Dependencies
        </h3>
        <hr />
        <CodeBlocks
          code={`dependencies:
  pinput: ^[latest]`}
          language="js"
        />
      </div>
      <br />
      <div className="space-y-2" id="#usage">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">Usage</h3>
        <hr />
        <CodeBlocks
          code={`SharedOtpInput(
  onCompleted: (pin) {
    debugPrint(pin);
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
