import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home,
      redirect:'/home',
      children:[
        {
          path:'/home',
          name:'home',
          component:()=>import('@/views/home')
        },
        {
          path:'/find',
          name:'find',
          component:()=>import("@/views/find")
        },
        {
          path:'/person',
          name:'person',
          component:()=>import('@/views/person')
        }
      ]
    }
  ]
})
