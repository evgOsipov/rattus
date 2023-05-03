import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import EditPage from '@/pages/EditPage.vue'
import ReportPage from '@/pages/ReportsPage.vue'

export const enum Routes {
  MAIN = '/',
  EDIT = '/edit',
  EDIT_ONE = '/edit/:id',
  REPORTS = '/reports'
}

const routes: Array<RouteRecordRaw> = [
  {
    path: Routes.MAIN,
    component: MainPage
  },
  {
    path: Routes.EDIT,
    component: EditPage,
  },
  {
    path: Routes.EDIT_ONE,
    component: EditPage
  },
  {
    path: Routes.REPORTS,
    component: ReportPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
