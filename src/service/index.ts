//service统一的出口
import CXRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
const cxRequest = new CXRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config: any) => {
      const token = ''
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }

      // console.log('111')
      return config
    },
    requestInterceptorCatch: (err) => {
      // console.log('222')
      return err
    },
    responseInterceptor: (res) => {
      // console.log('333')
      return res
    },
    responseInterceptorCatch: (err) => {
      // console.log('444')
      return err
    }
  }
})
// console.log(BASE_URL)
// console.log(TIME_OUT)
export default cxRequest
