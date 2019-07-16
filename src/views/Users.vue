<template>
  <div class="container">
    <bootstrap-spinner v-if="!wasLoaded"></bootstrap-spinner>
    <div v-else-if="!haveUsers" class="alert alert-warning">
      Пользователи не найдены!
    </div>
    <user-list v-else :users="users" @delete-user="deleteUser"></user-list>
  </div>
</template>

<script>
import UserList from '@/components/UserList.vue'
import axios from 'axios'
import BootstrapSpinner from '@/components/BootstrapSpinner.vue'

export default {
  name: 'Users',
  components: {
    UserList,
    BootstrapSpinner
  },
  data: () => ({
    users: [],
    wasLoaded: false
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
      this.wasLoaded = false
      axios
        .get('http://localhost:3000/users')
        .then(response => response.data)
        .then(users => {
          this.users = users
        })
        .catch(err => console.error(err))
        .finally(() => {
          this.wasLoaded = true
        })
    },
    deleteUser(id) {
      axios
        .delete('http://localhost:3000/users/' + id)
        .catch(err => console.error(err))
        .finally(() => {
          this.users = this.users.filter(user => user.id !== id)
        })
    }
  }
}
</script>
