import { message } from 'antd'
import { Dispatch } from 'Src/store'
import { apiPostLogin, LoginReqType } from 'Api/login'
import { AppState, UserInfo } from './type'

const defaultState: AppState = {
  userinfo: {
    roles: [], // 当前用户拥有的角色
    menus: [], // 当前用户拥有的已授权的菜单
    powers: [], // 当前用户拥有的权限数据
    userBasicInfo: null // 用户的基础信息
  },
  powersCode: [] // 当前用户拥有的权限code列表(仅保留了code)，页面中的按钮的权限控制将根据此数据源判断
}

export default {
  state: defaultState,
  reducers: {
    reducerUserInfo(state: AppState, payload: UserInfo) {
      // eslint-disable-next-line no-console
      console.log(payload)
      return {
        ...state,
        userinfo: payload,
        powers: payload.powers.map((item) => item.code)
      }
    },
    reducerLogout(state: AppState) {
      return {
        ...state,
        userinfo: {
          menus: [],
          roles: [],
          powers: []
        }
      }
    }
  },
  effects: (dispatch: Dispatch) => ({
    /**
     * 登录信息
     * @param param0 {LoginType}
     * @returns 用户信息
     */
    async onLogin({ username, password }: LoginReqType) {
      try {
        const data = await apiPostLogin({ username, password })
        return data
      } catch {
        message.error('网络错误，请重试')
      }
      return null
    },
    async onLogout() {
      try {
        dispatch({ type: 'app/reducerLogout' })
        sessionStorage.removeItem('userinfo')
        return 'success'
      } catch {
        message.error('网络错误，请重试')
      }
      return null
    },
    async setUserInfo(userinfo: UserInfo) {
      dispatch({ type: 'app/reducerUserInfo', payload: userinfo })
      return 'success'
    }
  })
}
