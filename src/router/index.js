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
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('../views/DemoView.vue')
    },
    {
      path: '/for',
      name: 'for',
      component: () => import('../views/ForView.vue')
    },
    {
      path: '/single/:turtleID',
      name: 'single',
      props: true,
      component: () => import('../views/SingleView.vue')
    },
    {
      path: '/composition',
      name: 'composition',
      component: () => import('../views/DemoCompositionView.vue')
    },
    {
      path: '/options',
      name: 'options',
      component: () => import('../views/DemoOptions.vue')
    }
  ]
})

export default router
