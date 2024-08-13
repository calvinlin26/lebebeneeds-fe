import React from "react";
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import useScrollIntoView from "../../../hooks/useScrollIntoView";
import PreviewImage1 from "../../../assets/lazy-load1.png";
import PreviewImage2 from "../../../assets/lazy-load2.png";
import CustomTable from "mainApp/table";

const Index: React.FC = () => {
  useNavSideBar([
    { path: "/lazy-load#preview", label: "Preview" },
    { path: "/lazy-load#usage", label: "Usage" },
    { path: "/lazy-load#parameters", label: "Parameters" },
  ]);
  useScrollIntoView();

  const propsData = [
    {
      key: "child",
      type: "Widget",
      mandatory: "Yes",
      description: "ScrollView widget",
      sampleValues: "ListView()",
    },
    {
      key: "onEndOfPage",
      type: "void Function()",
      mandatory: "Yes",
      description: "Callback when max scroll extent reached",
      sampleValues: `() {
DebugPrint(“reached”);
}`,
    },
    {
      key: "scrollOffset",
      type: "int",
      mandatory: "No",
      description: "Offset to run callback when scroll physic bouncedback",
      sampleValues: "",
    },
    {
      key: "scrollDirection",
      type: "Axis",
      mandatory: "No",
      description: "Enum to change scroll direction",
      sampleValues: "",
    },
    {
      key: "isLoading",
      type: "bool",
      mandatory: "No",
      description: "Reactive variable from parent to run callback when (false)",
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
          Lazy Load
        </h1>
        <p className="text-base text-muted-foreground">
          <span className="inline-block align-top [text-decoration:inherit] max-w-[538px]">
          This component provides a mechanism to load additional content when the user scrolls to the end of a list or other scrollable widget.
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
          <img className="w-2/5" src={PreviewImage1} />
          <img className="w-2/5" src={PreviewImage2} />
        </div>
        <h5 className="scroll-m-20 text-xl font-bold tracking-tight">Files</h5>
        <CodeBlocks
          code={`/ui_kit/shared/lazyload.dart
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
          code={`LazyLoad(
    isLoading: state.isLoading,
    onEndOfPage: (){
        controller.addDatas();
    }
    child: ListView.seperated(
        itemCount: controller.listItem.length,
        shrinkWrap: true,
        padding: EdgeInsets.only(bottom: 1.h),
        physics: const BuncingScrollPhysics(),
        separatorBuilder: (context, index) {
            return const Divider(
                thickness: 1.5,
                color: Colors.black,
            );
        },
        itemBuilder: (context, index) {
            return Container(
                decoration: BoxDecoration(
                    color: AppColors.gradientLogo,
                    border: const Border.fromBorderSide(
                        BorderSide.none,
                    ),
                    borderRadius: BorderRadius.circular(12),
                ),
                alignment: Alignment.center,
                height: 10.w,
                width: double.maxFinite,
                child: Text(
                    controller,listItem[index],
                    maxLines: 1,
                    overFlow: TextOverflow.ellipsis,
                    style: Montserrat.px12.regular(),
                )
            )
        }
    )         
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
