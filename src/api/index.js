/* eslint-disable */
import axios from 'axios'
import auth from './auth'  // 追加

const client = axios.create({
  baseURL: 'https://smart-in-ver1.lolipop.io/'
})

client.auth = auth(client) // 追加

client.install = function (Vue) {
  Object.defineProperty(Vue.prototype, '$request', {
    get() {
      return client
    },
  })
}

export default client