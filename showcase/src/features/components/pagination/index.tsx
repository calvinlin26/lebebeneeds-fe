import React from "react";
import CustomTable from "mainApp/table";
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import useScrollIntoView from "../../../hooks/useScrollIntoView";
import PreviewTabs from "./previewTabs";

const Index: React.FC = () => {
  useNavSideBar([
    { path: "/pagination#installation", label: "Installation" },
    { path: "/pagination#usage", label: "Usage" },
    { path: "/pagination#props", label: "Props" },
  ]);
  useScrollIntoView();

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

  const propsData = [
    {
      name: "currentPage",
      type: "number",
      default: 1,
      description:
        "This prop represents the current active page in the pagination. It is used to highlight the active page number in the pagination UI and to determine which set of items to display.",
    },
    {
      name: "TotalPageCount",
      type: "number",
      default: 1,
      description:
        "This prop indicates the total number of pages available. It helps to create the correct number of page buttons and allows the component to calculate the range of pages.",
    },
    {
      name: "onPageChange",
      type: "function",
      default: "() => {}",
      description:
        "This prop is a callback function that gets called whenever a page change event occurs, such as when a user clicks on a different page number. This function typically updates the currentPage state in the parent component to reflect the new active page.",
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
          Pagination
        </h1>
        <p className="text-base text-muted-foreground">
          <span className="inline-block align-top [text-decoration:inherit] max-w-[538px]">
            Pagination with page navigation, next and previous links.
          </span>
        </p>
      </div>
      <br />
      <PreviewTabs />
      <br />
      <div className="space-y-2" id="#installation">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Installation
        </h3>
        <hr />
        <CodeBlocks
          code={`npm install @radix-ui/react-pagination`}
          language="js"
        />
      </div>
      <br />
      <div className="space-y-2" id="#usage">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">Usage</h3>
        <hr />
        <CodeBlocks code={importCode} language="js" />
        <br />
        <CodeBlocks code={previewCode} language="js" />
      </div>
      <br />
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
