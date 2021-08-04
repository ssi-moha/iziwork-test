import { AxiosRequestConfig, AxiosResponse } from "axios";
import api from "..";

export default function post<
  RequestData = unknown,
  ResponseData = RequestData,
  R = AxiosResponse<ResponseData>
>(url: string, data?: RequestData, config?: AxiosRequestConfig): Promise<R> {
  return api.post<RequestData, R>(url, data, config);
}
