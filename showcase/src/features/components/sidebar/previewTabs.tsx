import CodeBlocks from "../../../components/codeBLock";
import { CustomTabs } from "mainApp/tabs";
import Sidebar from "mainApp/sidebar";

function PreviewTabs() {
  const importCode = `import Sidebar from './Sidebar';
import { SidebarItemType } from './type';
    `;
  const previewCode = `
const items: SidebarItemType[] = [
  {
    path: '/home',
    label: 'Home',
  },
  {
    path: '/about',
    label: 'About',
    items: [
      {
        path: '/about/team',
        label: 'Team',
      },
      {
        path: '/about/company',
        label: 'Company',
      },
    ],
  },
];

const App = () => (
  <Sidebar
    header={<h1>My Sidebar</h1>}
    items={items}
    padding="p-4"
    borderRadius="rounded-md"
    shadow="shadow-lg"
  />
);

export default App;
  `;

  const items = [
    {
      path: "/home",
      label: "Home",
    },
    {
      path: "/about",
      label: "About",
      items: [
        {
          path: "/about/team",
          label: "Team",
        },
        {
          path: "/about/company",
          label: "Company",
        },
      ],
    },
  ];

  const tabs = [
    {
      trigger: <span>Preview</span>,
      value: "preview",
      content: (
        <div className="w-full border h-[400px] rounded-sm flex items-center justify-center">
          <Sidebar
            header={<h1>My Sidebar</h1>}
            items={items}
            padding="p-4"
            borderRadius="rounded-md"
            shadow="shadow-lg"
          />
        </div>
      ),
    },
    {
      trigger: <span>Code</span>,
      value: "code",
      content: <CodeBlocks code={importCode + previewCode} language="js" />,
    },
  ];

  return (
    <div className="space-y-2">
      <CustomTabs tabs={tabs} />
    </div>
  );
}

export default PreviewTabs;
