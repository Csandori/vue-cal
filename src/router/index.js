import Vue from 'vue'
import VueRouter from 'vue-router'
import Documentation from '@/documentation'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Documentation
  },
  {
    path: '/test',
    component: () => import(/* webpackChunkName: "isolated-test-view" */ '@/documentation/csandortest.vue')
  }
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
