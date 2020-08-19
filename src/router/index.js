import Vue from 'vue'
import VueRouter from 'vue-router'
import { BlogRouter } from './blog/index'
import { HomeRouter } from '@/router/home'

Vue.use(VueRouter)

const routes = [
  HomeRouter,
  BlogRouter
]

const router = new VueRouter({
  routes
})

export default router
