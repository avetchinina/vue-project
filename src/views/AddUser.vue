<template>
  <div class="container">
    <manage-user :user="user"></manage-user>
  </div>
</template>

<script>
import ManageUser from '@/components/ManageUser.vue'
import axios from 'axios'

export default {
  name: 'AddUser',
  components: {
    ManageUser
  },
  data: () => ({
    user: {}
  }),
  computed: {
    url() {
      return 'http://localhost:3000/users/'
    }
  },
  methods: {
    sendUser() {
      axios
        .post(this.url, this.user)
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }
  }
}
</script>
