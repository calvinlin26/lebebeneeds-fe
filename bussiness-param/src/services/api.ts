// import API from "mainApp/services";
import axios from "axios";
import { ParamSchema } from "./form";

const token =
  "eyJraWQiOiI4NjhhYTUyZi0zY2QyLTQxMzktYjU1MC1lNGNiOWZlMDY2OTYiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJpbnRlcm5hbC1jbGllbnQiLCJhdWQiOiJpbnRlcm5hbC1jbGllbnQiLCJuYmYiOjE3MjExODg1NTksInNjb3BlIjpbIm9wZW5pZCIsIklOVEVSTkFMIl0sImlzcyI6Imh0dHA6Ly8xOTIuMTY4LjkwLjM1OjkwMDAiLCJleHAiOjE3MjExOTIxNTksImlhdCI6MTcyMTE4ODU1OSwianRpIjoiMWI5MWQwM2ItZmQwZS00YjFhLWJlNjAtOTIwN2UwZGY3ZDQ5In0.U10Ofk1ooMMv9pGYB8wib0-EuegZFEr3RyAz-wUnYhgz7cVJmyjEYYlp-qNNjb6VmVZXXb0gDY4WNoWKBvqkI97sRwJ94_JOE4z7x0nEwjP6gDxkLyu40-8F4lnl0cAlHuXyjRgDSWdEW-4LTPp29D9opwm0f5LUEnsSTtEN68sneVMu44J9ZUoqJFGEhzeRRcsqAbDaxc3QjxflUxgAwErlSBVY-AM2U9Oy7vq2-OLn-V2QiU-WTyb0YuJ5SAoLZgGUtx9Mbk-_iRBK-4NQdWYW-rBKYuxz2rv_8q6vGnrq38X7dh4PWTt5t7jWO214Mrchdq-ANiV1-BAV5UuIcg";

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