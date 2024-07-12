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

type SearchParamQuery = {
  page: number,
  pageSize: number,
  search: string,
}

type AdminParamPagination = {
  page: number,
  pageSize: number,
  totalDataCount: number,
  totalPages: number;
}

type AdminParamResponse = {
  page: number;
  pageSize: number;
  totalDataCount: number;
  totalPages: number;
  content: AdminParamListItem[];
};

type AdminParamListItem = {
  param: ParamItem;
  paramTxt: ParamTxtItem;
};

type ParamItem = {
  active: boolean;
  id: string;
  category: string;
  frontEnd: boolean | null;
  orderNo: string;
  valueType: string;
}

type ParamTxtItem = {
  langCode: string;
  text: string;
  description: string;
}

type SearchFilter = {
  label: string;
  value: string;
}