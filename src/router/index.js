import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Login.vue'

const routes = [
  {path: '/',
  redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Homepage.vue')
  }, 
  {
    path: '/create',
    name: 'create',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreatePage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
