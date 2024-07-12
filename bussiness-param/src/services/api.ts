// import { API } from "mainApp/services"
import axios from "axios";

export const getBussinessParam = async (param: string) => {
  try {
    const response = await axios.get(
      `http://192.168.90.35:8082/admin/params${param}`,
      {
        headers: {
          Authorization: 
            "Bearer eyJraWQiOiI4NjhhYTUyZi0zY2QyLTQxMzktYjU1MC1lNGNiOWZlMDY2OTYiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJpbnRlcm5hbC1jbGllbnQiLCJhdWQiOiJpbnRlcm5hbC1jbGllbnQiLCJuYmYiOjE3MjA3Njc2NDksInNjb3BlIjpbIm9wZW5pZCIsIklOVEVSTkFMIl0sImlzcyI6Imh0dHA6Ly8xOTIuMTY4LjkwLjM1OjkwMDAiLCJleHAiOjE3MjA3NzEyNDksImlhdCI6MTcyMDc2NzY0OSwianRpIjoiNjQwYTg0NmYtODhlNi00NzE1LWI0MDItMWFkMTk1MmZiMTM1In0.FFuBcvEd3jXPBku4qqd6rjxKaen6W-Mb1KEBOhZWJVyPpyXms-9u7xg_qTcr1b7Vz7-22hpcRaV0dROdgvPdCGRzCVTy4ULUXZ_0Jy7kgCjkPrnRNJx7A8dqpQegyCYUPCtsV9Xqwjf_rehO1KWqSQP4GWQQdCn2OYS7fI31OD_NGoo9sks3YGZQbGPW3uD5RxiC90G7Yufgx8PVr1AeRXYmxWxBeIvyIJSWNS2cKO8Htu-XEC3DOOG7ZRRF0RrDm6qNUkTUZLeFDUuWa-X05Eh-E3ExVTs9tQFiXi4IjAwcHq9d6ZRwd-elTlsdms-dtuexQjF4ETZWUEJFlcf8Pw"
        }
      }
    );

    return response.data.data;
  } catch (error) {
    console.log("Error fetching admin params")
  }
}