import Vue from 'vue'
import Router from 'vue-router'
import projectRouter from './feRouter'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: projectRouter.router
})
