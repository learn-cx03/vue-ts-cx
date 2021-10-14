//service统一的出口
import CXRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
const cxRequest = new CXRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})
// console.log(BASE_URL)
// console.log(TIME_OUT)
export default cxRequest
