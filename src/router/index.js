import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SettingsPage from '../views/SettingsPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/user',
    name: 'user',
    component: Home,
    meta: {
      protected: true
    }
  },
  {
    path: '/settings',
    name: 'settings',
    components: {
      default: Home,
      sidebar: SettingsPage
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName */ '../views/LoginComponent')
  },
  {
    path: '/redirect-to/:id?',
    redirect: to => {
      const { hash, params, query } = to
      if (query.to === 'blog') {
        return { path: '/blog', query: null }
      }
      if (hash === '#about') {
        return { name: 'about', hash: '' }
      }
      if (params.id) {
        return '/post/:id'
      } else {
        return '/'
      }
    }
  },
  {
    path: '/blog',
    name: 'blog',
    alias: '/post',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "blog" */ '../views/BlogComponent.vue'),
    children: [{
      name: 'blog.settings',
      path: 'settings',
      component:  () => import(/* webpackChunkName: "sidebar" */ '../views/SettingsPage.vue'),
    }]
  },
  {
    path: '/post/:id',
    name: 'post',
    component: () => import(/* webpackChunkName: "post" */ '../views/PostComponent.vue'),
    props: true,
    beforeEnter: (to, from, next)=>{
      if (to.params.post){
        next()
      }else {
        next({ name: 'NotFound' })
      }
    }
  },
  {
    path: '/test-*',
    name: 'NotFound',
    component: () => import('../views/BlogComponent'),
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/NotFoundComponent'),
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.protected && !to.params.dummyAuth) {
    console.log("Go to login page")
    next({ name: 'login', query: { 
      redirect: to.name
    }})
  } else {
    next()
  }
})

export default router
