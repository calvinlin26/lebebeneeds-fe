import { CustomTabs } from "mainApp/tabs";
import { CustomFooter } from "mainApp/footer";
import CodeBlocks from "../../../components/codeBLock";

function CustomBottomLeftRight() {
  const previewCode = `

const footerDataWithCenterBottom = {
        leftColumns: [
          {
            title: "About Us",
            items: [
              { content: <p className="w-50">Indivara Group is one of the largest IT company in Indonesia and South East Asia region which focuses on consulting, software development and platform businesses.</p> },
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
        bottomColumns: [
            {
              items: [
                { content: <p className="font-normal text-xs">This template is made with by Showcase.</p> },
              ],
             },
             { items: [
                { content: <p className="font-normal text-xs">This template is made with by Showcase.</p> },
              ],
            },
          ],
    };

<CustomFooter 
    leftColumns={footerDataWithCenterBottom.leftColumns} 
    rightColumns={footerDataWithCenterBottom.rightColumns} 
    bottomColumns={footerDataWithCenterBottom.bottomColumns} 
    bottomColumnLayout="center"
    dividerColor="gray-100"
/>
`;

  const footerDataWithCenterBottom = {
    leftColumns: [
      {
        title: "About Us",
        items: [
          {
            content: (
              <p className="w-50">
                Indivara Group is one of the largest IT company in Indonesia and
                South East Asia region which focuses on consulting, software
                development and platform businesses.
              </p>
            ),
          },
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
          {
            content: (
              <p className="w-72">
                Kirana Boutique Office Blok G3 JL. Kirana Avenue No 1-2 Kelapa
                Gading, 14240 Jakarta, Indonesia
              </p>
            ),
          },
        ],
      },
    ],
    bottomColumns: [
      {
        items: [
          {
            content: (
              <p className="font-normal text-xs">
                This template is made with by Showcase.
              </p>
            ),
          },
        ],
      },
      {
        items: [
          {
            content: (
              <p className="font-normal text-xs">
                This template is made with by Showcase.
              </p>
            ),
          },
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
            leftColumns={footerDataWithCenterBottom.leftColumns}
            rightColumns={footerDataWithCenterBottom.rightColumns}
            bottomColumns={footerDataWithCenterBottom.bottomColumns}
            bottomColumnLayout="left-right"
            dividerColor="gray-100"
          />
        </div>
      ),
    },
    {
      trigger: <span>Code</span>,
      value: "code",
      content: <CodeBlocks code={previewCode} language="js" />,
    },
  ];

  return (
    <>
      <CustomTabs
        tabs={tabs}
        onValueChange={() => console.log("Tab changed")}
      />
    </>
  );
}

export default CustomBottomLeftRight;
