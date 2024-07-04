import { Button } from "../../components/button";
import CustomPagination from "../../components/pagination";
import CustomTable from "../../components/table";
import { useState } from "react";

const columns = [
  { header: "Name", accessor: "name", headerClassName: "text-left font-bold" },
  { header: "Age", accessor: "age", headerClassName: "text-right font-medium" },
  {
    header: "Email",
    accessor: "email",
    headerClassName: "text-center font-medium",
  },
];

const data = [
  { name: "John Doe", age: 28, email: "john@example.com" },
  { name: "Jane Smith", age: 34, email: "jane@example.com" },
  { name: "Sam Brown", age: 22, email: "sam@example.com" },
];

const footer = {
  name: "Total",
  age: 84, // Sum of ages
  email: "",
};

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPageCount = 10; // Example total page count

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <Button>Primary</Button>
      <Button variant="secondary" size={"sm"}>
        Secondary
      </Button>
      <Button variant="destructive">Destructive</Button>
      <CustomTable
        columns={columns}
        data={data}
        caption="User Data"
        footer={footer}
        className="mt-4 border-collapse border border-gray-200 shadow-lg"
        headerClassName="bg-gray-100 text-gray-700"
        bodyClassName="bg-white"
        footerClassName="bg-gray-50 text-gray-800 font-semibold"
      />
      <CustomPagination
        currentPage={currentPage}
        totalPageCount={totalPageCount}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Dashboard;
