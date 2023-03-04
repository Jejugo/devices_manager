import axios, { AxiosResponse } from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000", // Set your default host here
});

interface IAPI {
  url: string;
  method: "GET" | "HEAD" | "POST" | "DELETE" | "PATCH" | "PUT";
  data?: any;
  headers?: any;
}

export const sendRequest = async ({
  url,
  method = "GET",
  data = null,
  headers = {},
}: IAPI): Promise<AxiosResponse<any, any>> => {
  try {
    const response = await API({
      url,
      method,
      data,
      headers,
    });
    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error(error.message);
    }
    throw error;
  }
};
