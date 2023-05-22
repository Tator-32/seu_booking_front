import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/HomeView'
import LoginMail from '@/views/LoginMailView'
import LoginPhone from '@/views/LoginPhoneView'
import HomePage from '@/components/HomePage'
import VerifyCode from '@/views/VerifyCodeView'
import ProfileView from '@/views/ProfileView'
import SecondHomeView from '@/views/SecondHomeView'

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
      path: "/LoginMail",
      name: 'LoginMail',
      component: LoginMail
    }, {
      path: "/LoginPhone",
      name: 'LoginPhone',
      component: LoginPhone
    }, {
      path: "/VerifyCode",
      name: "VerifyCode",
      component: VerifyCode
    }, {
      path: "/Profile",
      name: "Profile",
      component: ProfileView
    }, {
      path:"/SecondHome",
      name: "SecondHome",
      component: SecondHomeView
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
