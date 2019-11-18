import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'focus',
  routes: [
    {
      path: '/',
      redirect: {
        name: 'Index'
      }
    },
    {
      path: '/index',
      name: 'Index',
      component: ()=>import('@/pages/index/index'),
      meta: {
        isTabBar: true
      }
    },
    {
      path: '/theatre',
      name: 'Theatre',
      component: () => import('@/pages/theatre'),
      meta: {
        isTabBar: true
      }
    },
    {
      path: '/ticket',
      name: 'Ticket',
      component: () => import ('@/pages/ticket'),
      meta: {
        isTabBar: false
      }
    },
    {
      path: '/mine',
      name: 'Mine',
      component: () => import ('@/pages/mine'),
      meta: {
        isTabBar: true
      }
    }
  ]
})
