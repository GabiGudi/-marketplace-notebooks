import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetalleNotebookView from '../views/DetalleNotebookView.vue'
import AltaNotebookView from '../views/AltaNotebookView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/notebook/:id',
      name: 'detalle',
      component: DetalleNotebookView,
    },
    {
      path: '/alta',
      name: 'alta',
      component: AltaNotebookView,
    },
  ],
})

export default router
