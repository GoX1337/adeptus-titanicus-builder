import Vue from 'vue'
import VueRouter from 'vue-router'
import Builder from '../views/Builder.vue'
import Battlegroups from '../views/Battlegroups.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/builder',
  },
  {
    path: '/builder/:battlegroupId?',
    props: true,
    name: 'Builder',
    component: Builder
  },
  {
    path: '/battlegroups',
    name: 'Battlegroups',
    component: Battlegroups
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
