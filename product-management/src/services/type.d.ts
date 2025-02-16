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
  productId: string;
  productCode: string;
  productName: string;
  description: string;
  variants: Variant[];
};

type Variant = {
  variantId: string;
  variantCode: string;
  variantName: string;
  unitTypeId: string;
  unitTypeCode: string;
  unitTypeName: string;
  quantity: number;
  modifiedDate: string;
  modifiedBy: string;
};

type UnitData = {
  unitTypeId: string;
  unitCode: string;
  unitName: string;
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

type MarketPlace = {
  active: boolean;
  createdBy: string;
  createdDate: string;
  modifiedBy: string;
  modifiedDate: string;
  code: string;
  category: string;
  frontEnd: boolean;
  paramValue: string;
  orderNo: string;
  valueType: string;
  paramTxt: any[];
};
