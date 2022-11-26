import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/chq',
      name: 'chq',
      component: () => import('../views/Chq.vue')
    },
    {
      path: '/wwj',
      name: 'wwj',
      component: () => import('../views/Wwj.vue')
    },
  ]
})

export default router
