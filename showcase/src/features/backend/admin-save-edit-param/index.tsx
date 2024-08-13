import CustomTable from "mainApp/table";
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import useScrollIntoView from "../../../hooks/useScrollIntoView";

function Index() {
  useNavSideBar([
    {
      path: "/admin-save-edit-param#preview",
      label: "Service API",
    },
    { path: "/admin-save-edit-param#url", label: "URL" },
    { path: "/admin-save-edit-param#reqParam", label: "Request Param" },
    { path: "/admin-save-edit-param#response", label: "Response" },
    {
      path: "/admin-save-edit-param#example-response",
      label: "Example Response",
      items: [
        { path: "/admin-save-edit-param#success", label: "Success" },
        { path: "/admin-save-edit-param#failed", label: "Failed" },
      ],
    },
  ]);
  useScrollIntoView();

  const importCode = `POST /admin/params`;

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
      key: "code",
      type: "String",
      length: "200",
      mandatory: "Yes",
      description: "SYS_PARAMETER.CODE",
      sampleValues: "GENDER_MALE",
    },
    {
      key: "category",
      type: "String",
      length: "200",
      mandatory: "No",
      description: "SYS_PARAMETER.CATEGORY",
      sampleValues: "GENDER",
    },
    {
      key: "frontEnd",
      type: "Boolean",
      length: "-",
      mandatory: "No",
      description: "SYS_PARAMETER.FRONT_END",
      sampleValues: "True",
    },
    {
      key: "paramValue",
      type: "String",
      length: "200",
      mandatory: "No",
      description: "SYS_PARAMETER.PARAM_VALUE",
      sampleValues: "Null",
    },
    {
      key: "orderNo",
      type: "String",
      length: "20",
      mandatory: "No",
      description: "SYS_PARAMETER.ORDER_NO",
      sampleValues: "001",
    },
    {
      key: "valueType",
      type: "String",
      length: "10",
      mandatory: "No",
      description: "SYS_PARAMETER.VALUE_TYPE",
      sampleValues: "TEXT",
    },
    {
      key: "parentId",
      type: "String",
      length: "200",
      mandatory: "No",
      description: "SYS_PARAMETER.PARENT",
      sampleValues: "Null",
    },
    {
      key: "active",
      type: "Boolean",
      length: "-",
      mandatory: "No",
      description: "SYS_PARAMETER.ACTIVE",
      sampleValues: "True",
    },
    {
      key: "paramTxt",
      type: "Array",
      length: "-",
      mandatory: "No",
      description: "-",
      sampleValues: "-",
    },
    {
      key: "paramId",
      type: "String",
      length: "200",
      mandatory: "Yes if paramTxt is provided, else is not mandatory",
      description: "SYS_PARAMETER_TXT.PARAM_ID",
      sampleValues: "GENDER_MALE",
    },
    {
      key: "langCode",
      type: "String",
      length: "10",
      mandatory: "Yes if paramTxt is provided, else is not mandatory",
      description: "SYS_PARAMETER_TXT.LANG_CODE",
      sampleValues: "EN",
    },
    {
      key: "text",
      type: "String",
      length: "200",
      mandatory: "Yes if paramTxt is provided, else is not mandatory",
      description: "SYS_PARAMETER_TXT.TEXT",
      sampleValues: "MALE",
    },
    {
      key: "description",
      type: "String",
      length: "1000",
      mandatory: "No",
      description: "SYS_PARAMETER_TXT.DESCRIPTION",
      sampleValues: "Male Gender",
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
      description: "The unique identifier for the request.",
      sampleValues: "b50c0c64a0f94316b0c54f3889168657",
    },
    {
      property: "responseCode",
      dbMapping: "Code of the Response",
      description: "The code representing the response status.",
      sampleValues: "00",
    },
    {
      property: "responseMessage",
      dbMapping: "Message of the Response",
      description:
        "Message describing whether the request was successful or failed.",
      sampleValues: "SUCCESS",
    },
    {
      property: "validation",
      dbMapping: "Array (Will only appear if there’s a validation error)",
      description: "Array of validation errors.",
      sampleValues: "-",
    },
    {
      property: "validation.field",
      dbMapping:
        "Name of the field that is supposed to be included in the payload",
      description: "The name of the field causing the validation error.",
      sampleValues: "id",
    },
    {
      property: "validation.message",
      dbMapping: "The error message",
      description: "The validation error message.",
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
          Admin - Save or Edit Parameter
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
          <b>POST /admin/params.</b> This API endpoint is implemented inside
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
      <div className="space-y-2">
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
  "requestId": "08ba740520914fbe9cfe6c1ce13461e8",
  "responseCode": "X02",
  "responseMessage": "Validation Error",
  "validation": [
    {
      "field": "id",
      "message": "must not be null"
    }
  ]
}`}
          language="js"
        />
      </div>
    </div>
  );
}

export default Index;
