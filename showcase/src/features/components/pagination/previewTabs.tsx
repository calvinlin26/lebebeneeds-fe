import { CustomTabs } from "mainApp/tabs";
import CustomPagination from "mainApp/pagination";
import CodeBlocks from "../../../components/codeBLock";
import { useState } from "react";

function PreviewTabs() {
  const importCode = `import Pagination from './path/to/Pagination';";
  `;
  const previewCode = `
  const totalPageCount = 10;

  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  <CustomPagination
  currentPage={currentPage}
  totalPageCount={totalPageCount}
  onPageChange={handlePageChange}
/>

`;

  const totalPageCount = 10;

  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const tabs = [
    {
      trigger: <span>Preview</span>,
      value: "preview",
      content: (
        <div className="w-full border h-[400px] rounded-sm flex items-center justify-center">
          <CustomPagination
            currentPage={currentPage}
            totalPageCount={totalPageCount}
            onPageChange={handlePageChange}
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
