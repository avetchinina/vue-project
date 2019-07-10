<template>
  <div class="container">
    <component :is="getComponent"></component>
  </div>
</template>

<script>
import AddUser from '@/components/AddUser.vue'
import EditUser from '@/components/EditUser.vue'

export default {
  name: 'ManageUser',
  components: {
    AddUser,
    EditUser
  },
  computed: {
    getComponent() {
      return this.$route.params.id !== undefined ? EditUser : AddUser
    }
  }
}
</script>

<style scoped></style>
