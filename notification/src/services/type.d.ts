type NotificationListResponse = {
  page: number;
  pageSize: number;
  totalDataCount: number;
  totalPages: number;
  content: NotificationListItem[];
};

type NotificationListItem = {
  createdBy: string;
  createdDate: string;
  modifiedBy: string;
  modifiedDate: string;
  active: boolean;
  notificationCode: string;
  notificationType: string;
  title: string;
  content: string;
  image: string;
};

type NotificationDetail = {
  createdBy: string;
  createdDate: string;
  modifiedBy: string;
  modifiedDate: string;
  active: boolean;
  notificationCode: string;
  notificationType: string;
  title: string;
  content: string;
  image: string;
};
