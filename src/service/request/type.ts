import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface CXRequestinterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

export interface CXRequestConfig extends AxiosRequestConfig {
  interceptors?: CXRequestinterceptors
  showLoading?: boolean
}
