import { Module } from 'vuex'

import { accountLoginRequest } from '@/service/login/login'

import { IAccount } from '@/service/login/type'
import { IRootState } from '../type'
import { ILoginState } from './type'
import { keyOf } from 'element-plus/es/utils/props'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      console.log(token)
      state.token = token
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // console.log('执行accountLoginAction', payload)
      // console.log(commit)
      const loginResult = await accountLoginRequest(payload)
      // console.log(loginResult)
      // console.log(loginResult.data.id, loginResult.data.token)
      const { id, token } = loginResult.data
      commit('changeToken', token)
    }
    // phoneLoginAction({ commit }, payload: any) {
    //   console.log('执行phoneLoginAction')
    // }
  }
}
export default loginModule
