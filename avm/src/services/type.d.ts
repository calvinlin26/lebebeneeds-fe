type AVMListResponse = {
  page: number;
  pageSize: number;
  totalDataCount: number;
  totalPages: number;
  content: NotificationListItem[];
};

type AVMPagination = {
  page: number;
  pageSize: number;
  totalDataCount: number;
  totalPages: number;
};

type AVMListItem = {
  createdBy: string;
  modifiedBy: string;
  createdDate: string;
  modifiedDate: string;
  active: boolean;
  id: string;
  name: string;
  description: string;
};
