<template>
  <div v-if="haveUsers">
    <button
      type="button"
      class="btn btn-primary float-right"
      v-on:click="toggleUserList"
    >
      {{ isShow ? 'Скрыть' : 'Показать' }}
    </button>
    <table class="table table-border" v-if="isShow">
      <thead>
        <tr>
          <th></th>
          <th>ФИО</th>
          <th>Возраст</th>
          <th>E-mail</th>
          <th>Телефон</th>
          <th>Компания</th>
          <th>Адрес</th>
          <th>Баланс</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" v-bind:key="user.id">
          <td><img :src="user.picture" class="img-thumbnail" /></td>
          <td>{{ getFullName(user) }}</td>
          <td>{{ user.age }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.company | uppercase }}</td>
          <td>{{ user.address }}</td>
          <td>{{ user.balance }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else class="alert alert-warning">
    Нет пользователей!
  </div>
</template>

<script>
import uppercase from '../methods/uppercase'

export default {
  name: 'UserList',
  props: {
    users: {
      required: true,
      type: Array
    }
  },
  data: () => ({
    isShow: true
  }),
  computed: {
    haveUsers: function() {
      return this.users.length > 0
    }
  },
  methods: {
    toggleUserList: function() {
      this.isShow = !this.isShow
    },
    getFullName(user) {
      return user.firstName + ' ' + user.lastName
    }
  },
  filters: {
    uppercase: uppercase
  }
}
</script>

<style scoped="less">
.table {
  .img-thumbnail {
    max-width: 60px;
  }
}
</style>
