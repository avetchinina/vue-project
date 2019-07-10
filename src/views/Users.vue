<template>
  <div class="container">
    <user-list v-if="wasLoaded" :users="users"></user-list>
    <bootstrap-spinner v-else></bootstrap-spinner>
  </div>
</template>

<script>
import UserList from '@/components/UserList.vue'
import axios from 'axios'
import BootstrapSpinner from '@/components/BootstrapSpinner'

export default {
  name: 'users',
  components: {
    UserList,
    BootstrapSpinner
  },
  data: () => ({
    users: [],
    wasLoaded: false
  }),
  mounted() {
    this.loadUsers()
  },
  methods: {
    loadUsers() {
      axios
        .get('http://localhost:3000/users')
        .then(response => response.data)
        .then(users => {
          this.users = users
          this.wasLoaded = true
        })
    }
  }
}
</script>
