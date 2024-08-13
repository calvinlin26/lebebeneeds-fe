import CustomTable from "mainApp/table";
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import useScrollIntoView from "../../../hooks/useScrollIntoView";

function Index() {
  useNavSideBar([
    {
      path: "/refresh-token#preview",
      label: "Service API",
    },
    { path: "/refresh-token#url", label: "URL" },
    { path: "/refresh-token#reqParam", label: "Request Param" },
    { path: "/refresh-token#response", label: "Response" },
    {
      path: "/refresh-token#example-response",
      label: "Example Response",
      items: [
        { path: "/refresh-token#success", label: "Success" },
        { path: "/refresh-token#failed", label: "Failed" },
      ],
    },
  ]);
  useScrollIntoView();

  const importCode = `POST /oauth2/token`;
  const previewCode = `None`;

  const propsData = [
    {
      key: "grant_type",
      typeFormat: "String",
      mandatory: "Yes",
      description: "To indicate the type of grant being used",
      sampleValues:
        "authorization_code, password, client_credentials, refresh_token,",
    },
    {
      key: "code",
      typeFormat: "String",
      mandatory:
        "Yes if grant_type is equal to authorization_code, else not mandatory.",
      description:
        "The authorization code received from the authorization endpoint.",
      sampleValues:
        "Ckn-wrqK7ejAqAlUzqudvrS8Epay3dZ-b7B01TTcaupZAwYOOtAdGbd11qwA33ouMvDhAr4Z4-SljDMc7LdrFa2eONOKzwt0zN8oRWYijPMT37PBUIE8o5h7UdvSxlUE",
    },
    {
      key: "redirect_uri",
      typeFormat: "String",
      mandatory:
        "Yes if grant_type is equal to authorization_code, else is not mandatory.",
      description:
        "The redirect URI used in the initial authorization request.",
      sampleValues: "http://localhost:5173/",
    },
    {
      key: "client_id",
      typeFormat: "String",
      mandatory: "Yes",
      description:
        "The client identifier as registered with the Authorization Server.",
      sampleValues: "sample-client",
    },
    {
      key: "client_secret",
      typeFormat: "String",
      mandatory: "Yes",
      description:
        "The client secret as registered with the Authorization Server.",
      sampleValues: "sample-secret",
    },
    {
      key: "username",
      typeFormat: "String",
      mandatory: "Yes if grant_type is equal password, else is not mandatory.",
      description: "The resource owner’s username.",
      sampleValues: "admin",
    },
    {
      key: "password",
      typeFormat: "String",
      mandatory:
        "Yes if grant_type is equal to password, else is not mandatory.",
      description: "The resource owner’s password.",
      sampleValues: "Admin1234",
    },
    {
      key: "refresh_token",
      typeFormat: "String",
      mandatory:
        "Yes if grant_type is equal to refresh_token, else is not mandatory.",
      description: "The refresh token issued to the client.",
      sampleValues:
        "eyJraWQiOiI4NjhhYTUyZi0zY2QyLTQxMzktYjU1MC1lNGNiOWZlMDY2OTYiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImF1ZCI6InNhbXBsZS1jbGllbnQiLCJuYmYiOjE3MjE1NjExNzgsInNjb3BlIjpbIm9wZW5pZCJdLCJpc3MiOiJodHRwOi8vMTkyLjE2OC45MC4zNTo5MDAwIiwiZXhwIjoxNzIxNTYyMDc4LCJpYXQiOjE3MjE1NjExNzgsImp0aSI6Ijk4YzViOWQwLWYzNGEtNDE2MC1iMmMwLTMyNzJkMTM5OWM3NCJ9.kmGU6a34mURhsqGfKTcg7l_dmR0AFdniqQ2RspEDPyj7u32Bj6LAkdDDtbNNo2Oz9fV2kAM5p3OvPnDQE3C8DyV0FUpX0HxQ1IhaZIwITXLmEFLd0yMSmyUiVRnxJVPW37N8ft4tps8ifZNpt7b3O7wvxY5a-6rcXxpnt5K-O4IdI33l1f9_5_oW80zCgS_LaMKdqwjHup3JdTwvlvRoCuHxhEUplapdvnOB9WhiSvXSuONg2MVmSg-79kltTlc9ZV_fAGIiqucB8awNy1ULXgHyxL_Do725KZZ_odR3Ai5d2hxjL0d7KeIJbU8b22y-lKuNKSgnkZdluz57q2p6yA",
    },
    {
      key: "code_verifier",
      typeFormat: "String",
      mandatory: "Yes if PKCE is used, else is not mandatory.",
      description:
        "Is used to verify that the entity exchanging the authorization code for an access token is the same entity that initiated the authorization request.",
      sampleValues: "A8HDDqNfP1o8s6zwVquFJ_2cZ1jfHKugePC5ciAUijFPLJG2Lg",
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
      accessor: "typeFormat",
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
      property: "access_token",
      dbMapping:
        "The token that the client uses to make authenticated requests to the protected resources (APIs). It is a credential that can be used by the client to access the resource server.",
      sampleValues: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...",
    },
    {
      property: "refresh_token",
      dbMapping:
        "A token that can be used to obtain a new access token once the original access token expires. It is used to refresh the access token without requiring the resource owner to reauthorize.",
      sampleValues: "tGzv3JOkF0XG5Qx2TlKWIA….",
    },
    {
      property: "scope",
      dbMapping:
        "The scope(s) associated with the access token. This is a space-separated list of scopes that specify the level of access granted by the access token.",
      sampleValues: "read write",
    },
    {
      property: "id_token",
      dbMapping:
        "A JSON Web Token (JWT) that contains identity information about the user. It is typically included in the response when using OpenID Connect, which is an identity layer on top of OAuth 2.0.",
      sampleValues: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjE2VWY...",
    },
    {
      property: "token_type",
      dbMapping:
        "The type of token issued. Typically, it is 'Bearer', indicating that the token is a Bearer Token.",
      sampleValues: "Bearer",
    },
    {
      property: "expires_in",
      dbMapping:
        "The lifetime in seconds of the access token. This indicates how long the access token will be valid from the time it was issued.",
      sampleValues: "3600",
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
          Exchange Authorization Code with Access/Refresh Token
        </h1>
      </div>
      <br />
      <div className="space-y-2" id="#preview">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Service API
        </h3>
        <hr />
        <p>
          The API entry point To exchange an authorization code, client
          credentials, or refresh token for an access token is{" "}
          <b>POST /oauth2/token.</b> This API endpoint is implemented inside{" "}
          <b>auth-service.</b>
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
  "access_token": "eyJraWQiOiI4NjhhYTUyZi0zY2QyLTQxMzktYjU1MC1lNGNiOWZlMDY2OTYiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImF1ZCI6InNhbXBsZS1jbGllbnQiLCJuYmYiOjE3MjE1NjExNzgsInNjb3BlIjpbIm9wZW5pZCJdLCJpc3MiOiJodHRwOi8vMTkyLjE2OC45MC4zNTo5MDAwIiwiZXhwIjoxNzIxNTYyMDc4LCJpYXQiOjE3MjE1NjExNzgsImp0aSI6Ijk4YzViOWQwLWYzNGEtNDE2MC1iMmMwLTMyNzJkMTM5OWM3NCJ9.kmGU6a34mURhsqGfKTcg7l_dmR0AFdniqQ2RspEDPyj7u32Bj6LAkdDDtbNNo2Oz9fV2kAM5p3OvPnDQE3C8DyV0FUpX0HxQ1IhaZIwITXLmEFLd0yMSmyUiVRnxJVPW37N8ft4tps8ifZNpt7b3O7wvxY5a-6rcXxpnt5K-O4IdI33l1f9_5_oW80zCgS_LaMKdqwjHup3JdTwvlvRoCuHxhEUplapdvnOB9WhiSvXSuONg2MVmSg-79kltTlc9ZV_fAGIiqucB8awNy1ULXgHyxL_Do725KZZ_odR3Ai5d2hxjL0d7KeIJbU8b22y-lKuNKSgnkZdluz57q2p6yA",
  "refresh_token": "E6EIHJvlBR1f-12DhnRGeOasYjd6_QUwLkxyCneUF4UGbvQUSIfJBF3xQfHW-jctGGrUMHXNE0MIzfQ5lrwQ05mpm74EuqgrOQmv6E4J4_CKkQV88H7FZBj5KbFK66rQ",
  "scope": "openid",
  "id_token": "eyJraWQiOiI4NjhhYTUyZi0zY2QyLTQxMzktYjU1MC1lNGNiOWZlMDY2OTYiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImF1ZCI6InNhbXBsZS1jbGllbnQiLCJhenAiOiJzYW1wbGUtY2xpZW50IiwiaXNzIjoiaHR0cDovLzE5Mi4xNjguOTAuMzU6OTAwMCIsImV4cCI6MTcyMTU2Mjk3OCwiaWF0IjoxNzIxNTYxMTc4LCJqdGkiOiJkMzcyNDRhNC00MjNhLTRmZWMtYmI5Yi1lMWJjMmU2MDBlZDYifQ.TvLXFrUlVmyjKunEOq6pZAIvP28w0Ffk-vPQM4Wsox3IF8YoE7ZMP3Wp8H1xZXMuTWfb78ylafDou08b_ODSb7KU19AWW_E5p1a0nyNrG--H9201HD6L72ut4dxjwdwqn0MqdV8A3R0v8vGFHJzKXGFPdj3RKKEMjWlq0_Rn_wIpNeOI83fvLe3GESbf9HFfOXdO4Hd00Nw_cQRZhhLP-3Dp7wavMSxlsQoMRvtGjsTrZ5SZyODQl506qs1NX6NoFiqMmZFoJqKblIFMOohDs0PM_fvzSBBu-weGI8BQmuk-0pU816ejasr1WjUEiUTGVZfbWbxp3aWQRBhEocEbpQ",
  "token_type": "Bearer",
  "expires_in": 899
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
  "error": "invalid_grant"
}`}
          language="js"
        />
      </div>
    </div>
  );
}

export default Index;
