import { webapi } from '../index'

declare interface BannerRequest {
  type: number
}

declare interface LoginRequest {
  phone: string
  password: string
}

export function apiGetBanner(params: BannerRequest) {
  return webapi.get(`/banner?type=${params.type}`)
}

export function apiPostLogin(params: LoginRequest) {
  return webapi.post('/login/cellphone', params)
}
