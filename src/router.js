import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import sort from './views/sort.vue'
import taste from './views/taste.vue'
import shoppingcar from './views/shoppingcar.vue'
import my from './views/my.vue'
import index from './views/index.vue';
import alogin from './views/alogin.vue';
import findwd from './views/findwd.vue'
import ss from "./components/gettoken"

Vue.use(Router)

var router= new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',

      redirect: {
       path:'/findwd'
      }
      
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [{
          path: '/Home/index',
          name: 'index',
          component: index,
          meta:{
            requiresAuth:true//需要登录的
          }
        },
        {
          path:'/Home/sort',
          name:'sort',
          component:sort,
          meta:{
            requiresAuth:true//需要登录的
          }
        },
        {
          path: '/Home/taste',
          name: 'taste',
          component: taste,
          meta:{
            requiresAuth:true//需要登录的
          }

        },
        {
          path: '/Home/shoppingcar',
          name: 'shoppingcar',
          component: shoppingcar,
          meta:{
            requiresAuth:true//需要登录的
          }
        },
        {
          path:'/Home/my',
          name:'my',
          component:my,
          meta:{
            requiresAuth:true//需要登录的
          }
        }
      ]
    },
    {
      path:'/alogin',
      name:'alogin',
      component:alogin
    },
    {
      path:'/findwd',
      name:'findwd',
      component:findwd
    }

   
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!ss("token")) {
      
      next({
        path: '/alogin',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})


export default router