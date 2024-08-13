import CustomTable from "mainApp/table";
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import useScrollIntoView from "../../../hooks/useScrollIntoView";

function Index() {
  useNavSideBar([
    {
      path: "/admin-all-param#preview",
      label: "Service API",
    },
    { path: "/admin-all-param#url", label: "URL" },
    { path: "/admin-all-param#reqParam", label: "Request Param" },
    { path: "/admin-all-param#response", label: "Response" },
    {
      path: "/admin-all-param#example-response",
      label: "Example Response",
    },
  ]);
  useScrollIntoView();

  const importCode = `GET /admin/params`;

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
      key: "page",
      type: "Integer",
      length: "100",
      mandatory: "No",
      description: "Determine which page that needs to be returned",
      sampleValues: "1",
    },
    {
      key: "pageSize",
      type: "Integer",
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
      description:
        "To add a filter to the list, this depends on the type of data that is being extracted",
      sampleValues: "langCode:en",
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
      property: "data",
      dbMapping: "Array",
      sampleValues: "Array of objects",
    },
    {
      property: "data.page",
      dbMapping: "Current page number",
      sampleValues: "1",
    },
    {
      property: "data.pageSize",
      dbMapping: "Total of data that is shown in a single page",
      sampleValues: "10",
    },
    {
      property: "data.totalDatacount",
      dbMapping: "Total of data that is returned by the endpoint",
      sampleValues: "9",
    },
    {
      property: "data.totalPages",
      dbMapping: "Total of pages",
      sampleValues: "5",
    },
    {
      property: "data.content",
      dbMapping: "Array",
      sampleValues: "Array of objects",
    },
    {
      property: "data.content.param",
      dbMapping: "Object",
      sampleValues: "Object with parameter details",
    },
    {
      property: "data.content.param.active",
      dbMapping: "SYS_PARAMETER.ACTIVE",
      sampleValues: "true",
    },
    {
      property: "data.content.param.code",
      dbMapping: "SYS_PARAMETER.CODE",
      sampleValues: "GENDER_MALE",
    },
    {
      property: "data.content.param.category",
      dbMapping: "SYS_PARAMETER.CATEGORY",
      sampleValues: "GENDER",
    },
    {
      property: "data.content.frontEnd",
      dbMapping: "SYS_PARAMETER.FRONT_END",
      sampleValues: "True",
    },
    {
      property: "data.content.param.orderNo",
      dbMapping: "SYS_PARAMETER.ORDER_NO",
      sampleValues: "001",
    },
    {
      property: "data.content.param.valueType",
      dbMapping: "SYS_PARAMETER.VALUE_TYPE",
      sampleValues: "TEXT",
    },
    {
      property: "data.content.paramTxt",
      dbMapping: "Object",
      sampleValues: "Object with parameter text details",
    },
    {
      property: "data.content.paramTxt.langCode",
      dbMapping: "SYS_PARAMETER_TXT.LANG_CODE",
      sampleValues: "ID",
    },
    {
      property: "data.content.paramTxt.text",
      dbMapping: "SYS_PARAMETER_TXT.TEXT",
      sampleValues: "Pria",
    },
    {
      property: "data.content.paramTxt.description",
      dbMapping: "SYS_PARAMETER_TXT.DESCRIPTION",
      sampleValues: "Jenis Kelamin - Pria",
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
          Admin - Get all Parameter
        </h1>
      </div>
      <br />
      <div className="space-y-2" id="#preview">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Service API
        </h3>
        <hr />
        <p>
          The API entry point for Admin page to get all parameter is{" "}
          <b>GET /admin/params</b> This API endpoint is implemented inside
          <b>business-param-service.</b>
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
          Request Parameter
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
  "requestId": "161289ac4fd44a02bd90f275c87ab53c",
  "responseCode": "00",
  "responseMessage": "SUCCESS",
  "data": {
    "page": 1,
    "pageSize": 20,
    "totalDataCount": 2,
    "totalPages": 1,
    "content": [
      {
        "param": {
            "active": true,
            "code": "GENDER_MALE",
            "category": "GENDER",
            "frontEnd": true,
            "orderNo": "001",
            "valueType": "TEXT"
        },
        "paramTxt": {
            "langCode": "id",
            "text": "Pria",
            "description": "Pria"
        }
      },
      {
        "param": {
            "active": true,
            "id": "GENDER_FEMALE",
            "category": "GENDER",
            "frontEnd": true,
            "orderNo": "002",
            "valueType": "TEXT"
        },
        "paramTxt": {
            "langCode": "id",
            "text": "Wanita",
            "description": "Wanita"
        }
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
