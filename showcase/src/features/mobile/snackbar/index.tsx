import React from "react";
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import useScrollIntoView from "../../../hooks/useScrollIntoView";
import PreviewImage1 from "../../../assets/snackbar1.png";
import PreviewImage2 from "../../../assets/snackbar2.png";
import CustomTable from "mainApp/table";

const Index: React.FC = () => {
  useNavSideBar([
    { path: "/snackbar#preview", label: "Preview" },
    { path: "/snackbar#usage", label: "Usage" },
    { path: "/snackbar#parameters", label: "Parameters" },
  ]);
  useScrollIntoView();

  const propsDataBottomSnackBar = [
    {
      key: "snackBar",
      type: "Snackbar",
      mandatory: "Yes",
      description: "Detail of snackbar to be animated",
      sampleValues: `SnackBar( content: Text( "Hi!, I'm your bottom snacbar! ", maxLines: 1,   overflow: TextOverflow.ellipsis, ), backgroundColor: Colors.teal, behavior: SnackBarBehavior.floating, )`,
    },
    {
      key: "snackBarAnimationStyle",
      type: "AnimationStyle",
      mandatory: "Yes",
      description: "Animation Styling for snackbar",
      sampleValues: `[Container(color: Colors.red,child: const Center( child: Text('Tab 1'),),),
Container( color: Colors.blue, child: const Center( child: Text('Tab 2'),),),]
`,},
    ]
const propsDataTopSnackBar = [
    {
      key: "title",
      type: "Widget",
      mandatory: "Yes",
      description: "Snackbar’s content",
      sampleValues: `SnackBar( content: Text( "Hi!, I'm your top snacbar! ", maxLines: 1,   overflow: TextOverflow.ellipsis, ), backgroundColor: Colors.teal, behavior: SnackBarBehavior.floating, )`,
    },
    {
      key: "backgroundColor",
      type: "Color",
      mandatory: "No",
      description: "Snackbar’s background colo",
      sampleValues: "",
    },
    {
      key: "showOutAnimationDuration",
      type: "Duration",
      mandatory: "No",
      description: "How long should the animation moves into display",
      sampleValues: "",
    },
    {
      key: "hideOutAnimationDuration",
      type: "Duration",
      mandatory: "No",
      description: "How long should the animation moves out of display",
      sampleValues: "",
    },
    {
      key: "displayDuration",
      type: "Duration",
      mandatory: "No",
      description: "How long should the snackbar display",
      sampleValues: "",
    },
    {
      key: "leftPadding",
      type: "double",
      mandatory: "No",
      description: "Additional padding to left outside of snackbar",
      sampleValues: "",
    },
    {
      key: "rightPadding",
      type: "double",
      mandatory: "No",
      description: "Additional padding to right outside of snackbar",
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
          Snackbar
        </h1>
        <p className="text-base text-muted-foreground">
          <span className="inline-block align-top [text-decoration:inherit] max-w-[538px]">
          This component provides customizable bottom and top snackbars with various styling options and animations.
          </span>
        </p>
      </div>
      <br />
      <div className="space-y-2" id="#preview">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Preview
        </h3>
        <hr />
        <div className="w-full border rounded-sm items-center">
          <img className="h-[300px]" src={PreviewImage1} />
          <img className="h-[300px]" src={PreviewImage2} />
        </div>
        <h5 className="scroll-m-20 text-xl font-bold tracking-tight">Files</h5>
        <CodeBlocks
          code={`/util/extension/extension.dart
/util/extension/extensions/context_extension.dart
/ui_kit/shared/custom_snackbar/custom_snackbar.dart
/ui_kit/shared/custom_snackbar/components/tap_bounce_container.dart
/ui_kit/shared/custom_snackbar/components/top_snackbar.dart
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
          code={`onPressed:() {
    context.snackBar(
        SnackBar(
            content: Text(
            "Hi!, I'm your bottom snacbar! ",
            maxLines: 1,
            overflow: TextOverflow.elipsis,
            style: Montserrat.px14.regular(
                color: Colors.white,
            ),
            ),
            backgroundColor: Colors.teal,
            behavior: SnackBarBehavior.floating,
        ),
    );
}
            `}
          language="js"
        />
        <CodeBlocks
          code={`onPressed:() {
    context.topSnackBar(
        Text(
            content: Text(
            "Hi!, I'm your Top snacbar! ",
            maxLines: 1,
            overflow: TextOverflow.elipsis,
            style: Montserrat.px14.regular(
                color: Colors.white,
            ),
            ),
            backgroundColor: Colors.orange,
        ),
    );
}
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
        <h5 className="scroll-m-20 text-xl font-bold tracking-tight">
          Top Snackbar
        </h5>
        <CustomTable
          columns={columns}
          data={propsDataTopSnackBar}
          className="mt-4 border-collapse border border-gray-200 shadow-lg"
          headerClassName="bg-gray-100 text-gray-700"
          bodyClassName="bg-white"
        />
         <h5 className="scroll-m-20 text-xl font-bold tracking-tight">
          Bottom Snackbar
        </h5>
        <CustomTable
          columns={columns}
          data={propsDataBottomSnackBar}
          className="mt-4 border-collapse border border-gray-200 shadow-lg"
          headerClassName="bg-gray-100 text-gray-700"
          bodyClassName="bg-white"
        />
      </div>
    </div>
  );
};

export default Index;
