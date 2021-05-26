import { webapi } from 'Config/index'
import { Response } from 'Config/url'

export interface BannerRequest {
  type: number
}

export interface BannerResponse {
  list: string[]
}

export interface LoginRequest {
  phone: string
  password: string
}

export interface UserInfo {
  name: string
  age: number
}

export interface LoginResponse {
  token: string
  userId: string
  userInfo: UserInfo
}

export function apiGetBanner(params: BannerRequest): Promise<Response<BannerResponse>> {
  return webapi.get(`/banner?type=${params.type}`)
}

export function apiPostLogin(params: LoginRequest): Promise<Response<LoginResponse>> {
  return webapi.post('/login/cellphone', params)
}
