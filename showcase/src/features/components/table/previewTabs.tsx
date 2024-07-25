import { CustomTabs } from "mainApp/tabs";
import CustomTable from "mainApp/table";
import CodeBlocks from "../../../components/codeBLock";

function PreviewTabs() {
  const importCode = `import CustomTable from './path/to/CustomTable';";
    `;
  const previewCode = `
  
    const columns = [
      { header: 'Name', accessor: 'name' },
      { header: 'Active', accessor: 'active' },
    ];
  
    const data = [
      { name: 'John Doe', active: 'Yes' },
      { name: 'Jane Smith', active: 'No' },
    ];
    
    const footer = { name: 'Total', active: '2' };
  
    <CustomTable
    columns={columns}
    data={data}
    caption="User Information"
    className="min-w-full divide-y divide-gray-200"
    headerClassName="bg-gray-50"
    bodyClassName="bg-white divide-y divide-gray-200"
    footerClassName="bg-gray-50"
  />
  `;

  const columnsTable = [
    { header: "Name", accessor: "name" },
    { header: "Active", accessor: "active" },
  ];

  const data = [
    { name: "John Doe", active: "Yes" },
    { name: "Jane Smith", active: "No" },
  ];

  const tabs = [
    {
      trigger: <span>Preview</span>,
      value: "preview",
      content: (
        <div className="w-full border h-[400px] rounded-sm flex items-center justify-center">
          <CustomTable
            columns={columnsTable}
            data={data}
            caption="User Information"
            className="min-w-full divide-y divide-gray-200"
            headerClassName="bg-gray-50"
            bodyClassName="bg-white divide-y divide-gray-200"
            footerClassName="bg-gray-50"
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
