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

type UserDetail = {
  active: boolean;
  modifiedBy: string;
  modifiedDate: string;
  username: string;
  name: string;
  email: string;
  branchCode: string;
  title: string;
  invalidPasswordRetry: number;
  locked: boolean;
  roles: RoleListItem[];
};

type RoleListResponse = {
  page: number;
  pageSize: number;
  totalDataCount: number;
  totalPages: number;
  content: RoleListItem[];
};

type RoleListItem = {
  active: string;
  createdBy: string;
  createdDate: string;
  modifiedBy: string;
  modifiedDate: string;
  roleCode: string;
  roleName: string;
  description: string;
  menus: RoleListMenus[];
  services: RoleListServices[];
};

type RoleListMenus = {
  menuCode: string;
  label: string;
  description: string;
  url: string;
  parent: string;
  orderNo: string;
  services: RoleListServicesMenu[];
};

type RoleListServices = {
  serviceCode: string;
  url: string;
};

type RoleListServicesMenu = {
  serviceCode: string;
  url: string;
};

type MenuList = {
  menuCode: string;
  label: string;
  description: string;
  url: string;
  parent: string;
  orderNo: string;
  active: boolean;
  allowed: boolean;
};

type MenuListResponse = {
  page: number;
  pageSize: number;
  totalDataCount: number;
  totalPages: number;
  content: MenuList[];
};

type ServicesListResponse = {
  page: number;
  pageSize: number;
  totalDataCount: number;
  totalPages: number;
  content: RoleListServices[];
};

type MenuListResponse = {
  page: number;
  pageSize: number;
  totalDataCount: number;
  totalPages: number;
  content: RoleListServices[];
};

type RoleData = {
  roleCode: string;
  action: JSX.Element;
};

type RoleDetail = {
  active: true,
  roleCode: string;
  roleName: string;
  description: string;
  menus: RoleListMenus[];
  services: RoleListServices[];
}

type StatusOption = {
  value: string;
  label: string;
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