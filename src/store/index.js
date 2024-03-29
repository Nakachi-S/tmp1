/* eslint-disable */

import Vue from 'vue'
import Vuex from 'vuex'
import client from '@/api' // 追加

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  isLoggedIn: false,
}

const mutations = {
  // ログイン
  loggedIn(state, token) {  // 引数追加
    state.isLoggedIn = true
    client.defaults.headers.common['Authorization'] = `JWT ${token}`  // ここでtokenセット
    localStorage.setItem('token', token)  // <---- 追加
  },
  // ログアウト
  loggedOut(state) {
    state.isLoggedIn = false
    delete client.defaults.headers.common['Authorization']
    localStorage.clear()  // <--- 追加
  },
}

const actions = {
  // ログイン
  login({ commit }, [email, password]) {  // 引数追加，配列で受け取るので展開して受け取る
    return client.auth.login(email, password).then(res => {
      commit('loggedIn', res.data.token)
      return res
    })
  },
  logout({ commit }) {
    commit('loggedOut')
  },
  tryLoggedIn({ commit }) {
    const token = localStorage.getItem('token')
    if (token) {
      commit('loggedIn', token)
    }
  },
}

const getters = {
  isLoggedIn: state => state.isLoggedIn,
}

export default new Vuex.Store({
  strict: debug,
  actions,
  getters,
  mutations,
  state,
})