import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Auth from '../pages/Auth.vue'

const routes = [
    {
      path: '/',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/main',
      name: 'Home',
      component: Home
    }
  ]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
