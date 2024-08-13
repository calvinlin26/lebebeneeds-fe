import CustomTable from "mainApp/table";
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import useScrollIntoView from "../../../hooks/useScrollIntoView";

function Index() {
  useNavSideBar([
    {
      path: "/admin-spesific-param#preview",
      label: "Service API",
    },
    { path: "/admin-spesific-param#url", label: "URL" },
    { path: "/admin-spesific-param#reqParam", label: "Request Param" },
    { path: "/admin-spesific-param#response", label: "Response" },
    {
      path: "/admin-spesific-param#example-response",
      label: "Example Response",
      items: [
        { path: "/admin-spesific-param#success", label: "Success" },
        { path: "/admin-spesific-param#failed", label: "Not Found" },
      ],
    },
  ]);
  useScrollIntoView();

  const importCode = `GET /admin/params/{code}`;

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
      description: "Parameter ID",
      sampleValues: "DEFAULT_INTEREST",
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
      dbMapping: "Array of data",
      sampleValues: "Array of objects",
    },
    {
      property: "data.active",
      dbMapping: "SYS_PARAMETER.ACTIVE",
      sampleValues: "true",
    },
    {
      property: "data.code",
      dbMapping: "SYS_PARAMETER.CODE",
      sampleValues: "GENDER_MALE",
    },
    {
      property: "data.category",
      dbMapping: "SYS_PARAMETER.CATEGORY",
      sampleValues: "GENDER",
    },
    {
      property: "data.frontEnd",
      dbMapping: "SYS_PARAMETER.FRONT_END",
      sampleValues: "True",
    },
    {
      property: "data.orderNo",
      dbMapping: "SYS_PARAMETER.ORDER_NO",
      sampleValues: "001",
    },
    {
      property: "data.valueType",
      dbMapping: "SYS_PARAMETER.VALUE_TYPE",
      sampleValues: "TEXT",
    },
    {
      property: "data.paramTxt",
      dbMapping: "Array of SYS_PARAMETER_TXT",
      sampleValues: "Array of objects",
    },
    {
      property: "data.paramTxt.langCode",
      dbMapping: "SYS_PARAMETER_TXT.LANG_CODE",
      sampleValues: "ID",
    },
    {
      property: "data.paramTxt.text",
      dbMapping: "SYS_PARAMETER_TXT.TEXT",
      sampleValues: "Pria",
    },
    {
      property: "data.paramTxt.description",
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
          Admin - Get Spesific Parameter
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
          <b>GET /admin/params/{`{code}`}.</b> This API endpoint is implemented
          inside <b>business-param-service.</b>
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
  "requestId": "b50c0c64a0f94316b0c54f3889168657",
    "responseCode": "00",
    "responseMessage": "SUCCESS",
    "data": {
      "active": true,
      "code": "GENDER_MALE",
      "category": "GENDER",
      "frontEnd": true,
      "orderNo": "001",
      "valueType": "TEXT",
      "paramTxt": [
          {
              "langCode": "en",
              "text": "Male",
              "description": "Male"
          },
          {
              "langCode": "id",
              "text": "Pria",
              "description": "Pria"
          }
      ]
    }
}`}
          language="js"
        />
        <h5
          className="scroll-m-20 text-xl font-bold tracking-tight"
          id="#failed"
        >
          Not Found
        </h5>
        <CodeBlocks
          code={`{
  "requestId": "7c49fe91dff24640bf91f20d6a28ae64",
  "responseCode": "00",
  "responseMessage": "SUCCESS"
}`}
          language="js"
        />
      </div>
    </div>
  );
}

export default Index;
