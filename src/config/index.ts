import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

export interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  contentType?: 'application/json' | 'multipart/form-data' | 'text/plain'
}

export interface Headers {
  Authorization: string
  'Content-Type': string
}

export interface Options {
  headers?: Headers
  config?: CustomAxiosRequestConfig
}

export class Webapi {
  axios: AxiosInstance

  reqInterceptors: number

  resInterceptors: number

  constructor(options: Options) {
    this.axios = Axios.create(options.config)
    this.reqInterceptors = this.axios.interceptors.request.use((config: CustomAxiosRequestConfig) => {
      // config.headers = {
      //   ...config.headers
      // }
      return config
    })
    this.resInterceptors = this.axios.interceptors.response.use(
      response => {
        if (typeof response.data.code === 'number') {
          return response.data
        }
        if (typeof response.data.status === 'string') {
          return {
            code: Number(response.data.status),
            desc: response.data.msg,
            data: response.data.data
          }
        }
        return {
          code: 0,
          data: response.data
        }
      },
      async error => {
        const response = error.response || {}
        const { config } = response
        const data = response.data || {}
        if (config) {
          if (config.responseType === 'blob') {
            // data = await blobToString(data)
          } else if (config.responseType === 'arraybuffer') {
            // data = await blobToString(new Blob([data]));
          }
        }
        // let desc = (baseWebURL ? '接口信息：' : '') + (data.message || data.desc || '请求出错啦^o^')
        // if (error.message.startsWith('Network Error') || /ENOTFOUND/.test(desc)) {
        //   desc = '网络已中断，请检查网络是否完好'
        // }
        // return { code: data.code || data.status, desc, data }
      }
    )
  }
}
