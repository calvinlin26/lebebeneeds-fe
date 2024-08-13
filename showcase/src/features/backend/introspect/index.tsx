import CustomTable from "mainApp/table";
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import useScrollIntoView from "../../../hooks/useScrollIntoView";

function Index() {
  useNavSideBar([
    {
      path: "/introspect#preview",
      label: "Service API",
    },
    { path: "/introspect#url", label: "URL" },
    { path: "/introspect#reqParam", label: "Request Param" },
    { path: "/introspect#response", label: "Response" },
    {
      path: "/introspect#example-response",
      label: "Example Response",
    },
  ]);
  useScrollIntoView();

  const importCode = `POST /oauth2/introspect`;
  const previewCode = `None`;

  const propsData = [
    {
      key: "token",
      type: "String",
      mandatory: "Yes",
      description:
        "The OAuth 2.0 token that needs to be introspected. It can be an access token or a refresh token.",
      sampleValues: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...",
    },
    {
      key: "token_type_hint",
      type: "String",
      mandatory: "No",
      description:
        "A hint about the type of the token submitted for introspection. This can help the authorization server optimize the token lookup.",
      sampleValues: "access_token, refresh_token",
    },
  ];

  const columns = [
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
      header: "Sample Value",
      accessor: "sampleValues",
      headerClassName: "text-left font-bold",
    },
  ];

  const responseData = [
    {
      property: "active",
      dbMapping:
        "Indicates whether the provided token is currently active. A true value means the token is valid and can be used; false means the token is invalid or expired.",
      sampleValues: "true",
    },
    {
      property: "scope",
      dbMapping:
        "The scopes associated with the token. It specifies the permissions granted to the client.",
      sampleValues: "read write",
    },
    {
      property: "client_id",
      dbMapping: "The client identifier associated with the token.",
      sampleValues: "my-client-id",
    },
    {
      property: "username",
      dbMapping: "The username of the resource owner who authorized the token.",
      sampleValues: "username@example.com",
    },
    {
      property: "token_type",
      dbMapping:
        "The type of the token (usually access_token or refresh_token).",
      sampleValues: "access_token",
    },
    {
      property: "exp",
      dbMapping:
        "The expiration time of the token. Represented as the number of seconds since the epoch (1970-01-01T00:00:00Z UTC).",
      sampleValues: "1617746740",
    },
    {
      property: "iat",
      dbMapping: "The time the token was issued.",
      sampleValues: "1617746740",
    },
    {
      property: "nbf",
      dbMapping:
        "The time before which the token must not be accepted for processing.",
      sampleValues: "1617746740",
    },
    {
      property: "sub",
      dbMapping:
        "A subject identifier that represents the resource owner who authorized the token.",
      sampleValues: "user-id",
    },
    {
      property: "aud",
      dbMapping:
        "The intended audience for the token. Typically, this is the resource server that accepts the token.",
      sampleValues: "api.example.com",
    },
    {
      property: "iss",
      dbMapping:
        "The issuer of the token. Typically, this is the authorization server.",
      sampleValues: "https://auth.example.com",
    },
    {
      property: "jti",
      dbMapping:
        "A unique identifier for the token. Used to uniquely identify the token.",
      sampleValues: "unique-token-id",
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
          Introspect (Validate Access Token)
        </h1>
      </div>
      <br />
      <div className="space-y-2" id="#preview">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Service API
        </h3>
        <hr />
        <p>
          The <b>/oauth2/introspect</b> endpoint is used in OAuth 2.0 to check
          the active state of an access token or a refresh token. It allows
          resource servers and clients to query information about the provided
          token, including its validity and related metadata. This is
          particularly useful for implementing token revocation and for
          verifying tokens across systems. The API entry point is{" "}
          <b>POST /oauth2/introspect.</b> This API endpoint is implemented
          inside <b>auth-service.</b>
        </p>
      </div>
      <br />
      <div className="space-y-2" id="#url">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">URL</h3>
        <hr />
        <CodeBlocks code={importCode} language="js" />
        <br />
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Header Parameter
        </h3>
        <hr />
        <CodeBlocks code={previewCode} language="js" />
      </div>
      <br />
      <div className="space-y-2">
        <h3
          className="scroll-m-20 text-2xl font-bold tracking-tight"
          id="#reqParam"
        >
          Request Parameter
        </h3>
        <hr />
        <CustomTable
          columns={columns}
          data={propsData}
          className="mt-4 border-collapse border border-gray-200 shadow-lg w-100"
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
  "active": true,
  "sub": "admin",
  "aud": [
      "sample-client"
  ],
  "nbf": 1721561930,
  "scope": "openid",
  "iss": "http://192.168.90.35:9000",
  "exp": 1721562830,
  "iat": 1721561930,
  "jti": "cf96868f-87b6-4055-99e2-48c01b2f3b7f",
  "client_id": "sample-client",
  "token_type": "Bearer"
}`}
          language="js"
        />
      </div>
    </div>
  );
}

export default Index;
