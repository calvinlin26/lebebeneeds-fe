import { API } from "mainApp/services";
import { NotificationSchema } from "./form";

export const getNotificationList = async (params: {}) => {
  try {
    const response = await API.get(`${(window as any).__RUNTIME_CONFIG__.REACT_APP_NOTIFICATION_ENDPOINT_URL}notification`, {
      params: params,
    });

    return response.data.data;
  } catch (error) {
    console.error("Error fetching the access token:", error);
  }
};

export const getNotificationDetail = async (code: string) => {
  try {
    const response = await API.get(
      `${(window as any).__RUNTIME_CONFIG__.REACT_APP_NOTIFICATION_ENDPOINT_URL}notification/${code}`
    );

    return response.data.data;
  } catch (error) {
    console.error("Error fetching the access token:", error);
  }
};

export const deleteNotification = async (code: string) => {
  try {
    const response = await API.delete(
      `${(window as any).__RUNTIME_CONFIG__.REACT_APP_NOTIFICATION_ENDPOINT_URL}notification/${code}`
    );

    return response.data;
  } catch (error) {
    console.error("Error in editUser API call:", error);
  }
};

export const postNotification = async (data: NotificationSchema) => {
  try {
    const response = await API.post(
      `${(window as any).__RUNTIME_CONFIG__.REACT_APP_NOTIFICATION_ENDPOINT_URL}notification`,
      data
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching the access token:", error);
    throw error;
  }
};

export const putNotification = async (data: NotificationSchema) => {
  try {
    const response = await API.put(
      `${(window as any).__RUNTIME_CONFIG__.REACT_APP_NOTIFICATION_ENDPOINT_URL}notification`,
      data
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching the access token:", error);
    throw error;
  }
};
