import CustomTable from "mainApp/table";
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import useScrollIntoView from "../../../hooks/useScrollIntoView";

function Index() {
  useNavSideBar([
    {
      path: "/get-all-role#preview",
      label: "Service API",
    },
    { path: "/get-all-role#url", label: "URL" },
    { path: "/get-all-role#reqParam", label: "Request Param" },
    { path: "/get-all-role#response", label: "Response" },
    {
      path: "/get-all-role#example-response",
      label: "Example Response",
    },
  ]);
  useScrollIntoView();

  const importCode = `GET /roles`;

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
      key: "page",
      type: "integer",
      length: "100",
      mandatory: "No",
      description: "Determine which page that needs to be returned ",
      sampleValues: "1",
    },
    {
        key: "pageSize",
        type: "integer",
        length: "100",
        mandatory: "No",
        description: "Determine how many data per page",
        sampleValues: "10",
    },
    {
        key: "search",
        type: "HashMap",
        length: "N.A",
        mandatory: "No",
        description: "To add a filter to the list, this depends on the type of data that is being extracted",
        sampleValues: "langCode:en",
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
      property: "content.roleCode",
      dbMapping: "SYS_ROLE.ROLE_CODE",
      sampleValues: "ADMIN",
    },
    {
      property: "content.roleName",
      dbMapping: "SYS_ROLE.ROLE_NAME",
      sampleValues: "Administrator",
    },
      {
        property: "content.description",
        dbMapping: "SYS_ROLE.DESCRIPTION",
        sampleValues: "Administrator",
      },
      {
        property: "content.menus",
        dbMapping: "Array",
        sampleValues: "-",
      },
      {
        property: "content.menus.menuCode",
        dbMapping: "SYS_MENU.MENU_CODE",
        sampleValues: "BACK_OFFICE",
      },
      {
        property: "content.menus.label",
        dbMapping: "SYS_MENU.LABEL",
        sampleValues: "Back Office",
      },
      {
        property: "content.menus.description",
        dbMapping: "SYS_MENU.DESCRIPTION",
        sampleValues: "Back Office Menus",
      },
      {
        property: "content.menus.url",
        dbMapping: "SYS_MENU.URL",
        sampleValues: "/backOffice",
      },
      {
        property: "content.menus.parent",
        dbMapping: "SYS_MENU.PARENT",
        sampleValues: "",
      },
      {
        property: "content.menus.orderNo",
        dbMapping: "SYS_MENU.ORDER_NO",
        sampleValues: "001",
      },
      {
        property: "content.menus.services",
        dbMapping: "Array",
        sampleValues: "",
      },
      {
        property: "content.menus.services.serviceCode",
        dbMapping: "SYS_SERVICE.SERVICE_CODE",
        sampleValues: "USER_GET",
      },
      {
        property: "content.menus.services.url",
        dbMapping: "SYS_SERVICE.URL",
        sampleValues: "/users",
      },
      {
        property: "content.services",
        dbMapping: "SYS_MENU.PARENT",
        sampleValues: "Array",
      },
      {
        property: "content.services.serviceCode",
        dbMapping: "SYS_SERVICE.SERVICE_CODE",
        sampleValues: "USER_GET",
      },
      {
        property: "content.services.url",
        dbMapping: "SYS_SERVICE.URL",
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
          Role - Get All Role
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
          <b>GET /roles</b> This API endpoint is implemented inside{" "}
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
"requestId": "2f69b95337534f468ec1c827810af4d7",
    "responseCode": "00",
    "responseMessage": "SUCCESS",
    "data": {
        "page": 1,
        "pageSize": 10,
        "totalDataCount": 3,
        "totalPages": 1,
        "content": [
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
                        "serviceCode": "ROLE_GET"
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
