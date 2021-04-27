import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/index'
import domain from '@/pages/domain/index'
import login from '@/pages/login/index'
import editurls from '@/pages/domain/editurls'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/domain',
      name: 'domain',
      component: domain
    },
    {
      path: '/editurls',
      name: 'editurls',
      component: editurls
    }
  ]
})
