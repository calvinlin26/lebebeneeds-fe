import CustomTable from "mainApp/table";
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import useScrollIntoView from "../../../hooks/useScrollIntoView";

function Index() {
  useNavSideBar([
    {
      path: "/revoke-token#preview",
      label: "Service API",
    },
    { path: "/revoke-token#url", label: "URL" },
    { path: "/revoke-token#reqParam", label: "Request Param" },
    { path: "/revoke-token#response", label: "Response" },
  ]);
  useScrollIntoView();

  const importCode = `POST /oauth2/revoke`;
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
      sampleValues: ["access_token", "refresh_token"],
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

  return (
    <div>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
          revoke-token (Validate Access Token)
        </h1>
      </div>
      <br />
      <div className="space-y-2" id="#preview">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Service API
        </h3>
        <hr />
        <p>
          The <b>/oauth2/revoke</b> endpoint is used to revoke an OAuth 2.0
          token, making it invalid for further use. This can be an access token
          or a refresh token. Revocation is useful for clients to log out users
          or to handle security concerns where tokens need to be invalidated.
          The API entry point is <b>POST /oauth2/revoke.</b> This API endpoint
          is implemented inside <b>auth-service.</b>
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
        <p>
          When the token is successfully revoked, the server responds with:
          <b>HTTP/1.1 200 OK</b>
        </p>
        <p>
          A response body is generally not included as the HTTP status code
          indicates the outcome.
        </p>
        <p>
          If there is an issue with revoking the token, the server responds with
          an error. Error responses should follow the OAuth 2.0 standard error
          structure.
        </p>
        <CodeBlocks
          code={`{
  "error": "invalid_request",
  "error_description": "Token cannot be revoked or is already invalid."
}`}
          language="js"
        />
      </div>
    </div>
  );
}

export default Index;
