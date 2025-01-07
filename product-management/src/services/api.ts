// import { API } from "mainApp/services";

export const getMasterData = async () =>
  // params: {}
  {
    try {
      // const response = await API.get(
      //   `${
      //     (window as any).__RUNTIME_CONFIG__
      //       .REACT_APP_USER_MANAGEMENT_ENDPOINT_URL
      //   }users`,
      //   {
      //     params: params,
      //   }
      // );

      // return response.data.data;
      return {
        page: 1,
        pageSize: 10,
        totalDataCount: 2,
        totalPages: 1,
        content: [
          {
            productCode: "string",
            productName: "string",
            productDescription: "string",
            content: "string",
            productVariants: [],
          },
        ],
      };
    } catch (error) {
      console.error("Error fetching the access token:", error);
    }
  };

export const getStockVariant = async () =>
  // params: {}
  {
    try {
      // const response = await API.get(
      //   `${
      //     (window as any).__RUNTIME_CONFIG__
      //       .REACT_APP_USER_MANAGEMENT_ENDPOINT_URL
      //   }users`,
      //   {
      //     params: params,
      //   }
      // );

      // return response.data.data;
      return {
        page: 1,
        pageSize: 10,
        totalDataCount: 2,
        totalPages: 1,
        content: [
          {
            variantCode: "string",
            variantName: "string",
            quantity: 1,
          },
        ],
      };
    } catch (error) {
      console.error("Error fetching the access token:", error);
    }
  };
