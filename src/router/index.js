import Vue from 'vue'
import Router from 'vue-router'


import Index from '../components/index'
import userLogin from '../components/login/userLogin'
import YC from '../components/yc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
        path: '/userLogin',
      name: 'userLogin',
      component: userLogin
    },
    {
      path: '/YC',
      name: 'YC',
      component: YC
    }
  ]
})
