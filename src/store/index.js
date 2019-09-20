/* eslint-disable */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  isLoggedIn: false,
}

const mutations = {
  loggedIn(state, token) {  // 引数追加
    state.isLoggedIn = true
    client.defaults.headers.common['Authorization'] = `JWT ${token}`  // ここでtokenセット
  },
  loggedOut(state) {
    state.isLoggedIn = false
  },
}

const actions = {
  login({ commit }, [email, password]) {  // 引数追加，配列で受け取るので展開して受け取る
    return client.auth.login(email, password).then(res => {
      commit('loggedIn', res.data.token)
      return res
    })
  },
  logout({ commit }) {
    commit('loggedOut')
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