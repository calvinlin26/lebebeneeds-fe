import React from "react";
import { Button } from "mainApp/button"
import { useBussinessParamData } from "../hooks/useBussinessParamData";
import CustomTable from "mainApp/table"

const Index: React.FC = () => {

  //use custom hooks
  const bussinessParamData = useBussinessParamData();

  // Columns definition
  const columns = [
    {
      header: "Name",
      accessor: "name",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Active",
      accessor: "active",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Action",
      accessor: "action",
    },
  ];

  const data = bussinessParamData.map((item: AdminParamListItem) => {
    return {
      ...item,
      active: item?.param?.active === true ? "Active" : item?.param?.active === false ? "Inactive" : "-",
      action: (
        <div className="flex flex-row gap-3">
          <Button>Edit</Button>
          <Button variant="destructive">Delete</Button>
        </div>
      )
    }
  })

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold">Bussiness Param Service</h1>
      
      <CustomTable 
        columns={columns}
        data={data}
        caption="Bussiness Param Data"
        className="mt-4 border-collapse border border-gray-200 shadow-lg"
        headerClassName="bg-gray-100 text-gray-700"
        bodyClassName="bg-white"
      />
    </div>
  )
}

export default Index;