import CustomTable from "mainApp/table";
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import useScrollIntoView from "../../../hooks/useScrollIntoView";

function Index() {
  useNavSideBar([
    {
      path: "/get-all-menu#preview",
      label: "Service API",
    },
    { path: "/get-all-menu#url", label: "URL" },
    { path: "/get-all-menu#reqParam", label: "Request Param" },
    { path: "/get-all-menu#response", label: "Response" },
    {
      path: "/get-all-menu#example-response",
      label: "Example Response",
    },
  ]);
  useScrollIntoView();

  const importCode = `GET /menus`;

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

  const requestParameter = [
    {
      key: "code",
      type: "String",
      length: "100",
      mandatory: "Yes",
      description: `Role Code.
This will determine a field called isAllowed whether the response will be = true or = false.
If the given roleCode or menuCode does not have access to the service, it will return false, else true.`,
      sampleValues: "ADMIN",
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
      sampleValues: "b50c0c64a0f94316b0c54f3889168657",
    },
    {
      property: "responseCode",
      dbMapping: "Code of the Response",
      sampleValues: "00",
    },
    {
      property: "responseMessage",
      dbMapping: "Message of the Response to tell whether the request is successful or fail",
      sampleValues: "SUCCESS",
    },
    {
      property: "data",
      dbMapping: "Object",
      sampleValues: "",
    },
    {
      property: "page",
      dbMapping: "Current page number",
      sampleValues: "2",
    },
    {
      property: "pageSize",
      dbMapping: "Total of data that is shown in a single page",
      sampleValues: "10",
    },
    {
      property: "totalDataCount",
      dbMapping: "Total of data that is returned by the endpoint",
      sampleValues: "158",
    },
    {
      property: "totalPages",
      dbMapping: "Total of pages",
      sampleValues: "16",
    },
    {
      property: "content",
      dbMapping: "Array",
      sampleValues: "",
    },
    {
      property: "content.active",
      dbMapping: "SYS_USER.ACTIVE",
      sampleValues: "true",
    },
    {
      property: "content.modifiedBy",
      dbMapping: "SYS_USER.MODIFIED_BY",
      sampleValues: "superAdmin",
    },
    {
      property: "content.modifiedDate",
      dbMapping: "SYS_USER.MODIFIED_DATE",
      sampleValues: "2024-06-04T11:49:35.087+00:00",
    },
    {
      property: "content.createdBy",
      dbMapping: "YS_ROLE.CREATED_BY",
      sampleValues: "superAdmin",
    },
    {
      property: "content.createdDate",
      dbMapping: "SYS_ROLE.CREATED_DATE",
      sampleValues: "2024-06-04T11:49:35.087+00:00",
    },
    {
      property: "content.menuCode",
      dbMapping: "SYS_MENU.SERVICE _CODE",
      sampleValues: "USER",
    },
    {
      property: "content.label",
      dbMapping: "SYS_MENU.LABEL",
      sampleValues: "Users Management",
    },
      {
        property: "content.description",
        dbMapping: "SYS_MENU.DESCRIPTION",
        sampleValues: "To manage user data ",
      },
      {
        property: "content.url",
        dbMapping: "SYS_MENU.URL",
        sampleValues: "/users",
      },
      {
        property: "content.icon",
        dbMapping: "SYS_MENU.ICON",
        sampleValues: "-",
      },
      {
        property: "content.parent",
        dbMapping: "SYS_MENU.PARENT",
        sampleValues: "-",
      },
      {
        property: "content.order_no",
        dbMapping: "SYS_MENU.ORDER_NO",
        sampleValues: "001",
      },
      {
        property: "content.parent_code",
        dbMapping: "SYS_MENU.PARENT_COD",
        sampleValues: "-",
      },
        {
          property: "content.allowed",
          dbMapping: "Whether the roleCode given in the request param have access to this menu.",
          sampleValues: "true",
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
          Menu - Get All Menu
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
          <b>GET /menus</b> This API endpoint is implemented inside{" "}
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
         <h5 className="scroll-m-20 text-xl font-bold tracking-tight">
          Request Parameter
        </h5>
        <CustomTable
          columns={headerColumns}
          data={requestParameter}
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
     "requestId": "f83a7318a8a348e995abac2d2180a1f3",
    "responseCode": "00",
    "responseMessage": "SUCCESS",
    "data": {
        "page": 1,
        "pageSize": 10,
        "totalDataCount": 2,
        "totalPages": 1,
        "content": [
            {
                "menuCode": "BO",
                "label": "Back Office",
                "description": "Back Office",
                "url": "/bo",
                "orderNo": "002",
                "allowed": false
            }
        ]
    }
}`}
          language="js"
        />
        <hr />
        <h5
          className="scroll-m-20 text-xl font-bold tracking-tight"
          id="#success"
        >
          Failed
        </h5>
        <CodeBlocks
          code={`{
    "requestId": "dcc9d0bfce48467d95187d9054cdbae9",
    "responseCode": "400",
    "responseMessage": "Required parameter 'code' is not present."
}`}
          language="js"
        />
      </div>
    </div>
  );
}

export default Index;
