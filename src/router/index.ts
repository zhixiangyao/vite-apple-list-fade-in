import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const AppleListFadeIn = () => import('../views/AppleListFadeIn/AppleListFadeIn')

const routes: RouteRecordRaw[] = [
  { path: '/', component: AppleListFadeIn, name: 'AppleListFadeIn' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
