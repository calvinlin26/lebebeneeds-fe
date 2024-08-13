import CustomTable from "mainApp/table";
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import useScrollIntoView from "../../../hooks/useScrollIntoView";

function Index() {
  useNavSideBar([
    {
      path: "/authenticationAuthorization#service-api",
      label: "Service API",
    },
    { path: "/authenticationAuthorization#url", label: "URL" },
    { path: "/authenticationAuthorization#reqParam", label: "Request Param" },
    {
      path: "/authenticationAuthorization#response",
      label: "Response",
    },
    {
      path: "/authenticationAuthorization#example-response",
      label: "Example Response",
    },
  ]);
  useScrollIntoView();

  const importCode = `GET /oauth2/authorize`;
  const previewCode = `None`;

  const propsData = [
    {
      name: "response_type",
      type: "String",
      default: "Yes",
      description:
        "Indicates the type of authorization being requested. Valid values are code (for authorization code flow) and token (for implicit flow).",
      value: "Code, Token",
    },
    {
      name: "client_id",
      type: "String",
      default: "Yes",
      description:
        "The client identifier as registered with the Authorization Server.",
      value: "sample-client",
    },
    {
      name: "redirect_uri",
      type: "String",
      default: "No",
      description:
        "The URI where the Authorization Server will send the user after authorization. Must match one of the registered redirect URIs.",
      value: "http://localhost:5173/",
    },
    {
      name: "scope",
      type: "String",
      default: "No",
      description: "A space-separated list of scopes requested by the client.",
      value: "openid, read,write",
    },
    {
      name: "state",
      type: "String",
      default: "No",
      description:
        "An opaque value to maintain state between the request and the callback.",
      value: "-",
    },
    {
      name: "code_challenge_method",
      type: "String",
      default: "No",
      description:
        "Specifies the transformation method used to derive the code_challenge.",
      value: "plain, S256",
    },
    {
      name: "code_challenge",
      type: "String",
      default:
        "No, Note : will only be mandatory if code_challenge_method is present",
      description:
        "The client computes the code challenge from the code verifier and includes it in the authorization request.Refer to below link, for code_challenge and code_verifier generation https://developer.pingidentity.com/en/tools/pkce-code-generator.html",
      value: "ea3rEXbTCcvWGOL2m6J1lT2VWv-sLrnS2i-UeaNENbw",
    },
  ];

  const columns = [
    {
      header: "Key",
      accessor: "name",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Type",
      accessor: "type",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Mandatory",
      accessor: "default",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Description",
      accessor: "description",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Sample Value",
      accessor: "value",
      headerClassName: "text-left font-bold",
    },
  ];

  const responseData = [
    {
      key: "access_token",
      dbMapping:
        "The token that the client uses to make authenticated requests to the protected resources (APIs). It is a credential that can be used by the client to access the resource server.",
      sampleValues: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...",
    },
    {
      key: "refresh_token",
      dbMapping:
        "A token that can be used to obtain a new access token once the original access token expires. It is used to refresh the access token without requiring the resource owner to reauthorize.",
      sampleValues: "tGzv3JOkF0XG5Qx2TlKWIA….",
    },
    {
      key: "scope",
      dbMapping:
        "The scope(s) associated with the access token. This is a space-separated list of scopes that specify the level of access granted by the access token.",
      sampleValues: "read write",
    },
    {
      key: "id_token",
      dbMapping:
        "A JSON Web Token (JWT) that contains identity information about the user. It is typically included in the response when using OpenID Connect, which is an identity layer on top of OAuth 2.0.",
      sampleValues: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjE2VWY...",
    },
    {
      key: "token_type",
      dbMapping:
        "The type of token issued. Typically, it is 'Bearer', indicating that the token is a Bearer Token.",
      sampleValues: "Bearer",
    },
    {
      key: "expires_in",
      dbMapping:
        "The lifetime in seconds of the access token. This indicates how long the access token will be valid from the time it was issued.",
      sampleValues: "3600",
    },
  ];

  const responseColumns = [
    {
      header: "Property",
      accessor: "key",
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
          Get Authorization Code (Login Page)
        </h1>
        <p className="text-base text-muted-foreground">
          <span className="inline-block align-top [text-decoration:inherit] max-w-[538px]">
            This API Initiates the authorization process by redirecting the
            resource owner (user) to the authorization server for consent.
          </span>
        </p>
      </div>
      <br />
      <div className="space-y-2" id="#service-api">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Service API
        </h3>
        <hr />
        <p>
          The API entry point to obtain an authorization code or an implicit
          grant token for the client is <b>GET /oauth2/authorize</b>. This API
          endpoint is implemented inside auth-service.
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
        <p>
          If we trigger this URL correctly in the browser, this endpoint will
          response with a Spring Login Form.
        </p>
        <p>
          If we trigger this URL using postman, this endpoint will response with
          HTML codes which translates to Spring Login Form.
        </p>
        <p>
          Then if we proceed to fill in the credentials, and successfully
          verified by the <b>auth-service.</b> The <b>auth-service</b> will
          redirect the user to the <b>redirect_uri</b> that is specified in the
          Request Parameter and also it will specify the{" "}
          <b>Authorization Code</b> in the Request Parameter of the
          redirect_uri.
        </p>
        <CodeBlocks
          code={`e.g:
  http://localhost:5173/login/oauth2/code/oidc-client?code=GQCPeoSXNPrj17PL7mJYFS8ePnNKgrry7xU1oktQhigvxyZMXFtkmuJQNXms-lzJpMY5hy8jo4XMBtCZUxwymWUDsa_xHF_47kazi5ddvH_XoQTqvZw0szVD6v9KYmqz`}
          language="js"
        />
      </div>
    </div>
  );
}

export default Index;
