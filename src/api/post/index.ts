import { AxiosRequestConfig, AxiosResponse } from "axios";
import api from "..";

export default function post<T = any, R = T>(
  url: string,
  data?: T,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<R>> {
  return api.post<T, AxiosResponse<R>>(url, data, config);
}
