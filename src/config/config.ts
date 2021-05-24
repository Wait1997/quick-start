const { hostname } = window.location

export const isLocal = hostname.match(/^127|localhost|^192/)
export const isDev = hostname.match(/^dev-/)
export const isPre = hostname.match(/^pre-/)
export const isOnline = hostname.match(/^pc/)

export const origin = window.location.origin === 'file://' ? 'https:' : ''

interface BaseURLView {
  url: string
  webURL: string
}

function getBaseURL(): BaseURLView {
  let url: string
  let webURL: string

  if (isLocal) {
    url = window.location.origin // 允许本地反向代理
    webURL = '//dev-cs.xiaoheiban.cn'
  } else if (isDev) {
    url = '//dev-platform.xiaoheiban.cn'
    webURL = '//dev-cs.xiaoheiban.cn'
  } else if (isPre) {
    url = '//pre-platform.xiaoheiban.cn'
    webURL = '//pre-cs.xiaoheiban.cn'
  } else if (isOnline) {
    url = '//platform.xiaoheiban.cn'
    webURL = '//cs.xiaoheiban.cn'
  } else {
    url = window.location.origin // 允许本地反向代理
    webURL = '//dev-cs.xiaoheiban.cn'
  }

  return {
    url: origin + url,
    webURL: origin + webURL
  }
}

export const baseURL = getBaseURL().url
export const baseWebURL = getBaseURL().webURL
