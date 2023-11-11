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

      component: () => import('../views/PackageDetails.vue')
    },
    {
        path: '/adminview',
         name: 'adminview',

         component: () => import('../views/AdminView.vue')
         // meta: {requiresAuth: true},
    },
    {
        path: '/login',
         name: 'login',

         component: () => import('../views/Login.vue')
         // meta: {requiresAuth: true},
    },
    {
        path: '/signup',
         name: 'signup',

         component: () => import('../views/Signup.vue')
         // meta: {requiresAuth: true},

    },
    {
        path: '/trackpackage',
         name: 'trackpackage',

         component: () => import('../views/TrackPackage.vue')
         // meta: {requiresAuth: true},

    },
    {
        path: '/packageinfo',
         name: 'packageinfo',

         component: () => import('../views/PackageInfo.vue')
        // meta: {requiresAuth: true},

    },
    {
        path: '/agent&destination',
         name: 'agent&destination',
         component: () => import('../views/AgentOffice.vue')
    },
  ]
})

router.beforeEach((to, from, next)=>{

    if(to.meta.requiresAuth && !store.state.user.token){
        next({name: 'home'})
    }else if(store.state.user.token && to.name ===  'signup') {
        next ({name: 'trackpakage'})
    } else if(store.state.user.token && to.name === 'login') {
        next({name: 'trackpackage'})
    } else {
        next()
    };
} )

export default router

