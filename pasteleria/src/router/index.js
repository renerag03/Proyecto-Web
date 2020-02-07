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
    path: '/contacto',
    name: 'contacto',
    component: () => import('../views/Contacto.vue')
  },
  {
    path: '/galeria',
    name: 'galeria',
    component: () => import('../views/Galeria.vue')
  },
  {
    path: '/acontecimiento',
    name: 'acontecimiento',
    component: () => import('../components/Acontecimiento.vue')
  },
  {
    path: '/personalizadas',
    name: 'personalizadas',
    component: () => import('../components/Personalizadas.vue')
  },
  {
    path: '/normales',
    name: 'normales',
    component: () => import('../components/Normales.vue')
  },
  {
    path: '/servicios',
    name: 'servicios',
    component: () => import('../views/Servicios.vue')
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
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
