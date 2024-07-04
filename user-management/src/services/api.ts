import { API } from "mainApp/services";
// import axios from "axios";

export const getUser = async () => {
  try {
    const response = await API.get(
      "http://192.168.90.35:8081/users?page=0&sort=username&search=username:test"
      // {
      //   headers: {
      //     Authorization:
      //       "Bearer eyJraWQiOiI4NjhhYTUyZi0zY2QyLTQxMzktYjU1MC1lNGNiOWZlMDY2OTYiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImF1ZCI6InNhbXBsZS1jbGllbnQiLCJuYmYiOjE3MTk4MzcwODgsInNjb3BlIjpbIm9wZW5pZCJdLCJpc3MiOiJodHRwOi8vMTkyLjE2OC45MC4zNTo5MDAwIiwiZXhwIjoxNzE5ODM3OTg4LCJpYXQiOjE3MTk4MzcwODgsImp0aSI6IjNmYjI2NTZlLWMyMDgtNDQzMC1hYTg5LTFhMmRkZmQyNGFiMCJ9.SfH89btxWbd2hGqjypaOgHscEbJyIFffvdoQceJODfc0o1J_5SHGwcXp4FvdcnMHxNbdyEJ9gtpRG2QO-1O92oaY58jwRRjJEh8-QyRibgoyS8Hhq9NIGKXFsvDE7DxuMZW21NK9bS_Mbgvg-UwXvrUY4wVFIy1BnvzAxgutykGSUxNROVi2Fz6POCrbxhN0LQVmT1cDZT7iTEL1v8nkIh-TsyFKZykkjQDTqpToC6GABFWR70IdKK4VpB-jppkN_1HdY3ddM4FFnTEO_CB2jmd3S4MViycJpx4Ewm7jvcTiH0VCudQHTk_9kbiCpdB30OUk4ju2JRNzHLQ8M6uCRQ",
      //   },
      // }
    );

    return response.data.data;
  } catch (error) {
    console.error("Error fetching the access token:", error);
  }
};
