import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => ""
    },
    {
      path: '/contador',
      name: 'contador',
      component: () => import('../components/Contador.vue')
    },
    {
      path: '/lista-tareas',
      name: 'lista-tareas',
      component: () => import('../components/ListaDeTarea.vue')
    }
  ],
})

export default router
