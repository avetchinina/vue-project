<template>
  <div class="container">
    <div v-if="!haveUsers" class="alert alert-warning">
      Пользователи не найдены!
    </div>
    <user-list
      v-else
      :users-count="usersCount"
      :url="'http://localhost:3000/users/'"
    >
    </user-list>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Users',
  components: {
    UserList: () => import('@/components/UserList.vue')
  },
  data: () => ({
    usersCount: null
  }),
  computed: {
    haveUsers() {
      return this.usersCount > 0
    }
  },
  mounted() {
    this.getUsersCount()
  },
  methods: {
    getUsersCount() {
      axios
        .get('http://localhost:3000/users')
        .then(response => {
          this.usersCount = response.data.length
        })
        .catch(err => console.error(err))
    }
  }
}
</script>
