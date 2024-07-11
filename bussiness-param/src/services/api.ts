// import { API } from "mainApp/services"
import axios from "axios";

export const getBussinessParam = async (param: string) => {
  try {
    const response = await axios.get(
      `http://192.168.90.35:8082/admin/params${param}`,
      {
        headers: {
          Authorization: 
            "Bearer eyJraWQiOiI4NjhhYTUyZi0zY2QyLTQxMzktYjU1MC1lNGNiOWZlMDY2OTYiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJpbnRlcm5hbC1jbGllbnQiLCJhdWQiOiJpbnRlcm5hbC1jbGllbnQiLCJuYmYiOjE3MjA2ODU1MDYsInNjb3BlIjpbIm9wZW5pZCIsIklOVEVSTkFMIl0sImlzcyI6Imh0dHA6Ly8xOTIuMTY4LjkwLjM1OjkwMDAiLCJleHAiOjE3MjA2ODkxMDYsImlhdCI6MTcyMDY4NTUwNiwianRpIjoiM2JiNTFmYTYtZDgyZC00Y2ViLThhNzctYTgwY2MwZjBmMDBmIn0.ONxmHl-op2lPZ8m9nX3HbpzebzL-UWpATxbusC20ia4SmgQzWn6to2aGf3pLK4i_sAf8fk5DcXmMSYg54mnhlw2e6pRkseSvPxYFz47xvsTvwZoL6VncsfvTnTesfw5RomLG8oEIXdCaor66pATWTPt5Q_gZ5dSm2Iy5IufPwO_3YXA6E4vENO4i2M0uCjfdJoHWHceUGA7--pSAF5Xqv0QPbDxbXkmWs4PMVLqO65zijPBE4LBN_ASoRuCdMldQxemGqb7pTco6iWq-vaFutPGxDeIpPzsI1s6tf0pdO3M8SJnvsgCyZ2peDJiiYK1MI2ebfNYb-4-FqdttZYFa6A"
        }
      }
    );

    return response.data.data;
  } catch (error) {
    console.log("Error fetching admin params")
  }
}