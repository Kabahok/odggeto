import { createRouter, createWebHistory } from 'vue-router'
import RegForm from '../components/RegForm.vue'
import AdminTest from '../components/AdminTest.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: RegForm
  },
  {
    path:'/admin-constructor',
    name: 'admin-constructor',
    component: AdminTest
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
})

export default router