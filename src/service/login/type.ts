export interface IAccount {
  name: string
  password: string
}

export interface ILoginState {
  token: string
  id: number
  name: string
}

export interface IDataType<T = any> {
  conde: number
  data: T
}
