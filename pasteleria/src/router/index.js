import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/galeria',
    name: 'galeria',
    component: () => import('../views/Galeria.vue')
  },
  {
    path: '/tortas',
    name: 'tortas',
    component: () => import('../views/Tortas.vue')
  },
  {
    path: '/postres',
    name: 'postres',
    component: () => import('../views/Postres.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
