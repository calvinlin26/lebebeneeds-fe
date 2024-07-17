// import API from "mainApp/services";
import axios from "axios";
import { ParamSchema } from "./form";

const token =
  "eyJraWQiOiI4NjhhYTUyZi0zY2QyLTQxMzktYjU1MC1lNGNiOWZlMDY2OTYiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJpbnRlcm5hbC1jbGllbnQiLCJhdWQiOiJpbnRlcm5hbC1jbGllbnQiLCJuYmYiOjE3MjExODM2OTksInNjb3BlIjpbIm9wZW5pZCIsIklOVEVSTkFMIl0sImlzcyI6Imh0dHA6Ly8xOTIuMTY4LjkwLjM1OjkwMDAiLCJleHAiOjE3MjExODcyOTksImlhdCI6MTcyMTE4MzY5OSwianRpIjoiM2ExZWJjN2UtOGFjZi00MTBmLWIzODQtNDQxYTkyOGQ5ZDNmIn0.K8OnwHHwlJ5NhK4KGBhUKz54-Hsv_xhzxmMNGb63S4FV3GBGlATNk70WarDeLSvqZ2JA5g1v7dPnJJPbMSaw_hCTAlZ1QigpIOLiKNjRzSdyhgP0w7RgRx91SQLN3ubJx2NibB5Hpys5DIa0yuwCMhPDfZZihx3McLC-ggReP7F5GZYLdFLaPDQKFJekZT7nS9g4Sb9HDo6AO-bTfG3G2Itl3CVXyZoERGRbQKtK62p8j-aH6HE0UTp6g0yctvloXd0Bvz8lmpHod4tZ8KYrJpFjxCg_eKRslZq2CZVkLHwt934EioEworLK3mKtzswmfiuz4h4TSdbxjrIqfrha8g";

export const getBussinessParam = async (param: string) => {
  try {
    const response = await axios.get(
      `http://192.168.90.35:8082/admin/params${param}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    return response.data.data;
  } catch (error) {
    console.log("Error fetching admin params");
  }
};

export const getBussinessParamDetail = async ({ id }: { id: string }) => {
  try {
    const response = await axios.get(
      `http://192.168.90.35:8082/admin/params/${id}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    return response.data.data;
  } catch (error) {
    console.log("Error fetching admin params");
  }
};

export const postParam = async (data: ParamSchema) => {
  try {
    const response = await axios.post(
      "http://192.168.90.35:8082/admin/params",
      data,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching the access token:", error);
    throw error;
  }
};

export const updateParam = async (data: ParamSchema) => {
  try {
    const response = await axios.put(
      "http://192.168.90.35:8082/admin/params",
      data,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching the access token:", error);
    throw error;
  }
};