import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import sort from './views/sort.vue'
import taste from './views/taste.vue'
import shoppingcar from './views/shoppingcar.vue'
import my from './views/my.vue'
import index from './views/index.vue';
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',

      redirect: {
        name: "Home"
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
        },
        {
          path:'/Home/sort',
          name:'sort',
          component:sort
        },
        {
          path: '/Home/taste',
          name: 'taste',
          component: taste,

        },
        {
          path: '/Home/shoppingcar',
          name: 'shoppingcar',
          component: shoppingcar

        },
        {
          path:'/Home/my',
          name:'my',
          component:my,
        }
      ]

    }
  ]
})