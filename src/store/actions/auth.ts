import { LoginReqType, apiPostLogin } from 'Api/login'
import { set } from 'Src/utils/local-store'
import { setUserToken } from './user'

export const onLogin = ({ username, password }: LoginReqType) => {
  return (dispatch: any) => {
    return new Promise<string>((resolve, reject) => {
      apiPostLogin({ username, password })
        .then((res) => {
          const { code, data } = res
          if (code === 200) {
            dispatch(setUserToken(data.token))
            set('token', data.token)
            resolve(data.token)
          }
        })
        .catch((error) => {
          const { message } = error
          reject(message)
        })
    })
  }
}
