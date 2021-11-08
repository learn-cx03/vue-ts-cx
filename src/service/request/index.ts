import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { CXRequestConfig, CXRequestinterceptors } from './type'
import { ElLoading, ILoadingInstance } from 'element-plus'
// import { SetOperationEnum } from 'element-plus/lib/components/tree-v2/src/virtual-tree'

const DEFALUT_LOADING = true

class CXRequest {
  // request(): void {
  //   console.log('666')
  // }
  // get(): void {
  //   console.log('888')
  // }
  instance: AxiosInstance
  interceptors?: CXRequestinterceptors
  showLoading: boolean
  loading?: ILoadingInstance
  constructor(config: CXRequestConfig) {
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? DEFALUT_LOADING
    this.interceptors = config.interceptors

    //从config中取出的拦截器是对应实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    //添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有实例都有的拦截器：请求成功拦截')
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据....',
            background: 'rgba(0, 0, 0, 0.5)'
          })
        }
        return config
      },
      (err) => {
        console.log('所有实例都有的拦截器：请求失败')
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有实例都有的拦截器： 响应成功')

        //将loading移除
        this.loading?.close()
        const data: any = res.data
        if (data.returnCode === '-1001') {
          console.log('请求错误')
        } else {
          return res.data
        }
      },
      (err) => {
        console.log('所有实例都有的拦截器：响应失败')
        if (err.response.status === 404) {
          console.log('404错误')
        }
        this.loading?.close()
        return err
      }
    )
  }

  request<T = any>(config: CXRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      //1.单个请求对config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      //2.判断是否
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          //1.单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          console.log(res)
          //将showLoading设置为true这样不会影响下一个请求
          resolve(res)
          this.showLoading = DEFALUT_LOADING
        })
        .catch((err) => {
          this.showLoading = DEFALUT_LOADING
          reject(err)
          return err
        })
    })
  }

  get<T = any>(config: CXRequestConfig<any>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T = any>(config: CXRequestConfig<any>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T = any>(config: CXRequestConfig<any>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: CXRequestConfig<any>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default CXRequest
