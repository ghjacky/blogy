import Vue from 'vue'
import VueRouter from 'vue-router'
import { BlogRouter } from './blog/index'
import { HomeRouter } from '@/router/home'
import { AdminRouter } from '@/router/admin'

Vue.use(VueRouter)

const routes = [
  HomeRouter,
  BlogRouter,
  AdminRouter
]

const router = new VueRouter({
  routes
})

export default router
