import React from "react";
import CustomTable from "mainApp/table";
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import useScrollIntoView from "../../../hooks/useScrollIntoView";
import { CustomTabs } from "mainApp/tabs";
import { CustomFooter } from "mainApp/footer"
import CustomBottom from "./withBottomColumn";
import CustomBottomLeftRight from "./withBottomColumnLeftRight";

const Index: React.FC = () => {
  useNavSideBar([
    { path: "/footer#installation", label: "Installation" },
    { path: "/footer#usage", label: "Usage" },
    {
        path: "/footer#example",
        label: "Example",
        items: [
          { path: "/footer#example-customClose", label: "With bottom columns" },
        ],
    },
    { path: "/footer#props", label: "Props" },
  ]);
  useScrollIntoView()

  const importCode = `import { CustomFooter } from "mainApp/footer";
  `;
  const previewCode = `
const footerDataWithoutBottom = {
   leftColumns: [
     {
       title: "About Us",
       items: [
                { content: <p className="w-96">Indivara Group is one of the largest IT company in Indonesia and South East Asia region which focuses on consulting, software development and platform businesses.</p> },
       ],
     },
     {
       title: "Info",
       items: [
                { content: <a href="/faq">Faq</a> },
                { content: <a href="/policy">Policy</a> },
                { content: <a href="/status">Status</a> },
       ],
     },
     {
       title: "Getting Started",
       items: [
                { content: <a href="/introduction">Introduction</a> },
                { content: <a href="/usages">Usages</a> },
                { content: <a href="/documentation">Documentation</a> },
       ],
     },
   ],
   rightColumns: [
     {
       title: "Resources",
       items: [
                { content: <a href="/api">API</a> },
                { content: <a href="/accessbility">Accessbility</a> },
                { content: <a href="/community">Community</a> },
       ],
     },
     {
       title: "Contact Us",
       items: [
{                content: <p className="w-72">Kirana Boutique Office Blok G3 JL. Kirana Avenue No 1-2 Kelapa Gading, 14240 Jakarta, Indonesia</p> },
       ],
     },
   ],
 };

<CustomFooter
    leftColumns={footerDataWithoutBottom.leftColumns}
    rightColumns={footerDataWithoutBottom.rightColumns}
/>
`;

        const footerDataWithoutBottom = {
            leftColumns: [
              {
                title: "About Us",
                items: [
                  { content: <p className="w-96">Indivara Group is one of the largest IT company in Indonesia and South East Asia region which focuses on consulting, software development and platform businesses.</p> },
                ],
              },
              {
                title: "Info",
                items: [
                  { content: <a href="/faq">Faq</a> },
                  { content: <a href="/policy">Policy</a> },
                  { content: <a href="/status">Status</a> },
                ],
              },
              {
                title: "Getting Started",
                items: [
                  { content: <a href="/introduction">Introduction</a> },
                  { content: <a href="/usages">Usages</a> },
                  { content: <a href="/documentation">Documentation</a> },
                ],
              },
            ],
            rightColumns: [
              {
                title: "Resources",
                items: [
                  { content: <a href="/api">API</a> },
                  { content: <a href="/accessbility">Accessbility</a> },
                  { content: <a href="/community">Community</a> },
                ],
              },
              {
                title: "Contact Us",
                items: [
                  { content: <p className="w-72">Kirana Boutique Office Blok G3 JL. Kirana Avenue No 1-2 Kelapa Gading, 14240 Jakarta, Indonesia</p> },
                ],
              },
            ],
          };

    const tabs = [
        {
            trigger: <span>Preview</span>,
            value: "preview",
            content: (
                <div className="w-full border h-[400px] rounded-sm flex items-center justify-center">
                    <CustomFooter 
                      leftColumns={footerDataWithoutBottom.leftColumns}
                      rightColumns={footerDataWithoutBottom.rightColumns}
                    />
                </div>
            ),
        },
        {
            trigger: <span>Code</span>,
            value: "code",
            content: <CodeBlocks code={previewCode} language="js" />,
        }
    ]

    const propsData = [
        {
          name: "leftColumns",
          type: "[ ]",
          default: "undefined",
          description: "An array of objects defining the left columns for the footer.",
        },
        {
          name: "rightColumns",
          type: "[ ]",
          default: "undefined",
          description: "An array of objects defining the right columns for the footer.",
        },
        {
          name: "styleFooter",
          type: "string",
          default: "bg-gray-800 text-white",
          description: "Tailwind CSS classes for styling the footer.",
        },
        {
          name: "titleStyle",
          type: "string",
          default: "font-bold mb-2",
          description: "Tailwind CSS classes for styling the titles of the left and right columns.",
        },
        {
          name: "bottomColumns",
          type: "[ ]",
          default: "undefined",
          description: "An array of objects defining the additional bottom columns for the footer.",
        },
        {
          name: "bottomColumnLayout",
          type: "center | left-right",
          default: "center",
          description: "Layout for the bottom columns, either centered or split left and right.",
        },
        {
          name: "dividerColor",
          type: "string",
          default: "border-gray-400",
          description: "Tailwind CSS classes for the color of the divider if bottom columns are present.",
        },
      ];
      

  const columns = [
    {
      header: "Props Name",
      accessor: "name",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Type",
      accessor: "type",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Default",
      accessor: "default",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Description",
      accessor: "description",
      headerClassName: "text-left font-bold",
    },
  ];

  return (
    <div>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
          Footer
        </h1>
        <p className="text-base text-muted-foreground">
          <span className="inline-block align-top [text-decoration:inherit] max-w-[538px]">
            The Footer component is a customizable for React
            applications.
          </span>
        </p>
      </div>
      <br />
      <div className="space-y-2">
        <CustomTabs
          tabs={tabs}
          onValueChange={() => console.log("Tab changed")}
        />
      </div>
      <br />
      <div className="space-y-2" id="#installation">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Installation
        </h3>
        <hr />
        <CodeBlocks code={`npm i react-router-dom`} language="js" />
      </div>
      <br />
      <div className="space-y-2">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight" id="#usage">Usage</h3>
        <hr />
        <CodeBlocks code={importCode} language="js" />
        <br />
        <CodeBlocks code={previewCode} language="js" />
      </div>
      <br />
      <div className="space-y-2">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Example
        </h3>
        <hr />
        <CustomBottom />
        <br />
        <CustomBottomLeftRight />
        <br />
        <br />
      </div>
      <br />
      <div className="space-y-2" id="#props">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">Props</h3>
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
