import React from "react";
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import useScrollIntoView from "../../../hooks/useScrollIntoView";
import PreviewImage from "../../../assets/tab-bar.png";
import CustomTable from "mainApp/table";

const Index: React.FC = () => {
  useNavSideBar([
    { path: "/tab-bar#preview", label: "Preview" },
    { path: "/tab-bar#usage", label: "Usage" },
    { path: "/tab-bar#parameters", label: "Parameters" },
  ]);
  useScrollIntoView();

  const propsData = [
    {
      key: "tabs",
      type: "List<Tab>",
      mandatory: "Yes",
      description: "List of Tab",
      sampleValues: `[Tab(text: 'Tab 1', icon: Icon( Icons.ac_unit ),),
Tab(text: 'Tab 2'),]`,
    },
    {
      key: "tabViews",
      type: "List<Widget>",
      mandatory: "Yes",
      description: "A page view that displays the widget which corresponds to the currently selected tab",
      sampleValues: `[Container(color: Colors.red,child: const Center( child: Text('Tab 1'),),),
Container( color: Colors.blue, child: const Center( child: Text('Tab 2'),),),]
`,
    },
    {
      key: "tabBarColor",
      type: "Color",
      mandatory: "No",
      description: "EChange tab background color",
      sampleValues: "",
    },
    {
      key: "indicatorColor",
      type: "Color",
      mandatory: "No",
      description: "Change current tab indicator color",
      sampleValues: "",
    },
    {
      key: "labelColor",
      type: "Color",
      mandatory: "No",
      description: "Change current tab text color",
      sampleValues: "",
    },
    {
      key: "unselectedLabelColor",
      type: "Color",
      mandatory: "No",
      description: "Change other tab text color",
      sampleValues: "",
    },
    {
      key: "dividerColor",
      type: "Color",
      mandatory: "No",
      description: "Change divider color between tab and tab page",
      sampleValues: "",
    },
    {
      key: "tabBarViewPhysics",
      type: "ScrollPhysics",
      mandatory: "No",
      description: "Enum to determine Tabbar’s scrolling physics",
      sampleValues: "",
    },
    {
      key: "isScrollable",
      type: "boolean",
      mandatory: "No",
      description: "Set tab pages are scrollable",
      sampleValues: "",
    },
    {
      key: "indicatorDecoration",
      type: "Decoration",
      mandatory: "No",
      description: "Switch normal indicator, with decoration applied to text, or tab",
      sampleValues: "",
    },
    {
      key: "padding",
      type: "EdgeInsetsGeometry",
      mandatory: "No",
      description: "The amount of space by which to inset the tab bar.",
      sampleValues: "",
    },
    {
      key: "indicatorSize",
      type: "TabBarIndicatorSize",
      mandatory: "No",
      description: "Enum to change indicator tab bound",
      sampleValues: "",
    },
    {
        key: "dividerHeight",
        type: "double",
        mandatory: "No",
        description: "Height of divider",
        sampleValues: "",
      },
      {
        key: "labelStyle",
        type: "TextStyle",
        mandatory: "No",
        description: "Text style of selected label",
        sampleValues: "",
      },
      {
        key: "unselectedLabelStyle",
        type: "TextStyle",
        mandatory: "No",
        description: "Text style of unselected label",
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
          Tab Bar
        </h1>
        <p className="text-base text-muted-foreground">
          <span className="inline-block align-top [text-decoration:inherit] max-w-[538px]">
          This component provides a customizable tab bar with options to control its appearance and behavior.
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
          code={`/ui_kit/shared/shared_tabbar.dart
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
          code={`SharedTabbar(
    tabs: const [
        tab(
          text: 'Tab 1',
          icon: Icon(Icon.ac_unit),
        ),
        Tab(text: 'Tab 2'),
    ],
    TabView: [
            Container(
              color: Colors.red
              child: const Center(
                child: Text('Tab 1'),
              ),
             ),
            Container(
              color: Colors.blue
              child: const Center(
                child: Text('Tab 2'),
              ),
             ),
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
