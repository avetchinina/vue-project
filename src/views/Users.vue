<template>
  <div class="container">
    <user-list
      v-if="wasLoaded && haveUsers"
      :users="users"
      @change-users="value => (users = value)"
    ></user-list>
    <div v-else-if="wasLoaded" class="alert alert-warning">
      Пользователи не найдены!
    </div>
    <bootstrap-spinner v-else></bootstrap-spinner>
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
    haveUsers: function() {
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
    }
  }
}
</script>
