import { API } from "mainApp/services";
import { PostRoleSchema, UserSchema } from "./form";

export const getUser = async (params: {}) => {
  try {
    const response = await API.get("http://192.168.90.35:8081/users", {
      params: params,
    });

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

export const getRoleDetail = async (roleCode: string) => {
  try {
    const response = await API.get(
      `http://192.168.90.35:8081/roles/${roleCode}`
    );

    return response.data.data;
  } catch (error) {
    console.error("Error fetching the access token:", error);
  }
};

export const getRole = async (params: SearchParamQuery) => {
  try {
    const response = await API.get(
      "http://192.168.90.35:8081/roles?sort=roleCode",
      {
        params,
      }
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching the access token:", error);
  }
};

export const getMenus = async (params: SearchParamQuery) => {
  try {
    const response = await API.get("http://192.168.90.35:8081/menus", {
      params,
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching the access token:", error);
  }
};

export const getServices = async (params: SearchParamQuery) => {
  try {
    const response = await API.get("http://192.168.90.35:8081/services", {
      params,
    });
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

export const deleteRole = async (roleCode: string) => {
  try {
    const response = await API.delete(
      `http://192.168.90.35:8081/roles/${roleCode}`
    );

    return response.data;
  } catch (error) {
    console.error("Error in editUser API call:", error);
  }
};

export const postRole = async (data: PostRoleSchema) => {
  try {
    const payload = {
      ...data,
      active: data.active === "true",
    };

    const response = await API.post("http://192.168.90.35:8081/roles", payload);

    return response.data;
  } catch (error) {
    console.error("Error fetching the access token:", error);
  }
};

export const editRole = async (data: PostRoleSchema) => {
  try {
    const payload = {
      ...data,
      active: data.active === "true",
    };

    const response = await API.put("http://192.168.90.35:8081/roles", payload);

    return response.data;
  } catch (error) {
    console.error("Error in editUser API call:", error);
  }
};
