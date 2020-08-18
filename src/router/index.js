import Vue from 'vue'
import VueRouter from 'vue-router'
import { HomeRouter } from './home/index'

Vue.use(VueRouter)

const routes = [
  HomeRouter
]

const router = new VueRouter({
  routes
})

export default router
