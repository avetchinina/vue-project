<template>
  <div>
    <form v-on:submit.prevent="sendUser">
      <div class="form-group">
        <label for="firstName">Имя</label>
        <input
          type="text"
          class="form-control"
          id="firstName"
          :value="user.firstName"
          v-on:input="inputHandler"
        />
      </div>
      <div class="form-group">
        <label for="lastName">Фамилия</label>
        <input
          type="text"
          class="form-control"
          id="lastName"
          :value="user.lastName"
          v-on:input="inputHandler"
        />
      </div>
      <div class="form-group">
        <label for="age">Возраст</label>
        <input
          type="text"
          class="form-control"
          id="age"
          :value="user.age"
          v-on:input="inputHandler"
        />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          :value="user.email"
          v-on:input="inputHandler"
        />
      </div>
      <div class="form-group">
        <label for="phone">Телефон</label>
        <input
          type="phone"
          class="form-control"
          id="phone"
          :value="user.phone"
          v-on:input="inputHandler"
        />
      </div>
      <div class="form-group">
        <label for="company">Компания</label>
        <input
          type="text"
          class="form-control"
          id="company"
          v-model="user.company"
        />
      </div>
      <div class="form-group">
        <label for="address">Адрес</label>
        <textarea
          class="form-control"
          id="address"
          v-model="user.address"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="balance">Баланс</label>
        <input
          type="text"
          class="form-control"
          id="balance"
          v-model="user.balance"
        />
      </div>
      <button type="submit" class="btn btn-primary">Сохранить</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EditUser',
  data: () => ({
    user: {}
  }),
  mounted() {
    this.loadUser()
  },
  methods: {
    inputHandler($event) {
      this.user[$event.target.getAttribute('id')] = $event.target.value
    },
    loadUser() {
      let url = 'http://localhost:3000/users/' + this.$route.params.id
      axios
        .get(url)
        .then(response => response.data)
        .then(user => {
          this.user = user
        })
        .catch(err => console.log(err))
    },
    sendUser() {
      let url = 'http://localhost:3000/users/' + this.$route.params.id
      axios
        .put(url, this.user)
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped="less"></style>
