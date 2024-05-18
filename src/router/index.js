import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'default',
      redirect: '/inicio',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/inicio',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/sobre',
      name: 'About',
      component: () => import('../views/AboutMeView.vue')
    },
    {
      path: '/servicos',
      name: 'servicos',
      component: () => import('../views/ServicesView.vue')
    },
    {
      path: '/contato',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/projetos',
      name: 'Projects',
      component: () => import('../views/ProjectViews.vue'),
      children:[
        {
          path: ':name/:number',
          name: 'project',
          component: () => import('../views/ProjectPickedViews.vue')
        }
      ]
    }
    
  ]
})

export default router
