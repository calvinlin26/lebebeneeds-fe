// import API from "mainApp/services";
import axios from "axios";
import { ParamSchema } from "./form";

const token =
  "eyJraWQiOiI4NjhhYTUyZi0zY2QyLTQxMzktYjU1MC1lNGNiOWZlMDY2OTYiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJpbnRlcm5hbC1jbGllbnQiLCJhdWQiOiJpbnRlcm5hbC1jbGllbnQiLCJuYmYiOjE3MjExOTIyNTgsInNjb3BlIjpbIm9wZW5pZCIsIklOVEVSTkFMIl0sImlzcyI6Imh0dHA6Ly8xOTIuMTY4LjkwLjM1OjkwMDAiLCJleHAiOjE3MjExOTU4NTgsImlhdCI6MTcyMTE5MjI1OCwianRpIjoiYjVjMTFjNjAtYzgxMC00YTdlLTk0NjItOTk0ZjgwZTYzMDUwIn0.SQ5k5LGFf5JbK9nKM3-lsNMkaEKDv0emcAV-KQ0mwI9RrlLpooNFlYjB4w5ozgPc2v5pnKm56uIpB6dIqh_kq9W7hr-ot8_uszaFkUjPi2F72I7DSztKuNDzUDqvfmkBYrN0CuuHlwDOSGwn6cBP6uaYQ2w0xR__ixFWHhZlWzebg2CvV2n0m18HF75-Vn1zXTEpgK-U6XnuP2HChpk-6zDWeyN6YYXJ9ZQtOWkp70yWngDmM6d4FlWojH_EsXcfGgq-dcBTl7YS1REUdOX39HNrRBYTuv9kb9nnk05h4Dx86DTO1xPoYKYnfbxIaqCjQ3kHqnenTZA3vB-FWx4Xkw";

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