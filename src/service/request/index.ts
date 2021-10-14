import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { CXRequestConfig, CXRequestinterceptors } from './type'

class CXRequest {
  // request(): void {
  //   console.log('666')
  // }
  // get(): void {
  //   console.log('888')
  // }
  instance: AxiosInstance
  interceptors?: CXRequestinterceptors
  constructor(config: CXRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }

  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default CXRequest
