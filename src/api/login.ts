import { webapi } from 'Config/index'
import { Response } from 'Config/url'
import { UserBasicInfo, Role, Menu, Power } from 'Src/models/type'

export interface LoginReqType {
  username: string
  password: string
}

export function apiPostLogin({ username, password }: LoginReqType): Promise<Response<UserBasicInfo | null>> {
  return webapi.post('/api/login', { username, password })
}

export function apiGetMenu(): Promise<Response<Menu[]>> {
  return webapi.get('/api/getmenus')
}

export function apiPostMenuById(id: number | number[]): Promise<Response<Menu[]>> {
  return webapi.post('/api/getMenusById', { id })
}

export function apiPostRoleById(id: number | number[]): Promise<Response<Role[]>> {
  return webapi.post('/api/getRoleById', { id })
}

export function apiPostPowerById(id: number | number[]): Promise<Response<Power[]>> {
  return webapi.post('/api/getPowerById', { id })
}
