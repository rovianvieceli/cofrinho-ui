import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'dashboad',
    meta: {
      title: 'Início'
    },
    component: () => import('@/pages/Dashboard.vue')
  },
  {
    path: '/carteira',
    name: 'carteira',
    meta: {
      title: 'Carteira'
    },
    component: () => import('@/pages/Dashboard.vue')
  },
  {
    path: '/extrato',
    name: 'extrato',
    meta: {
      title: 'Extrato'
    },
    component: () => import('@/pages/Dashboard.vue')
  },
  {
    path: '/projecao',
    name: 'projecao',
    meta: {
      title: 'Projeção'
    },
    component: () => import('@/pages/Dashboard.vue')
  },
  {
    path: '/relatorios',
    name: 'relatorios',
    meta: {
      title: 'Relatórios'
    },
    component: () => import('@/pages/Dashboard.vue')
  },
  {
    path: '*',
    name: 'not-found-page',
    meta: {
      title: 'Página não encontrada'
    },
    component: () => import('@/pages/NotFoundPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
