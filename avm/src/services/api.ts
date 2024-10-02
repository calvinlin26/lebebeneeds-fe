import { API } from "mainApp/services";
import { AddAVMSchema } from "./form";

export const getStatus = async ({ status }: any) => {
  try {
    const response = await API.post(
      `${
        (window as any).__RUNTIME_CONFIG__.REACT_APP_AVM_ENDPOINT_URL
      }avm-service/trx/read/find-${status}?page=0&size=1`,
      {
        functionCodes: [],
        businessKeyLike: "",
        allFunc: true,
      }
    );

    return response?.data?.data?.content;
  } catch (error) {
    console.error("Error fetching the access token:", error);
  }
};

export const getLevelByModelId = async (modelId: string) => {
  try {
    const response = await API.get(
      `${
        (window as any).__RUNTIME_CONFIG__.REACT_APP_AVM_ENDPOINT_URL
      }avm-service/master/levels/by-model-id/${modelId}`
    );

    return response?.data?.data ?? [];
  } catch (error) {
    console.error("Error fetching the access token:", error);
  }
};

export const getLevelById = async (id: string) => {
  try {
    const response = await API.get(
      `${
        (window as any).__RUNTIME_CONFIG__.REACT_APP_AVM_ENDPOINT_URL
      }avm-service/master/level-setup/${id}`
    );

    return response?.data?.data ?? [];
  } catch (error) {
    console.error("Error fetching the access token:", error);
  }
};

export const getEligibilityRules = async (id: string) => {
  try {
    const response = await API.get(
      `${
        (window as any).__RUNTIME_CONFIG__.REACT_APP_AVM_ENDPOINT_URL
      }avm-service/master/eligibility-rules/by-model-id/${id}`
    );

    return response?.data?.data;
  } catch (error) {
    console.error("Error fetching the access token:", error);
  }
};

export const getGroups = async (params?: any) => {
  try {
    const response = await API.get(
      `${
        (window as any).__RUNTIME_CONFIG__.REACT_APP_AVM_ENDPOINT_URL
      }avm-service/master/groups`,
      { params }
    );

    return response?.data?.data;
  } catch (error) {
    console.error("Error fetching the access token:", error);
  }
};

export const getUsers = async (params?: any) => {
  try {
    const response = await API.get(
      `${
        (window as any).__RUNTIME_CONFIG__.REACT_APP_AVM_ENDPOINT_URL
      }avm-service/master/users`,
      { params }
    );

    return response?.data?.data;
  } catch (error) {
    console.error("Error fetching the access token:", error);
  }
};

export const setupLevel = async (data: any) => {
  try {
    const response = await API.post(
      `${
        (window as any).__RUNTIME_CONFIG__.REACT_APP_AVM_ENDPOINT_URL
      }avm-service/master/level-setup`,
      data
    );

    return response;
  } catch (error) {
    console.error("Error fetching the access token:", error);
    throw error;
  }
};

export const getModelSetup = async (modelId: string) => {
  try {
    const response = await API.get(
      `${
        (window as any).__RUNTIME_CONFIG__.REACT_APP_AVM_ENDPOINT_URL
      }avm-service/master/model-setup/${modelId}`
    );

    return response?.data?.data ?? [];
  } catch (error) {
    console.error("Error fetching the access token:", error);
  }
};

export const getAVMList = async (params: {}) => {
  try {
    const response = await API.get(
      `${
        (window as any).__RUNTIME_CONFIG__.REACT_APP_AVM_ENDPOINT_URL
      }avm-service/master/models`,
      {
        params: params,
      }
    );

    return response.data.data;
  } catch (error) {
    console.error("Error fetching the access token:", error);
  }
};

export const deleteAVM = async (code: string) => {
  try {
    const response = await API.delete(
      `${
        (window as any).__RUNTIME_CONFIG__.REACT_APP_AVM_ENDPOINT_URL
      }avm-service/master/model/${code}`
    );

    return response.data;
  } catch (error) {
    console.error("Error in editUser API call:", error);
  }
};

export const postAvm = async (data: AddAVMSchema) => {
  try {
    const payload = {
      ...data,
    };
    const response = await API.post(`${
      (window as any).__RUNTIME_CONFIG__.REACT_APP_AVM_ENDPOINT_URL
    }avm-service/master/model-setup`, payload);
    return response.data;
  } catch (error) {
    console.error("Error fetching the access token:", error);
  }
};
