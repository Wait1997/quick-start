import { webapi } from '../index'

declare interface BannerRequest {
  type: number
}

export function apiGetBanner(params: BannerRequest) {
  webapi.get(`/banner?type=${params}`)
}
