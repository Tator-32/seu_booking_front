import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/HomeView'
import Login from '@/views/LoginView'
import HomePage from '@/components/HomePage'

Vue.use(VueRouter)

const routes =
  [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [{
        path: "/",
        name: 'Intro',
        component: HomePage
      }]
    }, {
        path: "/Login",
        name: 'Login',
        component: Login
    }
  ]

const router = new VueRouter
  (
    {
      mode: 'history',
      base: process.env.BASE_URL,
      routes
    }
  )

export default router
