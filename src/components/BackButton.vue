<template>
  <button class="btn btn-dark" @click="back">
    <span class="mdi mdi-arrow-left-circle"></span> Назад
  </button>
</template>

<script>
export default {
  name: 'BackButton',
  methods: {
    back() {
      if (window.history.length > 1) {
        this.$router.go(-1)
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>
