import { API } from "mainApp/services";
import { ParamSchema } from "./form";

export const getBusinessParam = async (param: string) => {
  console.log()
  try {
    const response = await API.get(
      `${(window as any).__RUNTIME_CONFIG__.REACT_APP_BUSINESS_PARAM_ENDPOINT_URL}admin/params${param}`
    );

    return response.data.data;
  } catch (error) {
    console.log("Error fetching admin params");
  }
};

export const getBusinessParamDetail = async ({ id }: { id: string }) => {
  try {
    const response = await API.get(
      `${(window as any).__RUNTIME_CONFIG__.REACT_APP_BUSINESS_PARAM_ENDPOINT_URL}admin/params/${id}`
    );

    return response.data.data;
  } catch (error) {
    console.log("Error fetching admin params");
  }
};

export const postParam = async (data: ParamSchema) => {
  try {
    const response = await API.post(
      `${(window as any).__RUNTIME_CONFIG__.REACT_APP_BUSINESS_PARAM_ENDPOINT_URL}admin/params`,
      data
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching the access token:", error);
    throw error;
  }
};
