import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Users from '@/views/Users.vue'
import AddUser from '@/views/AddUser.vue'
import EditUser from '@/views/EditUser.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
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
      component: AddUser
    },
    {
      path: '/edit-user/:id',
      name: 'edit-user',
      component: EditUser
    }
  ]
})
