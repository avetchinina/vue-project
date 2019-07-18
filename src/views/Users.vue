<template>
  <div class="container">
    <bootstrap-spinner v-if="loading"></bootstrap-spinner>
    <div v-else-if="!haveUsers" class="alert alert-warning">
      Пользователи не найдены!
    </div>
    <user-list v-else :users="users" @delete-user="deleteUser"></user-list>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Users',
  components: {
    UserList: () => import('@/components/UserList.vue'),
    BootstrapSpinner: () => import('@/components/BootstrapSpinner.vue')
  },
  data: () => ({
    users: null,
    loading: true
  }),
  computed: {
    haveUsers() {
      return this.users.length > 0
    }
  },
  mounted() {
    this.loadUsers()
  },
  methods: {
    loadUsers() {
      this.loading = true
      axios
        .get('http://localhost:3000/users')
        .then(response => response.data)
        .then(users => {
          this.users = users
        })
        .catch(err => console.error(err))
        .finally(() => {
          this.loading = false
        })
    },
    deleteUser(id) {
      axios
        .delete('http://localhost:3000/users/' + id)
        .then(() => this.removeUserFromList(id))
        .catch(err => console.error(err))
    },
    removeUserFromList(id) {
      this.users = this.users.filter(user => user.id !== id)
    }
  }
}
</script>
