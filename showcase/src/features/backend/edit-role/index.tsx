import CustomTable from "mainApp/table";
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import useScrollIntoView from "../../../hooks/useScrollIntoView";

function Index() {
  useNavSideBar([
    {
      path: "/edit-role#preview",
      label: "Service API",
    },
    { path: "/edit-role#url", label: "URL" },
    { path: "/edit-role#reqParam", label: "Request Param" },
    { path: "/edit-role#response", label: "Response" },
    {
      path: "/edit-role#example-response",
      label: "Example Response",
      items: [
        { path: "/edit-role#success", label: "Success" },
        { path: "/edit-role#failed", label: "Failed" },
      ],
    },
  ]);
  useScrollIntoView();

  const importCode = `PUT /roles`;

  const headerParam = [
    {
      key: "Authorization",
      type: "Bearer Token",
      length: "N.A",
      mandatory: "Yes",
      description: "Authorization key",
      sampleValues: "Refer to JWT website",
    },
  ];
  const headerColumns = [
    {
      header: "Key",
      accessor: "key",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Type",
      accessor: "type",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Length",
      accessor: "length",
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

  const headerPath = [
    {
      key: "roleCode",
      typeFormat: "String",
      length: "100",
      mandatory: "Yes",
      description: "SYS_ROLE.ROLE_CODE",
      sampleValues: "ADMIN",
    },
    {
      key: "roleName",
      typeFormat: "String",
      length: "256",
      mandatory: "Yes",
      description: "SYS_ROLE.ROLE_NAME",
      sampleValues: "AAdministrator",
    },
    {
      key: "description",
      typeFormat: "String",
      length: "50",
      mandatory: "No",
      description: "SYS_ROLE.DESCRIPTION",
      sampleValues: "Administrator",
    },
    {
      key: "active",
      typeFormat: "Boolean",
      length: "-",
      mandatory: "No",
      description: "SYS_ROLE.ACTIVE",
      sampleValues: "True ",
    },
    {
      key: "menus",
      typeFormat: "Array",
      length: "-",
      mandatory: "No",
      description: "-",
      sampleValues: "-",
    },
    {
      key: "menus.menuCode",
      typeFormat: "String",
      length: "100",
      mandatory: "No",
      description: "SYS_ROLE.ROLE_CODE",
      sampleValues: "ADMIN",
    },
    {
      key: "services",
      typeFormat: "Array",
      length: "-",
      mandatory: "No",
      description: "-",
      sampleValues: "-",
    },
    {
      key: "services.serviceCode",
      typeFormat: "String",
      length: "100",
      mandatory: "No",
      description: "SYS_SERVICE.SERVICE_CODE",
      sampleValues: "USER_GET",
    },
  ];
  const headerPathColumns = [
    {
      header: "Key",
      accessor: "key",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Type",
      accessor: "type",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Length",
      accessor: "length",
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

  const responseData = [
    {
      property: "requestId",
      dbMapping: "UUID",
      sampleValues: "b50c0c64a0f94316b0c54f3889168657",
    },
    {
      property: "responseCode",
      dbMapping: "Code of the Response",
      sampleValues: "00",
    },
    {
      property: "responseMessage",
      dbMapping:
        "Message of the Response to tell whether the request is successful or fail",
      sampleValues: "SUCCESS",
    },
    {
      property: "validation",
      dbMapping: "Array to include if there’s a validation error",
      sampleValues: "",
    },
    {
      property: "field",
      dbMapping:
        "Name of the field that is supposed to be included in the payload",
      sampleValues: "id",
    },
    {
      property: "message",
      dbMapping: "The error message",
      sampleValues: "Must not be null",
    },
  ];
  const responseColumns = [
    {
      header: "Property",
      accessor: "property",
      headerClassName: "text-left font-bold",
    },
    {
      header: "DB Mapping / Description",
      accessor: "dbMapping",
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
        Role – Edit Role
        </h1>
      </div>
      <br />
      <div className="space-y-2" id="#preview">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Service API
        </h3>
        <hr />
        <p>
          The API entry point for Admin page to get specific parameter is{" "}
          <b>PUT /roles.</b> This API endpoint is implemented inside
          <b>user-management-service.</b>
        </p>
      </div>
      <br />
      <div className="space-y-2" id="#url">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">URL</h3>
        <hr />
        <CodeBlocks code={importCode} language="js" />
      </div>
      <br />
      <div className="space-y-2">
        <h3
          className="scroll-m-20 text-2xl font-bold tracking-tight"
          id="#reqParam"
        >
          Request
        </h3>
        <hr />
        <h5 className="scroll-m-20 text-xl font-bold tracking-tight">
          Header Parameter
        </h5>
        <CustomTable
          columns={headerColumns}
          data={headerParam}
          className="mt-4 border-collapse border border-gray-200 shadow-lg"
          headerClassName="bg-gray-100 text-gray-700"
          bodyClassName="bg-white"
        />
        <br />
        <h5 className="scroll-m-20 text-xl font-bold tracking-tight">
          Request Body
        </h5>
        <CustomTable
          columns={headerPathColumns}
          data={headerPath}
          className="mt-4 border-collapse border border-gray-200 shadow-lg"
          headerClassName="bg-gray-100 text-gray-700"
          bodyClassName="bg-white"
        />
      </div>
      <br />
      <div className="space-y-2">
        <h3
          className="scroll-m-20 text-2xl font-bold tracking-tight"
          id="#response"
        >
          Response
        </h3>
        <hr />
        <CustomTable
          columns={responseColumns}
          data={responseData}
          className="mt-4 border-collapse border border-gray-200 shadow-lg"
          headerClassName="bg-gray-100 text-gray-700"
          bodyClassName="bg-white"
        />
      </div>
      <br />
      <div className="space-y-2" id="#example-response">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Example Response
        </h3>
        <hr />
        <h5
          className="scroll-m-20 text-xl font-bold tracking-tight"
          id="#success"
        >
          Success
        </h5>
        <CodeBlocks
          code={`{
  "requestId": "28bf446ac2124bc184f2f9ede70c2a6d",
  "responseCode": "00",
  "responseMessage": "SUCCESS"
}`}
          language="js"
        />
        <h5
          className="scroll-m-20 text-xl font-bold tracking-tight"
          id="#failed"
        >
          Failed
        </h5>
        <CodeBlocks
          code={`{
  "requestId": "9755e752304848fb9a555a42267b88d2",
  "responseCode": "U05",
  "responseMessage": "U05 - Role not found",
}`}
          language="js"
        />
      </div>
    </div>
  );
}

export default Index;
