<template>
  <div class="container">
    <manage-user v-if="user" :user="user"></manage-user>
    <bootstrap-spinner v-else></bootstrap-spinner>
  </div>
</template>

<script>
import ManageUser from '@/components/ManageUser.vue'
import axios from 'axios'
import BootstrapSpinner from '@/components/BootstrapSpinner.vue'

export default {
  name: 'EditUser',
  components: {
    ManageUser,
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
