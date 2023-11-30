import { createRouter, createWebHistory } from 'vue-router'
import HeaderComp from '../components/MainComp.vue'
import HorarioScreen from '../screens/HorarioScreen.vue'
import PacoteScreen from '../screens/PacoteScreen.vue'
import ProcedimentoScreen from '../screens/ProcedimentoScreen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HeaderComp
    },
    {
      path: '/horario',
      name: 'horario',
      component: HorarioScreen
    },
    {
      path: '/pacote',
      name: 'pacote',
      component: PacoteScreen
    },
    {
      path: '/procedimento',
      name: 'procedimento',
      component: ProcedimentoScreen
    },
  ]
})

export default router
