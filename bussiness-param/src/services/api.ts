import axios from "axios";
import { ParamSchema } from "./form";

export const getBussinessParam = async (param: string) => {
  try {
    const response = await axios.get(
      `http://192.168.90.35:8082/admin/params${param}`,
      {
        headers: {
          Authorization:
            "Bearer eyJraWQiOiI4NjhhYTUyZi0zY2QyLTQxMzktYjU1MC1lNGNiOWZlMDY2OTYiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJpbnRlcm5hbC1jbGllbnQiLCJhdWQiOiJpbnRlcm5hbC1jbGllbnQiLCJuYmYiOjE3MjExMDIxNTYsInNjb3BlIjpbIm9wZW5pZCIsIklOVEVSTkFMIl0sImlzcyI6Imh0dHA6Ly8xOTIuMTY4LjkwLjM1OjkwMDAiLCJleHAiOjE3MjExMDU3NTYsImlhdCI6MTcyMTEwMjE1NiwianRpIjoiYzc0MTNiMjctNmJmMy00MWY3LWFmMGMtYjY3OTExNThkZjk1In0.LSZkyji9sKvZBaxmysFzFxvsEuErxX85Y1Zl6ZOpYSiycpVlsjhlswU3WldgUI3wKjpOa_2BH6Dnh8U2mdb0XknkKRkAWSf1de_Ue1_tRURj4urOcJIbd1nbhncoDkn8Grfm7qOMky4GfMvoNRRBSE-NpV-OitQ_mI_YoAagBY_xoZTvfmqQhNpbM9oFWTh7Ybpu5PXrpw8jwb2ZRrOLbgi63HHZVkRykokr-dSeCPWMdKmiULb1AmoLVWeOy7jVKULfhhtBZP61xjYWZFJ0LLbmQxruCen06zPZL4v0DCRlQSqHRLzLNDVm7Epn_ROZYdXKcacwrE42qK9pa5XBJA",
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
          Authorization:
            "Bearer eyJraWQiOiI4NjhhYTUyZi0zY2QyLTQxMzktYjU1MC1lNGNiOWZlMDY2OTYiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJpbnRlcm5hbC1jbGllbnQiLCJhdWQiOiJpbnRlcm5hbC1jbGllbnQiLCJuYmYiOjE3MjExMDIxNTYsInNjb3BlIjpbIm9wZW5pZCIsIklOVEVSTkFMIl0sImlzcyI6Imh0dHA6Ly8xOTIuMTY4LjkwLjM1OjkwMDAiLCJleHAiOjE3MjExMDU3NTYsImlhdCI6MTcyMTEwMjE1NiwianRpIjoiYzc0MTNiMjctNmJmMy00MWY3LWFmMGMtYjY3OTExNThkZjk1In0.LSZkyji9sKvZBaxmysFzFxvsEuErxX85Y1Zl6ZOpYSiycpVlsjhlswU3WldgUI3wKjpOa_2BH6Dnh8U2mdb0XknkKRkAWSf1de_Ue1_tRURj4urOcJIbd1nbhncoDkn8Grfm7qOMky4GfMvoNRRBSE-NpV-OitQ_mI_YoAagBY_xoZTvfmqQhNpbM9oFWTh7Ybpu5PXrpw8jwb2ZRrOLbgi63HHZVkRykokr-dSeCPWMdKmiULb1AmoLVWeOy7jVKULfhhtBZP61xjYWZFJ0LLbmQxruCen06zPZL4v0DCRlQSqHRLzLNDVm7Epn_ROZYdXKcacwrE42qK9pa5XBJA",
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
          Authorization:
            "Bearer eyJraWQiOiI4NjhhYTUyZi0zY2QyLTQxMzktYjU1MC1lNGNiOWZlMDY2OTYiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJpbnRlcm5hbC1jbGllbnQiLCJhdWQiOiJpbnRlcm5hbC1jbGllbnQiLCJuYmYiOjE3MjExMDIxNTYsInNjb3BlIjpbIm9wZW5pZCIsIklOVEVSTkFMIl0sImlzcyI6Imh0dHA6Ly8xOTIuMTY4LjkwLjM1OjkwMDAiLCJleHAiOjE3MjExMDU3NTYsImlhdCI6MTcyMTEwMjE1NiwianRpIjoiYzc0MTNiMjctNmJmMy00MWY3LWFmMGMtYjY3OTExNThkZjk1In0.LSZkyji9sKvZBaxmysFzFxvsEuErxX85Y1Zl6ZOpYSiycpVlsjhlswU3WldgUI3wKjpOa_2BH6Dnh8U2mdb0XknkKRkAWSf1de_Ue1_tRURj4urOcJIbd1nbhncoDkn8Grfm7qOMky4GfMvoNRRBSE-NpV-OitQ_mI_YoAagBY_xoZTvfmqQhNpbM9oFWTh7Ybpu5PXrpw8jwb2ZRrOLbgi63HHZVkRykokr-dSeCPWMdKmiULb1AmoLVWeOy7jVKULfhhtBZP61xjYWZFJ0LLbmQxruCen06zPZL4v0DCRlQSqHRLzLNDVm7Epn_ROZYdXKcacwrE42qK9pa5XBJA",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching the access token:", error);
  }
};
