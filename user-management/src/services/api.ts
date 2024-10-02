import { API } from "mainApp/services";
import { PostRoleSchema, UserSchema } from "./form";

export const getUser = async (params: {}) => {
  try {
    const response = await API.get(`${(window as any).__RUNTIME_CONFIG__.REACT_APP_USER_MANAGEMENT_ENDPOINT_URL}users`, {
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
      `${(window as any).__RUNTIME_CONFIG__.REACT_APP_USER_MANAGEMENT_ENDPOINT_URL}users/${username}`
    );

    return response.data.data;
  } catch (error) {
    console.error("Error fetching the access token:", error);
  }
};

export const getRoleDetail = async (roleCode: string) => {
  try {
    const response = await API.get(
      `${(window as any).__RUNTIME_CONFIG__.REACT_APP_USER_MANAGEMENT_ENDPOINT_URL}roles/${roleCode}`
    );

    return response.data.data;
  } catch (error) {
    console.error("Error fetching the access token:", error);
  }
};

export const getRole = async (params: SearchParamQuery) => {
  try {
    const response = await API.get(
      `${(window as any).__RUNTIME_CONFIG__.REACT_APP_USER_MANAGEMENT_ENDPOINT_URL}roles?sort=roleCode`,
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
    const response = await API.get(`${(window as any).__RUNTIME_CONFIG__.REACT_APP_USER_MANAGEMENT_ENDPOINT_URL}menus`, {
      params,
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching the access token:", error);
  }
};

export const getServices = async (params: SearchParamQuery) => {
  try {
    const response = await API.get(`${(window as any).__RUNTIME_CONFIG__.REACT_APP_USER_MANAGEMENT_ENDPOINT_URL}services`, {
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

    const response = await API.post(`${(window as any).__RUNTIME_CONFIG__.REACT_APP_USER_MANAGEMENT_ENDPOINT_URL}users`, payload);

    return response.data;
  } catch (error) {
    console.error("Error fetching the access token:", error);
    throw error;
  }
};

export const editUser = async (data: UserSchema) => {
  try {
    const payload = {
      ...data,
      active: data.active === "true",
      locked: data.locked === "true",
    };

    const response = await API.put(`${(window as any).__RUNTIME_CONFIG__.REACT_APP_USER_MANAGEMENT_ENDPOINT_URL}users`, payload);

    return response.data;
  } catch (error) {
    console.error("Error in editUser API call:", error);
    throw error;
  }
};

export const deleteUser = async (username: string) => {
  try {
    const response = await API.delete(
      `${(window as any).__RUNTIME_CONFIG__.REACT_APP_USER_MANAGEMENT_ENDPOINT_URL}users/${username}`
    );

    return response.data;
  } catch (error) {
    console.error("Error in editUser API call:", error);
  }
};

export const deleteRole = async (roleCode: string) => {
  try {
    const response = await API.delete(
      `${(window as any).__RUNTIME_CONFIG__.REACT_APP_USER_MANAGEMENT_ENDPOINT_URL}roles/${roleCode}`
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

    const response = await API.post(`${(window as any).__RUNTIME_CONFIG__.REACT_APP_USER_MANAGEMENT_ENDPOINT_URL}roles`, payload);

    return response.data;
  } catch (error) {
    console.error("Error fetching the access token:", error);
    throw error;
  }
};

export const editRole = async (data: PostRoleSchema) => {
  try {
    const payload = {
      ...data,
      active: data.active === "true",
    };

    const response = await API.put(`${(window as any).__RUNTIME_CONFIG__.REACT_APP_USER_MANAGEMENT_ENDPOINT_URL}roles`, payload);

    return response.data;
  } catch (error) {
    console.error("Error in editUser API call:", error);
    throw error;
  }
};
