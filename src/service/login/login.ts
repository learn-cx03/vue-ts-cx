import cxRequest from '../index'
import { IAccount, IDataType, ILoginState } from './type'

enum LoginAPI {
  AccountLogin = '/login'
}

export function accountLoginRequest(account: IAccount) {
  return cxRequest.post<IDataType<ILoginState>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
