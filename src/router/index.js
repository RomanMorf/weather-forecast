import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Today',
    component: Home
  },
  {
    path: '/week',
    name: 'Week',
    component: function () {
      return import('../views/Week.vue')
    }
  },
  {
    path: '*',
    name: 'NotFount',
    component: function () {
      return import('../views/NotFound.vue')
    }

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
