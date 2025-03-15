import { API } from "mainApp/services";
import { MasterDataSchema, StockVariantSchema } from "./form";

export const getMasterData = async (params: string) => {
  try {
    const response = await API.get(
      `${
        (window as any).__RUNTIME_CONFIG__
          .REACT_APP_PRODUCT_MANAGEMENT_ENDPOINT_URL
      }master/list${params}`
    );

    return response.data.data;
  } catch (error) {
    console.error("Error fetching the access token:", error);
  }
};

export const getUnitData = async () => {
  try {
    const response = await API.get(
      `${
        (window as any).__RUNTIME_CONFIG__
          .REACT_APP_PRODUCT_MANAGEMENT_ENDPOINT_URL
      }master/unitTypes`
    );

    return response.data.data;
  } catch (error) {
    console.error("Error fetching the access token:", error);
  }
};

export const getMasterDetail = async (id: string) => {
  try {
    const response = await API.get(
      `${
        (window as any).__RUNTIME_CONFIG__
          .REACT_APP_PRODUCT_MANAGEMENT_ENDPOINT_URL
      }master/${id}`
    );

    return response.data.data;
  } catch (error) {
    console.error("Error fetching the access token:", error);
  }
};

export const postMaterData = async (
  data: MasterDataSchema,
  isEdit: boolean,
  detail: MasterData | undefined
) => {
  try {
    const payload = isEdit
      ? {
          ...data,
          productId: detail?.productId,
        }
      : {
          ...data,
        };

    const response = await API.post(
      `${
        (window as any).__RUNTIME_CONFIG__
          .REACT_APP_PRODUCT_MANAGEMENT_ENDPOINT_URL
      }master/upsert`,
      payload
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching the access token:", error);
    throw error;
  }
};

export const getStockVariant = async (params: string) => {
  try {
    const response = await API.get(
      `${
        (window as any).__RUNTIME_CONFIG__
          .REACT_APP_PRODUCT_MANAGEMENT_ENDPOINT_URL
      }stock/list${params}`
    );

    return response.data.data;
  } catch (error) {
    console.error("Error fetching the access token:", error);
  }
};

export const postStockAdjustment = async (payload: StockVariantSchema) => {
  try {
    const response = await API.post(
      `${
        (window as any).__RUNTIME_CONFIG__
          .REACT_APP_PRODUCT_MANAGEMENT_ENDPOINT_URL
      }stock/manualAdjustment`,
      payload
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching the access token:", error);
    throw error;
  }
};

export const postAdjustByCsv = async (file: File, loaderType: string) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("loaderType", loaderType);

    const response = await API.post(
      `${
        (window as any).__RUNTIME_CONFIG__
          .REACT_APP_PRODUCT_MANAGEMENT_ENDPOINT_URL
      }stock/csvAdjustment`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error uploading the file:", error);
    throw error;
  }
};

export const getMarketPlace = async () => {
  try {
    const response = await API.get(
      `${
        (window as any).__RUNTIME_CONFIG__.REACT_APP_BUSINESS_PARAM_ENDPOINT_URL
      }backend/params/categories?category=MARKETPLACE`
    );

    return response.data.data;
  } catch (error) {
    console.error("Error fetching the access token:", error);
  }
};
