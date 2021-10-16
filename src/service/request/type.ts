import type { AxiosRequestConfig } from 'axios'

export interface CXRequestinterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: any) => any
  responseInterceptorCatch?: (error: any) => any
}

export interface CXRequestConfig extends AxiosRequestConfig {
  interceptors?: CXRequestinterceptors
  showLoading?: boolean
}
