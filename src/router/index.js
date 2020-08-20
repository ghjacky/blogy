import Vue from 'vue'
import VueRouter from 'vue-router'
import { BlogRouter } from './blog/index'
import { HomeRouter } from '@/router/home'
import { AdminRouter } from '@/router/admin'
import { checkPerm } from '@/router/permission'

Vue.use(VueRouter)

const routes = [
  HomeRouter,
  BlogRouter,
  AdminRouter
]

const router = new VueRouter({
  routes
})

router.beforeEach(checkPerm)

export default router
