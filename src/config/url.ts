export interface WebReq {
  params?: { [index: string]: any }
  forms?: any
}

export interface Response<T> {
  code: number
  data: T
  desc: string
}

export function genUrl(url: string, params: WebReq['params']) {}
