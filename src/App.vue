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
          <li class="nav-item">
            <router-link class="nav-link" to="/users">
              Список пользователей
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/add-user">
              Добавить пользователя
            </router-link>
          </li>
        </ul>
      </div>
    </nav>

    <section>
      <router-view />
    </section>
  </div>
</template>

<style lang="less">
#app {
  margin-top: 90px;
}
.navbar-brand {
  img {
    max-width: 50px;
  }
}
.nav {
  .navbar-dark .nav-item &-link {
    &.router-link-active {
      color: #fff;
    }
  }
}
</style>
