import React from "react";
import CustomTable from "mainApp/table";
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import useScrollIntoView from "../../../hooks/useScrollIntoView";
import PreviewImage1 from "../../../assets/carousal-1.png";
import PreviewImage2 from "../../../assets/carousal-2.png";

const Index: React.FC = () => {
  useNavSideBar([
    { path: "/carousel#preview", label: "Preview" },
    { path: "/carousel#dependencies", label: "Dependencies" },
    { path: "/carousel#usage", label: "Usage" },
    { path: "/carousel#parameters", label: "Parameters" },
  ]);
  useScrollIntoView();

  const propsData = [
    {
      key: "items",
      type: "List<Widget>",
      mandatory: "Yes",
      description: "List Item to be played in carousel",
      sampleValues: "[Container]",
    },
    {
      key: "autoPlay",
      type: "boolean",
      mandatory: "No",
      description: "Autoplay option in carousel",
      sampleValues: "true",
    },
    {
      key: "pageSnapping",
      type: "boolean",
      mandatory: "No",
      description: "Page snapping effect option in carousel",
      sampleValues: "true",
    },
    {
      key: "autoPlayInterval",
      type: "Duration",
      mandatory: "No",
      description: "Interval on each item if autoplay is true",
      sampleValues: "Duration(seconds: 3)",
    },
    {
      key: "viewportFraction",
      type: "double",
      mandatory: "No",
      description: "Fraction of carousel to occupy (0.0-1.0)",
      sampleValues: "0.8",
    },
    {
      key: "aspectRatio",
      type: "double",
      mandatory: "No",
      description: "Aspect ratio on carousel items",
      sampleValues: "1.5",
    },
    {
      key: "Initial page",
      type: "int",
      mandatory: "No",
      description: "First index of list to be shown on initial carousel render",
      sampleValues: "0",
    },
    {
      key: "scrollDirection",
      type: "Axis enum",
      mandatory: "No",
      description: "Determine whether a carousel is vertical or horizontal",
      sampleValues: "Axis.horizontal",
    },
    {
      key: "autoPlayCurve",
      type: "Curve enum",
      mandatory: "No",
      description: "Determines the animation curve physics",
      sampleValues: "Curves.easeInOut",
    },
    {
      key: "enlargeStrategy",
      type: "CenterPageEnlargeStrategy enum",
      mandatory: "No",
      description: "Determine which method to enlarge the center page",
      sampleValues: "CenterPageEnlargeStrategy.scale",
    },
    {
      key: "onPageChanged",
      type: "Function(int, CarouselPageChangedReason)",
      mandatory: "No",
      description: "Determine what to do when carousel slides",
      sampleValues: "(index, reason) { print('Page changed: $index'); }",
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
          Carousel
        </h1>
        <p className="text-base text-muted-foreground">
          <span className="inline-block align-top [text-decoration:inherit] max-w-[538px]">
            Carousel is a widget that can be used to display a list of items in
            a carousel view.
          </span>
        </p>
      </div>
      <br />
      <div className="space-y-2" id="#preview">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Preview
        </h3>
        <hr />
        <div className="flex justify-around w-full border h-[400px] rounded-sm flex items-center justify-center">
          <img className="w-2/5" src={PreviewImage1} />
          <img className="w-2/5" src={PreviewImage2} />
        </div>
        <h5 className="scroll-m-20 text-xl font-bold tracking-tight">Files</h5>
        <CodeBlocks
          code={`/ui_kit/shared/shared_carousel.dart
/presentation/screen`}
          language="js"
        />
        <h5 className="scroll-m-20 text-xl font-bold tracking-tight">
          Additional libraries
        </h5>
        <CodeBlocks
          code={`carousel_slider (https://pub.dev/packages/carousel_slider)`}
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
  carousel_slider: ^[latest]`}
          language="js"
        />
      </div>
      <br />
      <div className="space-y-2" id="#usage">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">Usage</h3>
        <hr />
        <CodeBlocks
          code={`SharedCarousel(
  items: controller.items,
  autoPlay: true,
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
