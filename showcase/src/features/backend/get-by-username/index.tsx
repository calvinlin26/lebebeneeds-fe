import CustomTable from "mainApp/table";
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import useScrollIntoView from "../../../hooks/useScrollIntoView";

function Index() {
  useNavSideBar([
    {
      path: "/get-by-username#preview",
      label: "Service API",
    },
    { path: "/get-by-username#url", label: "URL" },
    { path: "/get-by-username#reqParam", label: "Request Param" },
    { path: "/get-by-username#response", label: "Response" },
    {
      path: "/get-by-username#example-response",
      label: "Example Response",
    },
  ]);
  useScrollIntoView();

  const importCode = `GET /users/{username}`;

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
      key: "username",
      typeFormat: "String",
      length: 200,
      mandatory: "Yes",
      description: "Username of the User",
      sampleValues: "admin",
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
      key: "requestId",
      dbMapping: "UUID",
      description: "Unique identifier for the request",
      sampleValues: "b50c0c64a0f94316b0c54f3889168657",
    },
    {
      key: "responseCode",
      dbMapping: "Code of the Response",
      description: "Code indicating whether the request was successful",
      sampleValues: "00",
    },
    {
      key: "responseMessage",
      dbMapping: "Message of the Response",
      description: "Message detailing the outcome of the request",
      sampleValues: "SUCCESS",
    },
    {
      key: "data",
      dbMapping: "Object",
      description: "Container for the data returned in the response",
    },
    {
      key: "data.active",
      dbMapping: "SYS_USER.ACTIVE",
      description: "Indicates if the user is active",
      sampleValues: "TRUE",
    },
    {
      key: "data.modifiedBy",
      dbMapping: "SYS_USER.MODIFIED_BY",
      description: "User who last modified the record",
      sampleValues: "superAdmin",
    },
    {
      key: "data.modifiedDate",
      dbMapping: "SYS_USER.MODIFIED_DATE",
      description: "Date and time when the record was last modified",
      sampleValues: "2024-06-04T11:49:35.087+00:00",
    },
    {
      key: "data.username",
      dbMapping: "SYS_USER.USERNAME",
      description: "Username of the user",
      sampleValues: "admin",
    },
    {
      key: "data.branchCode",
      dbMapping: "SYS_BRANCH.BRANCH_CODE",
      description: "Branch code associated with the user",
      sampleValues: "HQ",
    },
    {
      key: "data.invalidPasswordRetry",
      dbMapping: "SYS_USER.INVALID_PASSWORD_RETRY",
      description: "Number of invalid password attempts",
      sampleValues: "0",
    },
    {
      key: "data.locked",
      dbMapping: "SYS_USER.LOCKED",
      description: "Indicates if the user account is locked",
      sampleValues: "False",
    },
    {
      key: "data.roles",
      dbMapping: "Array",
      description: "Array of roles associated with the user",
    },
    {
      key: "data.roles.active",
      dbMapping: "SYS_ROLE.ACTIVE",
      description: "Indicates if the role is active",
      sampleValues: "True",
    },
    {
      key: "data.roles.roleCode",
      dbMapping: "SYS_ROLE.ROLE_CODE",
      description: "Code representing the role",
      sampleValues: "ADMIN",
    },
    {
      key: "data.roles.roleName",
      dbMapping: "SYS_ROLE.ROLE_NAME",
      description: "Name of the role",
      sampleValues: "Administrator",
    },
    {
      key: "data.roles.description",
      dbMapping: "SYS_ROLE.DESCRIPTION",
      description: "Description of the role",
      sampleValues: "Administrator",
    },
    {
      key: "data.roles.menu",
      dbMapping: "Array",
      description: "Array of menus associated with the role",
    },
    {
      key: "data.roles.menu.menuCode",
      dbMapping: "SYS_MENU.MENU_CODE",
      description: "Code representing the menu",
      sampleValues: "BACK_OFFICE",
    },
    {
      key: "data.roles.menu.label",
      dbMapping: "SYS_MENU.LABEL",
      description: "Label of the menu",
      sampleValues: "Back Office",
    },
    {
      key: "data.roles.menu.description",
      dbMapping: "SYS_MENU.DESCRIPTION",
      description: "Description of the menu",
      sampleValues: "Menu for Back Office",
    },
    {
      key: "data.roles.menu.url",
      dbMapping: "SYS_MENU.URL",
      description: "URL associated with the menu",
      sampleValues: "/backOffice",
    },
    {
      key: "data.roles.menu.parent",
      dbMapping: "SYS_MENU.PARENT",
      description: "Parent menu of the current menu",
      sampleValues: "ADMIN",
    },
    {
      key: "data.roles.menu.orderNo",
      dbMapping: "SYS_MENU.ORDER_NO",
      description: "Order number of the menu",
      sampleValues: "001",
    },
    {
      key: "data.roles.menu.services",
      dbMapping: "ARRAY",
      description: "Array of services associated with the menu",
    },
    {
      key: "data.roles.menu.services.serviceCode",
      dbMapping: "SYS_SERVICE.SERVICE_CODE",
      description: "Code representing the service",
      sampleValues: "USER_LIST",
    },
    {
      key: "data.roles.menu.services.url",
      dbMapping: "SYS_SERVICE.URL",
      description: "URL associated with the service",
      sampleValues: "/users",
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
          User - Get By Username
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
          <b>GET /users/{`{username}`}</b> This API endpoint is implemented
          inside <b>user-management-service.</b>
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
          Request Path Parameter
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
  "requestId": "b4cc2d68129945918fe97faa6caa77fc",
  "responseCode": "00",
  "responseMessage": "SUCCESS",
  "data": {
      "active": true,
      "modifiedBy": "internal-client",
      "modifiedDate": "2024-06-04T11:49:35.087+00:00",
      "username": "admin",
      "name": "admin",
      "email": "admin@admin.admin",
      "branchCode": "BC_JKT001",
      "title": "admin",
      "invalidPasswordRetry": 0,
      "locked": false,
      "roles": [
        {
          "active": true,
          "createdBy": "internal-client",
          "createdDate": "2024-06-03T14:55:23.496+00:00",
          "modifiedBy": "internal-client",
          "modifiedDate": "2024-06-07T11:56:27.578+00:00",
          "roleCode": "ADMIN",
          "roleName": "Administrator",
          "description": "Administrator",
          "menus": [
            {
              "menuCode": "USER",
              "label": "User",
              "description": "User Menu",
              "url": "/user",
              "parent": "",
              "orderNo": "001",
              "services": [
                {
                  "serviceCode": "USER_LIST",
                  "url": "/auth/user/list"
                }
              ]
            }
        ],
        "services": [
          {
            "serviceCode": "USER_LIST",
            "url": "/auth/user/list"
          }
        ]
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
