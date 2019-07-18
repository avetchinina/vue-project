<template>
  <div class="container">
    <form @submit.prevent="sendUser">
      <user-form v-model="user"></user-form>
      <button type="submit" class="btn btn-primary">Сохранить</button>
    </form>
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue'
import axios from 'axios'

export default {
  name: 'AddUser',
  components: {
    UserForm
  },
  data: () => ({
    user: null,
    url: 'http://localhost:3000/users/'
  }),
  methods: {
    sendUser() {
      axios
        .post(this.url, this.user)
        .then(response => this.goToEditUser(response.user.id))
        .catch(err => console.log(err))
    },
    goToEditUser(id) {
      this.$router.push({
        name: 'edit-user',
        params: { id: id }
      })
    }
  }
}
</script>
