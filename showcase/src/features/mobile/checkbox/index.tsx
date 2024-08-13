import React from "react";
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import useScrollIntoView from "../../../hooks/useScrollIntoView";
import PreviewImage1 from "../../../assets/checkbox1.png";
import PreviewImage2 from "../../../assets/checkbox2.png";

const Index: React.FC = () => {
  useNavSideBar([
    { path: "/checkboxmobile#preview", label: "Preview" },
    { path: "/checkboxmobile#usage", label: "Usage" },
  ]);
  useScrollIntoView();

  return (
    <div>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
          Checkbox
        </h1>
        <p className="text-base text-muted-foreground">
          <span className="inline-block align-top [text-decoration:inherit] max-w-[538px]">
          This component utilizes the built-in Checkbox and CheckboxListTile classes from Flutter's Material library, enabling easy integration of checkable options within your application.
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
          code={`none`}
          language="js"
        />
        <h5 className="scroll-m-20 text-xl font-bold tracking-tight">
          Documentation
        </h5>
        <CodeBlocks
          code={`https://api.flutter.dev/flutter/material/Checkbox-class.html
https://api.flutter.dev/flutter/material/CheckboxListTile-class.html`}
          language="js"
        />
      </div>
      <br />
      <div className="space-y-2" id="#usage">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">Usage</h3>
        <hr />
        <CodeBlocks
          code={`Obx(
() => Checkbox(
   value: controller.allValue.value,
   onChanged: controller.onCheckAllChanged,             
    ),
)
Obx(
  () => Sizebox(
    width: 45.w,
    child: CheckboxListTile(
        value: controller.allValue.value,
        title: Text(
            "Check All",
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: Montserrat.px14.regular(),
            ),
          onChanged: controller.onCheckAllChanged,
        ),
    ),
)
            `}
          language="js"
        />
      </div>
    </div>
  );
};

export default Index;
