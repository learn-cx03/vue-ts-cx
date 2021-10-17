import type { Axios, AxiosRequestConfig, AxiosResponse } from 'axios'

export interface CXRequestinterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface CXRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: CXRequestinterceptors<T>
  showLoading?: boolean
}
