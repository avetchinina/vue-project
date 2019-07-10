import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Users from './views/Users.vue'
import ManageUser from './views/ManageUser.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/add-user',
      name: 'add-user',
      component: ManageUser
    },
    {
      path: '/edit-user/:id',
      name: 'edit-user',
      component: ManageUser,
      params: {
        id: 0
      }
    }
  ]
})
