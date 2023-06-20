import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/focusNum',
    name: 'focusNum',
    component: () => import('@/views/focus-num.vue')
  },
  {
    path: '/hasHousesRegion',
    name: 'hasHousesRegion',
    component: () => import('@/views/has-houses-region.vue')
  },
  {
    path: '/numOfCommunity',
    name: 'numOfCommunity',
    component: () => import('@/views/num-of-community.vue')
  },
  {
    path: '/numOfCommunityMore200',
    name: 'numOfCommunityMore200',
    component: () => import('@/views/num-of-community-more-200.vue')
  },
  {
    path: '/soldNumByYear',
    name: 'soldNumByYear',
    component: () => import('@/views/sold-num-by-year.vue')
  },
  {
    path: '/soldNumCommunity',
    name: 'soldNumCommunity',
    component: () => import('@/views/sold-num-community.vue')
  },
  {
    path: '/hasHouses',
    name: 'hasHouses',
    component: () => import('@/views/has-houses.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
