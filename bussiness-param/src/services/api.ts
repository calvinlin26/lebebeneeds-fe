// import API from "mainApp/services";
import axios from "axios";
import { ParamSchema } from "./form";

const token =
  "eyJraWQiOiI4NjhhYTUyZi0zY2QyLTQxMzktYjU1MC1lNGNiOWZlMDY2OTYiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJpbnRlcm5hbC1jbGllbnQiLCJhdWQiOiJpbnRlcm5hbC1jbGllbnQiLCJuYmYiOjE3MjExMTM2MTEsInNjb3BlIjpbIm9wZW5pZCIsIklOVEVSTkFMIl0sImlzcyI6Imh0dHA6Ly8xOTIuMTY4LjkwLjM1OjkwMDAiLCJleHAiOjE3MjExMTcyMTEsImlhdCI6MTcyMTExMzYxMSwianRpIjoiODE3ZTM1OWMtZmJkMC00YjFlLTg3NGEtMTA0MzE0NjI3NGQ0In0.Z0K2BzM1rQm4mS87pzBoj8TPpeS-lsOeyiZTJYgF5Gs7PpEjSm-emDzFRpJd4aCZOGcbJNUWsVR6F7A4d-lVl2SVFYzNED73kArxO8ALCwkhot0-0isokegtgLpbm90Oyj39dPx7CsAqnZQ7RnfjnRBtjVmjSiGq_Yyto0ucXz-hyRE_t1V2rauZrTLUDp0nHQfqv0P-Q2sllWZbbhVnNy28GYweyxqCsMYhxU6HafSb7-w1LzXgn4hXw91cYDzAND820r5IroHiovAfkvEHJtkNXCEW1jtk6JRb0bB_C1H4azPbTfdMQWpzgwm-Dx0F48JRAVSln_5MgrjnIEhLcQ";

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