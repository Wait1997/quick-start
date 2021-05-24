/*
 * @Author: @guofang
 * @Date: 2021-05-24 22:52:03
 * @Last Modified by: @guofang
 * @Last Modified time: 2021-05-25 00:00:02
 */

import Axios, { AxiosInstance, AxiosRequestConfig, Method } from 'axios'
import { baseURL, baseWebURL } from './config'

import { WebReq, Response } from './url'

// 继承axiosRequestConfig并添加一个类型
export interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  contentType?: 'application/json' | 'multipart/form-data' | 'application/x-www-form-urlencoded'
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
  private axios: AxiosInstance

  protected reqInterceptors: number

  protected resInterceptors: number

  constructor(options: Options) {
    this.axios = Axios.create(options.config)
    this.reqInterceptors = this.axios.interceptors.request.use((config: CustomAxiosRequestConfig) => {
      config.headers = {
        ...config.headers
      }
      return config
    })
    this.resInterceptors = this.axios.interceptors.response.use(
      response => {
        if (response.status === 200 && typeof response.data.code === 'string') {
          return response.data
        }
        return {
          code: 0,
          data: response.data
        }
      },
      async error => {
        const response = error.response || {}
        // config 是为请求提供的配置信息
        const { config } = response
        const data = response.data || {}
        if (config) {
          if (config.responseType === 'blob') {
            // data = await blobToString(data)
          } else if (config.responseType === 'arraybuffer') {
            // data = await blobToString(new Blob([data]))
          }
        }
        let desc = (baseWebURL ? '接口信息：' : '') + (data.message || data.desc || '请求出错啦^o^')
        if (error.message.startsWith('Network Error') || /ENOTFOUND/.test(desc)) {
          desc = '网络已中断，请检查网络是否完好'
        }
        return { code: data.code || data.status, desc, data }
      }
    )
  }

  public get<T>(url: string, params: WebReq['params'], forms?: WebReq['forms']): Promise<Response<T>> {
    return this.api<T>(url, { params, forms }, 'get')
  }

  public post<T>(url: string, params: WebReq['params'], forms?: WebReq['forms']): Promise<Response<T>> {
    return this.api<T>(url, { params, forms }, 'post')
  }

  public put<T>(url: string, params: WebReq['params'], forms?: WebReq['forms']): Promise<Response<T>> {
    return this.api<T>(url, { params, forms }, 'put')
  }

  public delete<T>(url: string, params: WebReq['params'], forms?: WebReq['forms']): Promise<Response<T>> {
    return this.api<T>(url, { params, forms }, 'delete')
  }

  public patch<T>(url: string, params: WebReq['params'], forms?: WebReq['forms']): Promise<Response<T>> {
    return this.api<T>(url, { params, forms }, 'patch')
  }

  private api<T>(url: string, req: WebReq, method: Method = 'get'): Promise<Response<T>> {
    method = method.toLocaleLowerCase() as Method
    switch (method) {
      case 'get':
        return this.axios.get(url)
      case 'delete':
        return this.axios.delete(url)
      case 'post':
        return this.axios.post(url, req.forms || req.params)
      case 'put':
        return this.axios.put(url, req.forms || req.params)
      case 'patch':
        return this.axios.patch(url, req.forms || req.params)
      default:
        return this.axios.get(url)
    }
  }
}
