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
         path: '/login',
         name: 'login',
         component: () => import('../views/Login.vue')
    },
    {
        path: '/signup',
        name: 'signup',
        component: () => import('../views/Signup.vue')

    },
    {
        path: '/trackpackage',
        name: 'trackpackage',
        component: () => import('../views/TrackPackage.vue')
         // meta: {requiresAuth: true},

    },
    {
        path: '/packagestatus',
        name: 'packagestatus',
        component: () => import('../components/PackageStatus.vue')
         // meta: {requiresAuth: true},

    },
    {
        path: '/packageinfo',
        name: 'packageinfo',
        component: () => import('../views/PackageInfo.vue'),
        meta: {requiresAuth: true},
    },
    {
        path: '/agent&destination',
        name: 'agent&destination',
        component: () => import('../views/AgentOffice.vue'),
        meta: {requiresAuth: true},

    },
    
    // {
    //     path: '/successmodal',
    //     name: '/successmodal',
    //     component:()=> import('../components/successModal.vue')
    // }
  ]
})

router.beforeEach((to, from, next)=>{

    if(to.meta.requiresAuth && !store.state.user.token){
        next({name: 'home'})
    }
    else if(store.state.user.token  && to.name ===  'signup') {
        next ({name: 'trackpackage'})
    } else if(store.state.user.token && to.name === 'login') {
        next({name: 'trackpackage'})
    }
    else if(store.state.user.token && to.name === 'home') {
        next({name: 'trackpackage'})
    }else {
        next()
    };
} )

export default router

// console.log(store.state.user.token)

