import CustomTable from "mainApp/table";
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import useScrollIntoView from "../../../hooks/useScrollIntoView";

function Index() {
  useNavSideBar([
    {
      path: "/fe-parameter-by-category#preview",
      label: "Service API",
    },
    { path: "/fe-parameter-by-category#url", label: "URL" },
    { path: "/fe-parameter-by-category#reqParam", label: "Request Param" },
    { path: "/fe-parameter-by-category#response", label: "Response" },
    {
      path: "/fe-parameter-by-category#example-response",
      label: "Example Response",
      items: [
        { path: "/fe-parameter-by-category#success", label: "Success" },
        { path: "/fe-parameter-by-category#failed", label: "Failed" },
      ],
    },
  ]);
  useScrollIntoView();

  const importCode = `GET /frontend/params/categories`;

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
      key: "category",
      typeFormat: "List<String>",
      length: "-",
      mandatory: "Yes",
      description: "Determine which parent parameter will be fetched.",
      sampleValues: ["CITY"],
    },
    {
      key: "langCode",
      typeFormat: "String",
      length: "-",
      mandatory: "No",
      description: "Determine what is the language of parameter.",
      sampleValues: "EN",
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
      accessor: "typeFormat",
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
      dbMapping: "Array",
      description: "Contains the response data.",
      sampleValues: "-",
    },
    {
      property: "data.active",
      dbMapping: "SYS_PARAMETER.ACTIVE",
      description: "Indicates whether the parameter is active.",
      sampleValues: "true",
    },
    {
      property: "data.code",
      dbMapping: "SYS_PARAMETER.CODE",
      description: "The code for the system parameter.",
      sampleValues: "GENDER_MALE",
    },
    {
      property: "data.category",
      dbMapping: "SYS_PARAMETER.CATEGORY",
      description: "The category to which the parameter belongs.",
      sampleValues: "GENDER",
    },
    {
      property: "data.frontEnd",
      dbMapping: "SYS_PARAMETER.FRONT_END",
      description: "Indicates if the parameter is used in the front end.",
      sampleValues: "True",
    },
    {
      property: "data.orderNo",
      dbMapping: "SYS_PARAMETER.ORDER_NO",
      description: "The order number of the parameter.",
      sampleValues: "001",
    },
    {
      property: "data.valueType",
      dbMapping: "SYS_PARAMETER.VALUE_TYPE",
      description: "The type of value associated with the parameter.",
      sampleValues: "TEXT",
    },
    {
      property: "data.parentCode",
      dbMapping: "SYS_PARAMETER.PARENT_CODE",
      description: "The parent code of the parameter.",
      sampleValues: "PROVINCE_JABAR",
    },
    {
      property: "data.paramTxt",
      dbMapping: "Array",
      description: "Array of parameter texts.",
      sampleValues: "-",
    },
    {
      property: "data.paramTxt.langCode",
      dbMapping: "SYS_PARAMETER_TXT.LANG_CODE",
      description: "The language code for the parameter text.",
      sampleValues: "EN",
    },
    {
      property: "data.paramTxt.text",
      dbMapping: "SYS_PARAMETER_TXT.TEXT",
      description: "The text of the parameter.",
      sampleValues: "Bandung",
    },
    {
      property: "data.paramTxt.description",
      dbMapping: "SYS_PARAMETER_TXT.DESCRIPTION",
      description: "A description of the parameter text.",
      sampleValues: "Bandung",
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
          Frontend - Get Parameter By Category
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
          <b>GET /frontend/params/categories.</b> This API endpoint is
          implemented inside <b>business-param-service.</b>
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
          Request Paremeter
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
  "requestId": "e4692f8126fc487996d9677cba6378ff",
  "responseCode": "00",
  "responseMessage": "SUCCESS",
  "data": [
    {
      "active": true,
      "code": "PROVINCE_JAKARTA",
      "category": "PROVINCE",
      "frontEnd": true,
      "orderNo": "001",
      "valueType": "TEXT",
      "paramTxt": [
        {
          "langCode": "en",
          "text": "Jakarta",
          "description": "Jakarta"
        }
      ]
    }
  ]
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
  "requestId": "4aa2aef4c43f4df0970a6480113baca2",
  "responseCode": "400",
  "responseMessage": "Required parameter 'category' is not present."
}`}
          language="js"
        />
      </div>
    </div>
  );
}

export default Index;
