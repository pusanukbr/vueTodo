import Vue from 'vue'
import VueRouter from 'vue-router'
import { store } from '../store'

Vue.use(VueRouter)

const router = new VueRouter({
  
  mode: 'history',
  base: process.env.NODE_ENV === 'production' ? '/vueTodo/' : '/',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/user',
      name: 'User',
      beforeEnter: (to, from, next) => {
        if(store.user) next();
        else next({name: "Login"});
      },
      component: () => import('../views/User.vue')
    },
    {
      path: '*',
      name: 'NotPage',
      component: () => import('../views/NotPage.vue')
    }
  ]
})
export default router
