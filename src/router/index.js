import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/components',
      name: 'components',
      component: () => import('../views/ComponentsView.vue')
    },
    {
      path: '/table',
      name: '/table',
      component: () => import('../views/TableView.vue')
    }
  ]
})

export default router
