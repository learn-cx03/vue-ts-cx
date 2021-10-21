import { Module } from 'vuex'

import { IRootState } from '../type'
import { ILoginState } from './type'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  getters: {},
  mutations: {},
  actions: {
    accountLoginAction({ commit }, payload: any) {
      console.log('执行accountLoginAction', payload)
      // console.log(commit)
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log('执行phoneLoginAction')
    }
  }
}
export default loginModule
