import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/login/login.vue'
import Home from '../views/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
  ],
  mode: 'history',
})