import { createRouter, createWebHistory } from 'vue-router'
import CompositionHome from '@/views/CompositionHome.vue'
import CompositionPractice from '@/views/CompositionPractice.vue'
import CompositionWatch from '@/views/CompositionWatch.vue'
import CompositionState from '@/views/CompositionState.vue'
import CompositionSkeleton from '@/views/CompositionSkeleton.vue'

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
    },
    {
      path: '/watch',
      name: 'CompositionWatch',
      component: CompositionWatch
    },
    {
      path: '/sharing-state',
      name: 'CompositionState',
      component: CompositionState
    },
    {
      path: '/skeleton-suspense',
      name: 'CompositionSkeleton',
      component: CompositionSkeleton
    }
  ]
})

export default router
