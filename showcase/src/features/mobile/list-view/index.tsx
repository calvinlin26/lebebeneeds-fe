import React from "react";
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import useScrollIntoView from "../../../hooks/useScrollIntoView";
import PreviewImage from "../../../assets/list-view.png";
import CustomTable from "mainApp/table";

const Index: React.FC = () => {
  useNavSideBar([
    { path: "/list-view#preview", label: "Preview" },
    { path: "/list-view#usage", label: "Usage" },
    { path: "/list-view#parameters", label: "Parameters" },
  ]);
  useScrollIntoView();

  const propsData = [
    {
      key: "controller",
      type: "ScrollController",
      mandatory: "No",
      description: "Controls scrollable widget",
      sampleValues: "",
    },
    {
      key: "children",
      type: "List<Widget>",
      mandatory: "No",
      description: "List of widgets inside listview",
      sampleValues: "",
    },
    {
      key: "scrollDirection",
      type: "Axis",
      mandatory: "No",
      description: "Enum to change listview direction",
      sampleValues: "",
    },
    {
      key: "clipBehavior",
      type: "Clip",
      mandatory: "No",
      description: "Enum to clip overflown widgets",
      sampleValues: "",
    },
    {
      key: "physics",
      type: "ScrollPhysics",
      mandatory: "No",
      description: "Enum to determine Listview’s scrolling physics",
      sampleValues: "",
    },
    {
      key: "keyboardDismissBehavior",
      type: "ScrollViewKeyboardDismissBehavior",
      mandatory: "No",
      description: "Enum to represent of how listview should dismiss the on-screen keyboard",
      sampleValues: "",
    },
    {
      key: "dragStartBehavior",
      type: "DragStartBehavio",
      mandatory: "No",
      description: "Enum to determine the way that drag start behavior is handled",
      sampleValues: "",
    },
    {
      key: "itemExtentBuilder",
      type: "double? Function(int index, SliverLayoutDimensions dimensions)",
      mandatory: "No",
      description: "Called to get the item extent by the index of item",
      sampleValues: "",
    },
    {
      key: "prototypeItem",
      type: "Widget",
      mandatory: "No",
      description: "Forces the children to have the same extent as the given widget",
      sampleValues: "",
    },
    {
      key: "padding",
      type: "EdgeInsetsGeometry",
      mandatory: "No",
      description: "The amount of space by which to inset the children",
      sampleValues: "",
    },
    {
      key: "addAutomaticKeepAlives",
      type: "bool",
      mandatory: "No",
      description: "Allows children’s state to be kept alive (unchanged) in lazy lists",
      sampleValues: "",
    },
    {
      key: "addRepaintBoundaries",
      type: "bool",
      mandatory: "No",
      description: "Creates a widget that isolates repaints.",
      sampleValues: "",
    },
    {
        key: "addSemanticIndexes",
        type: "bool",
        mandatory: "No",
        description: "Annotates children with index identifier",
        sampleValues: "",
      },
      {
        key: "shrinkWrap",
        type: "bool",
        mandatory: "No",
        description: "Shrink to minimum based on children",
        sampleValues: "",
      },
      {
        key: "reverse",
        type: "bool",
        mandatory: "No",
        description: "Reverse children entries",
        sampleValues: "",
      },
      {
        key: "primary",
        type: "bool",
        mandatory: "No",
        description: "Scrollable even if it doesn’t have sufficient content",
        sampleValues: "",
      },
      {
        key: "cacheExtent",
        type: "double",
        mandatory: "No",
        description: "Visible viewport area to cache items that are about to become visible when the user scrolls",
        sampleValues: "",
      },
      {
        key: "itemExtent",
        type: "double",
        mandatory: "No",
        description: "Forces the children to have the given extent in the scroll direction",
        sampleValues: "",
      },
      {
        key: "restorationId",
        type: "String",
        mandatory: "No",
        description: "ID to save and restore the scroll offset of the scrollable",
        sampleValues: "",
      },
      {
        key: "semanticChildCount",
        type: "int",
        mandatory: "No",
        description: "number of children that will contribute",
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
          List View
        </h1>
        <p className="text-base text-muted-foreground">
          <span className="inline-block align-top [text-decoration:inherit] max-w-[538px]">
          This component provides a scrollable list of widgets with extensive customization options to control its behavior and appearance.
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
          code={`/presentation/screen - available in sdk`}
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
          code={`ListView(
    ShrinkWrap: true
    children: [
            Container(
             Decoration: const BoxDecoration(
                color: Colors.white,
                border: Border.formBorderSide(
                  BorderSide.none,
                ),
                ),
             Alignment: Alignment.centerLeft,
             width: double.maxFinite,
             height: 6.w,
             child: Text(
                'child 1',
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
                style: Monsterrat.px11.regular(),
             )
            )
    ]            
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
