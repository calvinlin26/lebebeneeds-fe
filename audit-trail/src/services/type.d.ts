type ApiListResponse = {
    page: number;
    pageSize: number;
    totalDataCount: number;
    totalPages: number;
    content: ApiListItem[];
  };
  
  type AuditTrailPagination = {
    page: number;
    pageSize: number;
    totalDataCount: number;
    totalPages: number;
  };
  
  type ApiListItem = {
    apiAuditId: string;
    method: string;
    path: string;
    username: string;
    host: string;
    userIp: string;
    eventDate: string;
    requestData: string;
    responseData: string;
  };

  type ActivityListResponse = {
    page: number;
    pageSize: number;
    totalDataCount: number;
    totalPages: number;
    content: ActivityListItem[];
  };
  
  type ActivityListItem = {
    activityId: string;
    username: string;
    actionCode: string;
    actionDescription: string;
    actionDate: string;
    after: string;
  };