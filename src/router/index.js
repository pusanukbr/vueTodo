import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/user',
      name: 'User',
      component: () => import('../views/User.vue')
    },
    {
      path: '*',
      name: 'NotPage',
      component: () => import('../views/NotPage.vue')
    }
  ]
})
// router.beforeEach((to, from, next) => {
//   if(!Object.keys(to.params).length && to.name !== "Login") next({name: 'Login'});
//   else next();
// })
export default router
