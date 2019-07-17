<template>
  <div class="container">
    <div v-if="user">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" @click="changeUser(userId - 1)">Предыдущий</a>
        </li>
        <li class="page-item">
          <a class="page-link" @click="changeUser(userId + 1)">Следующий</a>
        </li>
      </ul>
      <form @submit.prevent="sendUser">
        <user-form v-model="user"></user-form>
        <button type="submit" class="btn btn-primary">Сохранить</button>
      </form>
    </div>
    <div v-else>
      <div class="alert alert-warning">
        Пользователь не найден!
      </div>
      <router-link class="btn btn-info" tag="button" to="/users">
        Перейти к списку пользователей
      </router-link>
    </div>
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue'
import axios from 'axios'

export default {
  name: 'EditUser',
  components: {
    UserForm
  },
  data: () => ({
    user: null
  }),
  computed: {
    userId() {
      return +this.$route.params.id
    },
    url() {
      return 'http://localhost:3000/users/' + this.userId
    }
  },
  mounted() {
    this.loadUser()
  },
  methods: {
    loadUser() {
      axios
        .get(this.url)
        .then(response => response.data)
        .then(user => {
          this.user = user
        })
        .catch(err => console.log(err))
    },
    sendUser() {
      this.$validator.validateAll()
      if (this.errors.any()) {
        alert('Заполните все поля корректно')
        return
      }
      axios
        .put(this.url, this.user)
        .then(() => {
          this.$router.push('/users')
        })
        .catch(err => console.log(err))
    },
    changeUser(id) {
      this.$router.push({ name: 'edit-user', params: { id: id } })
      this.loadUser()
    }
  }
}
</script>
