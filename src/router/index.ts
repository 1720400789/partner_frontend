import { createRouter, createWebHistory } from 'vue-router'
import * as VueRouter from 'vue-router'
import Index from '../pages/Index.vue'
import UserLoginPage from '../pages/UserLoginPage.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: VueRouter.createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: Index
    },
    {
      path: '/team',
      name: 'TeamPage',
      component: () => import('../pages/TeamPage.vue')
    },
    {
      path: '/team/add',
      name: 'TeamAddPage',
      component: () => import('../pages/TeamAddPage.vue')
    },
    {
      path: '/user',
      name: 'UserPage',
      component: () => import('../pages/UserPage.vue')
    },
    {
      path: '/search',
      name: 'SearchPage',
      component: () => import('../pages/SearchPage.vue')
    },
    {
      path: '/user/edit',
      name: 'EditUserPage',
      component: () => import('../pages/EditUserPage.vue')
    },
    {
      path: '/user/list',
      name: 'SearchResult',
      component: () => import('../pages/SearchResultPage.vue')
    },
    {
      path: '/user/login',
      name: 'userLogin',
      component: UserLoginPage
    }
  ]
})

export default router
