// import { API } from "mainApp/services"
import axios from "axios";

export const getBussinessParam = async () => {
  try {
    const response = await axios.get(
      "http://192.168.90.35:8082/admin/params",
      {
        headers: {
          Authorization: 
            "Bearer eyJraWQiOiI4NjhhYTUyZi0zY2QyLTQxMzktYjU1MC1lNGNiOWZlMDY2OTYiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJpbnRlcm5hbC1jbGllbnQiLCJhdWQiOiJpbnRlcm5hbC1jbGllbnQiLCJuYmYiOjE3MjA2MDE2ODMsInNjb3BlIjpbIm9wZW5pZCIsIklOVEVSTkFMIl0sImlzcyI6Imh0dHA6Ly8xOTIuMTY4LjkwLjM1OjkwMDAiLCJleHAiOjE3MjA2MDUyODMsImlhdCI6MTcyMDYwMTY4MywianRpIjoiYTA3MjQ0MjctMjgzYi00ZjAzLWE5YzctMDI2YjYyOTg3M2IyIn0.U6UIAGIbyuTM2soA0YHEoMjiPlsoiJXqUD3CnyccwDihvwvqPYeIfL8fTHRI9IgqjOmURBIh8BNph0j9fVlRr1JxfiadIFo63YXp1a2CjBHfyxRB55zLUNZhxCCITAJ6nIoMT21La5-IJzsuzb3C3bJyFZ8fK69JyM45EGYlupLYjLaGJ9QLVzlw-OqePvfwiWTM-QQb3eUYYth0sTm9n7PHYkbzsXkX9iAnxvjOSj4m_-ZpXrmGN9uc2coD13-MCkUEfJ4EOLcdFN2Zk_2xwNteXUEH2_b6M-raPad_QP5kYhbL8QLRPvG1nKjFTQqXg2UKnhhz_gH3GWpIMGpBHw"
        }
      }
    );

    return response.data.data;
  } catch (error) {
    console.log("Error fetching admin params")
  }
}