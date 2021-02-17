import Vue from 'vue'
import VueRouter from 'vue-router'

import login from '../components/Login.vue'
import home from '../components/Home'

Vue.use(VueRouter)
const routes = [
  {
    path: '/login',
    component: login
  },
  {
    path: '/',
    component: login
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '*',
    redirect: '/login'
  }
]
const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const token = window.sessionStorage.getItem('token')
  if (!token) return next('/login')
  next()
})

export default router
