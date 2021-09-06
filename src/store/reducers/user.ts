import { get } from 'Utils/local-store'
import * as types from '../types'

export interface UserInfo {
  name: string
  role: string | string[]
  avatar: string
  token: string | null
}

const initUserInfo: UserInfo = {
  name: '',
  role: '',
  avatar: '',
  token: get('token')
}

export default function user(state = initUserInfo, action: any) {
  const { type, payload } = action
  switch (type) {
    case types.USER_SET_USER_TOKEN:
      return {
        ...state,
        token: payload
      }
    default:
      return state
  }
}
