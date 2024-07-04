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

type UserListResponse = {
  page: number;
  pageSize: number;
  totalDataCount: number;
  totalPages: number;
  content: UserListItem[];
};

type UserListItem = {
  active: boolean;
  createdBy: string;
  createdDate: string;
  modifiedBy: string;
  modifiedDate: string;
  username: string;
  name: string;
  email: string;
  branchCode: string;
  title: string;
  invalidPasswordRetry: number;
  locked: boolean;
};
