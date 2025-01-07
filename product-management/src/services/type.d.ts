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
  page: number;
  pageSize: number;
  search: string;
  searchField: string;
};

type Pagination = {
  page: number;
  pageSize: number;
  totalDataCount: number;
  totalPages: number;
};

type MasterDataResponse = {
  page: number;
  pageSize: number;
  totalDataCount: number;
  totalPages: number;
  content: MasterData[];
};

type MasterData = {
  productCode: string;
  productName: string;
  productDescription: string;
  content: string;
  productVariants: any[];
};

type ProductVariant = {
  variantCode: string;
  variantName: string;
  unitType: string;
};

type StockVariant = {
  variantCode: string;
  variantName: string;
  quantity: number;
};
