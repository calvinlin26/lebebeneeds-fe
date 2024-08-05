type tokenPayload = {
  grant_type: string;
  redirect_uri?: string;
  code?: string;
  code_verifier?: string;
  refreshToken?: string;
};

type tokenResponse = {
  access_token: string;
  refresh_token: string;
  scope: string;
  id_token: string;
  token_type: string;
  expires_in: number;
};

type introspectResponse = {
  active: boolean;
  sub: string;
  aud: [];
  nbf: number;
  scope: string;
  iss: string;
  exp: number;
  iat: number;
  jti: string;
  client_id: string;
  token_type: string;
  menu: menuIntrospect[]
  service: serviceIntrospect[]
  authorities: [];
}

type menuIntrospect = {
  menuCode: string;
  label: string;
  description: string;
  url: string;
  parent: string;
  orderNo: string
}

type serviceIntrospect = {
  serviceCode: string;
  url: string;
}