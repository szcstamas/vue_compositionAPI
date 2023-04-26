import { createRouter, createWebHistory } from 'vue-router'
import CompositionHome from '@/views/CompositionHome.vue'
import CompositionPractice from '@/views/CompositionPractice.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'CompositionHome',
      component: CompositionHome
    },
    {
      path: '/practice',
      name: 'CompositionPractice',
      component: CompositionPractice
    }
  ]
})

export default router
