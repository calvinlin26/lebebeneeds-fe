import { API } from "mainApp/services"

export const getBussinessParam = async () => {
  try {
    const response = await API.get(
      "http://192.168.90.35:8082/admin/params"
    );

    return response.data.data;
  } catch (error) {
    console.log("Error fetching admin params")
  }
}