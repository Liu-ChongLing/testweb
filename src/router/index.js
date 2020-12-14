import Vue from 'vue'
import Vuerouter from 'vue-router'
const home = () =>import('../views/home')
const lefttoptest = () => import('../views/lefttoptest')
const leftbottomtest = () => import('@/views/leftbottomtest')
const middlebottomtest = () =>import('@/views/middlebottomtest')
const righttoptest = () => import('@/views/righttoptest')
const rightbottom1test = () => import('@/views/rightbottom1test')
const rightbottom2test = () => import('@/views/rightbottom2test')
const middletoptest = () => import('@/views/middletoptest')
Vue.use(Vuerouter)

const routes =[
  {
    path: '',
    redirect: '/middlebottomtest'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/lefttoptest',
    component: lefttoptest
  },
  {
    path: '/leftbottomtest',
    component: leftbottomtest
  },
  {
    path: '/righttoptest',
    component: righttoptest
  },
  {
    path: '/rightbottom1test',
    component: rightbottom1test
  },
  {
    path: '/rightbottom2test',
    component: rightbottom2test
  },
  {
    path: '/middlebottomtest',
    component: middlebottomtest
  },
  {
    path: '/middletoptest',
    component: middletoptest
  }
]
const router = new Vuerouter({
  routes,
  mode: 'history'
})

export default router
