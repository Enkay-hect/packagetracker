import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store/index.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
     path: '/packagedetails',
      name: 'packagedetails',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PackageDetails.vue')
    },
    {
        path: '/adminview',
         name: 'adminview',
         // route level code-splitting
         // this generates a separate chunk (About.[hash].js) for this route
         // which is lazy-loaded when the route is visited.
         component: () => import('../views/AdminView.vue')
         // meta: {requiresAuth: true},
    },
    {
        path: '/login',
         name: 'login',
         // route level code-splitting
         // this generates a separate chunk (About.[hash].js) for this route
         // which is lazy-loaded when the route is visited.
         component: () => import('../views/Login.vue')
         // meta: {requiresAuth: true},
    },
    {
        path: '/signup',
         name: 'signup',
         // route level code-splitting
         // this generates a separate chunk (About.[hash].js) for this route
         // which is lazy-loaded when the route is visited.
         component: () => import('../views/Signup.vue')
         // meta: {requiresAuth: true},

    },
    {
        path: '/packageinfo',
         name: 'packageinfo',
         // route level code-splitting
         // this generates a separate chunk (About.[hash].js) for this route
         // which is lazy-loaded when the route is visited.
         component: () => import('../views/PackageInfo.vue')
        // meta: {requiresAuth: true},

    },
    {
        path: '/agent&destination',
         name: 'agent&destination',
         // route level code-splitting
         // this generates a separate chunk (About.[hash].js) for this route
         // which is lazy-loaded when the route is visited.
         component: () => import('../views/AgentOffice.vue')
    },
  ]
})

router.beforeEach((to, from, next)=>{

    if(to.meta.requiresAuth && !store.state.user.token){
        next({name: 'home'})
    }else if(store.state.user.token && to.name ===  'signup') {
        next ({name: 'home'})
    } else if(store.state.user.token && to.name === 'login') {
        next({name: 'home'})
    } else {
        next()
    };
} )

export default router
