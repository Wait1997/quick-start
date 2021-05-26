import { CustomAxiosRequestConfig } from './index'

export interface WebReq {
  params?: { [index: string]: any }
  config?: CustomAxiosRequestConfig
}

export interface Response<T> {
  code?: number
  data: T
}
