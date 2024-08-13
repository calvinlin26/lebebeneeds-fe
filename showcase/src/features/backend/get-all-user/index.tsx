import CustomTable from "mainApp/table";
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import useScrollIntoView from "../../../hooks/useScrollIntoView";

function Index() {
  useNavSideBar([
    {
      path: "/get-all-user#preview",
      label: "Service API",
    },
    { path: "/get-all-user#url", label: "URL" },
    { path: "/get-all-user#reqParam", label: "Request Param" },
    { path: "/get-all-user#response", label: "Response" },
    {
      path: "/get-all-user#example-response",
      label: "Example Response",
    },
  ]);
  useScrollIntoView();

  const importCode = `GET /users`;

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

  const responseData = [
    {
      property: "requestId",
      dbMapping: "UUID",
      description: "Unique identifier for the request.",
      sampleValues: "b50c0c64a0f94316b0c54f3889168657",
    },
    {
      property: "responseCode",
      dbMapping: "Code of the Response",
      description: "Code representing the status of the response.",
      sampleValues: "00",
    },
    {
      property: "responseMessage",
      dbMapping: "Message of the Response",
      description:
        "Message indicating whether the request was successful or failed.",
      sampleValues: "SUCCESS",
    },
    {
      property: "data",
      dbMapping: "Object",
      description: "Contains metadata about the response data.",
      sampleValues: "-",
    },
    {
      property: "data.page",
      dbMapping: "Current page number",
      description: "The current page number of the response data.",
      sampleValues: "2",
    },
    {
      property: "data.pageSize",
      dbMapping: "Total of data that is shown in a single page",
      description: "The number of items per page.",
      sampleValues: "10",
    },
    {
      property: "data.totalDataCount",
      dbMapping: "Total of data that is returned by the endpoint",
      description: "The total number of items available.",
      sampleValues: "158",
    },
    {
      property: "data.totalPages",
      dbMapping: "Total of pages",
      description: "The total number of pages available.",
      sampleValues: "16",
    },
    {
      property: "data.content",
      dbMapping: "Array",
      description: "Contains the list of user data.",
      sampleValues: "-",
    },
    {
      property: "data.content.active",
      dbMapping: "SYS_USER.ACTIVE",
      description: "Indicates whether the user is active.",
      sampleValues: "true",
    },
    {
      property: "data.content.modifiedBy",
      dbMapping: "SYS_USER.MODIFIED_BY",
      description:
        "The username of the person who last modified the user record.",
      sampleValues: "superAdmin",
    },
    {
      property: "data.content.modifiedDate",
      dbMapping: "SYS_USER.MODIFIED_DATE",
      description: "The date and time when the user record was last modified.",
      sampleValues: "2024-06-04T11:49:35.087+00:00",
    },
    {
      property: "data.content.username",
      dbMapping: "SYS_USER.USERNAME",
      description: "The username of the user.",
      sampleValues: "admin",
    },
    {
      property: "data.content.branch_code",
      dbMapping: "SYS_BRANCH.BRANCH_CODE",
      description: "The branch code associated with the user.",
      sampleValues: "HQ",
    },
    {
      property: "data.content.invalidPasswordRetry",
      dbMapping: "SYS_USER.INVALID_PASSWORD_RETRY",
      description: "The number of invalid password retries allowed.",
      sampleValues: "0",
    },
    {
      property: "data.content.locked",
      dbMapping: "SYS_USER.LOCKED",
      description: "Indicates whether the user account is locked.",
      sampleValues: "False",
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
          User - Get All User
        </h1>
      </div>
      <br />
      <div className="space-y-2" id="#preview">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Service API
        </h3>
        <hr />
        <p>
          The API entry point for Backend to get all parameter is{" "}
          <b>GET /users</b> This API endpoint is implemented inside{" "}
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
  "requestId": "a4f18c9bab304d19b5555fb9da608c46",
  "responseCode": "00",
  "responseMessage": "SUCCESS",
  "data": {
    "page": 1,
    "pageSize": 1,
    "totalDataCount": 5,
    "totalPages": 5,
    "content": [
      {
        "active": true,
        "modifiedBy": "internal-client",
        "modifiedDate": "2024-06-04T11:49:35.087+00:00",
        "username": "admin",
        "name": "admin",
        "email": "admin@admin.admin",
        "branchCode": "BC_JKT001",
        "title": "admin",
        "invalidPasswordRetry": 0,
        "locked": false
      }
    ]
  }
}`}
          language="js"
        />
      </div>
    </div>
  );
}

export default Index;
