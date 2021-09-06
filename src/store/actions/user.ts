// import { apiPostUserInfo } from 'Api/login'
import * as types from '../types'

// export const getUserInfo = (token: string) => (dispatch) => {
//   return new Promise((resolve: Promise, reject) => {
//     apiPostUserInfo(token).then().catch()
//   })
// }

export const setUserToken = (token: string) => ({ type: types.USER_SET_USER_TOKEN, paylaod: token })
