<template>
  <div class="container">
    <form v-if="user" @submit.prevent="sendUser">
      <user-form :user="user" @input="value => (user = value)"></user-form>
      <button type="submit" class="btn btn-primary">Сохранить</button>
    </form>
    <bootstrap-spinner v-else></bootstrap-spinner>
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue'
import axios from 'axios'
import BootstrapSpinner from '@/components/BootstrapSpinner.vue'

export default {
  name: 'EditUser',
  components: {
    UserForm,
    BootstrapSpinner
  },
  data: () => ({
    user: null
  }),
  computed: {
    userId() {
      return this.$route.params.id
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
      axios
        .put(this.url, this.user)
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }
  }
}
</script>
