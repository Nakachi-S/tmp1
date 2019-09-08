/* eslint-disable */

import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/components/pages/Auth'
import Home from '@/components/pages/Home'
import Welcome from '@/components/pages/Welcome'
import Signup_guest from '@/components/pages/Signup_guest'
import Signup_host from '@/components/pages/Signup_host'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth,
    },
    {
      path: '/signup_guest',
      name: 'Signup_guest',
      component: Signup_guest,
    },
    {
      path: '/signup_host',
      name: 'Signup_host',
      component: Signup_host,
    }
  ]
})

