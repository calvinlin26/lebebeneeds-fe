// import { API } from "mainApp/services"
import axios from "axios";

export const getBussinessParam = async (param: string) => {
  try {
    const response = await axios.get(
      `http://192.168.90.35:8082/admin/params${param}`,
      {
        headers: {
          Authorization: 
            "Bearer eyJraWQiOiI4NjhhYTUyZi0zY2QyLTQxMzktYjU1MC1lNGNiOWZlMDY2OTYiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJpbnRlcm5hbC1jbGllbnQiLCJhdWQiOiJpbnRlcm5hbC1jbGllbnQiLCJuYmYiOjE3MjA3NTAwNjYsInNjb3BlIjpbIm9wZW5pZCIsIklOVEVSTkFMIl0sImlzcyI6Imh0dHA6Ly8xOTIuMTY4LjkwLjM1OjkwMDAiLCJleHAiOjE3MjA3NTM2NjYsImlhdCI6MTcyMDc1MDA2NiwianRpIjoiNmQwZTA3OWMtNDFlNy00YzA3LWFiOTEtZTJhMjE0N2JjZjM5In0.Go4Acj1jX-Ums8GtXXD0CHMeB4YKPXDreYFNc36jEBmI9fskEnQsSouipXtQMyhhe8X0HnMqkrXcuAEfnH9i65cH7dFEH1FkfPRWC4iQ0yozxICDhlz5DdhxFBcCGD4UK-bvJFnCaCS65RbZAVMUYpDv1bZ_0LwhKAnVEKDQDgR-EPIXDpCynS56bXmR8CrI29UH7WHvPl2QCcsNP60YNFD6MgSZIulqGVSl5771kMpJtiL6XRTu1szZGDFQ_DqvSmEEfoArW9A_-Ma-6eBP7Wusujp2PU6JQqk1qI-t1jb7nY4nG_5MWUd6iE5c3DgqevA7VIbvOa72mmBGffL0kg"
        }
      }
    );

    return response.data.data;
  } catch (error) {
    console.log("Error fetching admin params")
  }
}