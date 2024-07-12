import { API } from "mainApp/services";
import { UserSchema } from "./form";

export const getUser = async () => {
  try {
    const response = await API.get(
      "http://192.168.90.35:8081/users?page=0&sort=username&search=username:test"
    );

    return response.data.data;
  } catch (error) {
    console.error("Error fetching the access token:", error);
  }
};

export const getUserDetail = async (username: string) => {
  try {
    const response = await API.get(
      `http://192.168.90.35:8081/users/${username}`
    );

    return response.data.data;
  } catch (error) {
    console.error("Error fetching the access token:", error);
  }
};

export const getRole = async () => {
  try {
    const response = await API.get(
      "http://192.168.90.35:8081/roles?sort=roleCode"
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching the access token:", error);
  }
};

export const getMenus = async () => {
  try {
    const response = await API.get(
      "http://192.168.90.35:8081/menus?code=ADMIN"
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching the access token:", error);
  }
};

export const postUser = async (data: UserSchema) => {
  try {
    const payload = {
      ...data,
      active: data.active === "true",
      locked: data.locked === "true",
    };

    const response = await API.post("http://192.168.90.35:8081/users", payload);

    return response.data;
  } catch (error) {
    console.error("Error fetching the access token:", error);
  }
};

export const editUser = async (data: UserSchema) => {
  try {
    const payload = {
      ...data,
      active: data.active === "true",
      locked: data.locked === "true",
    };

    const response = await API.put("http://192.168.90.35:8081/users", payload);

    return response.data;
  } catch (error) {
    console.error("Error in editUser API call:", error);
  }
};

export const deleteUser = async (username: string) => {
  try {
    const response = await API.delete(
      `http://192.168.90.35:8081/users/${username}`
    );

    return response.data;
  } catch (error) {
    console.error("Error in editUser API call:", error);
  }
};
