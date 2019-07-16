<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <router-link class="navbar-brand" to="/">
        <img alt="Vue logo" src="./assets/logo.png" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <router-link class="nav-item" tag="li" to="/users">
            <a class="nav-link">Список пользователей</a>
          </router-link>
          <router-link class="nav-item" tag="li" to="/add-user">
            <a class="nav-link">Добавить пользователя</a>
          </router-link>
        </ul>
      </div>
    </nav>

    <section>
      <back-button></back-button>
      <router-view />
    </section>
  </div>
</template>

<script>
import BackButton from '@/components/BackButton.vue'

export default {
  name: 'AddUser',
  components: {
    BackButton
  }
}
</script>

<style lang="less">
#app {
  margin-top: 90px;
}
.navbar-brand {
  img {
    max-width: 50px;
  }
}
</style>
