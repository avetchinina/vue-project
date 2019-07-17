<template>
  <div class="container">
    <bootstrap-spinner v-if="!wasLoaded"></bootstrap-spinner>
    <div v-else-if="!userCount" class="alert alert-warning">
      Пользователи не найдены!
    </div>
    <user-list v-else :users="users">
      <template v-slot:table-head>
        <th>№</th>
        <th>ФИО</th>
        <th>E-mail</th>
        <th>Телефон</th>
      </template>
      <template v-slot:table-row="{ item, getFullName }">
        <th>{{ item.id }}</th>
        <td>{{ getFullName(item) }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.phone }}</td>
      </template>
    </user-list>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PhoneBook',
  components: {
    UserList: () => import('@/components/UserList.vue'),
    BootstrapSpinner: () => import('@/components/BootstrapSpinner.vue')
  },
  data: () => ({
    users: null,
    wasLoaded: false
  }),
  computed: {
    userCount() {
      return this.users.length
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
