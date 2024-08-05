import { API } from "mainApp/services";
import { ParamSchema } from "./form";

export const getBussinessParam = async (param: string) => {
  try {
    const response = await API.get(
      `http://192.168.90.35:8082/admin/params${param}`
    );

    return response.data.data;
  } catch (error) {
    console.log("Error fetching admin params");
  }
};

export const getBussinessParamDetail = async ({ id }: { id: string }) => {
  try {
    const response = await API.get(
      `http://192.168.90.35:8082/admin/params/${id}`
    );

    return response.data.data;
  } catch (error) {
    console.log("Error fetching admin params");
  }
};

export const postParam = async (data: ParamSchema) => {
  try {
    const response = await API.post(
      "http://192.168.90.35:8082/admin/params",
      data
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching the access token:", error);
    throw error;
  }
};
