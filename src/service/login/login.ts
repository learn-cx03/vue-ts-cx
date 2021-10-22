import cxRequest from '../index'
import { IAccount, IDataType, ILoginState } from './type'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', //user/id
  UserMenus = '/role/' //用法: role/id/menu
}

export function accountLoginRequest(account: IAccount) {
  return cxRequest.post<IDataType<ILoginState>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return cxRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id
  })
}

export function requestUserMenusByRoleId(id: number) {
  return cxRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu'
  })
}
