import { API } from "mainApp/services";

export const getApiList = async (params: {}) => {
    try {
      const response = await API.get(
        `${
          (window as any).__RUNTIME_CONFIG__.REACT_APP_AUDIT_TRAIL_ENDPOINT_URL
        }audit/api`,
        {
          params: params,
        }
      );
  
      return response.data.data;
    } catch (error) {
      console.error("Error fetching the access token:", error);
    }
  };

  export const getApiListDownload = async (query: {}) => {
    try {
      const response = await API.get(
        `${
          (window as any).__RUNTIME_CONFIG__.REACT_APP_AUDIT_TRAIL_ENDPOINT_URL
        }audit/api/download?${query}`,
        {
          responseType: 'blob',
        }
      );
  
      return response;
    } catch (error) {
      console.error("Error fetching the access token:", error);
    }
  };

  export const getActivityListDownload = async (query: {}) => {
    try {
      const response = await API.get(
        `${
          (window as any).__RUNTIME_CONFIG__.REACT_APP_AUDIT_TRAIL_ENDPOINT_URL
        }audit/activity/download?${query}`,
        {
          responseType: 'blob',
        }
      );
  
      return response;
    } catch (error) {
      console.error("Error fetching the access token:", error);
    }
  };

  export const getApiDetailList = async (id: string) => {
    try {
      const response = await API.get(
        `${
          (window as any).__RUNTIME_CONFIG__.REACT_APP_AUDIT_TRAIL_ENDPOINT_URL
        }audit/api/${id}`,
      );
  
      return response.data.data;
    } catch (error) {
      console.error("Error fetching the access token:", error);
    }
  };

  export const getActivityDetailList = async (id: string) => {
    try {
      const response = await API.get(
        `${
          (window as any).__RUNTIME_CONFIG__.REACT_APP_AUDIT_TRAIL_ENDPOINT_URL
        }audit/activity/${id}`,
      );
  
      return response.data.data;
    } catch (error) {
      console.error("Error fetching the access token:", error);
    }
  };
  

  export const getActivityList = async (params: {}) => {
    try {
      const response = await API.get(
        `${
          (window as any).__RUNTIME_CONFIG__.REACT_APP_AUDIT_TRAIL_ENDPOINT_URL
        }audit/activity`,
        {
          params: params,
        }
      );
  
      return response.data.data;
    } catch (error) {
      console.error("Error fetching the access token:", error);
    }
  };
  