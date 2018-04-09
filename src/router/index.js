import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Provider from '@/page/Provider'


Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Provider',
      name: 'Provider',
      component: Provider
    },
  ]
})
