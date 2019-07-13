<template>
  <div>
    <button
      type="button"
      class="btn btn-primary float-right"
      @click="toggleUserList"
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
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in localUsers" :key="user.id">
          <td><img :src="user.picture" class="img-thumbnail" /></td>
          <td>{{ getFullName(user) }}</td>
          <td>{{ user.age }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.company | uppercase }}</td>
          <td>{{ user.address }}</td>
          <td>{{ user.balance }}</td>
          <td>
            <div class="btn-group">
              <router-link
                :to="{ name: 'edit-user', params: { id: user.id } }"
                tag="button"
                class="btn btn-success"
              >
                <span class="mdi mdi-account-edit"></span>
              </router-link>
              <button class="btn btn-danger" @click="deleteUser(user.id)">
                <span class="mdi mdi-delete"></span>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import uppercase from '@/methods/uppercase.js'
import axios from 'axios'

export default {
  name: 'UserList',
  filters: {
    uppercase: uppercase
  },
  props: {
    users: {
      required: true,
      type: Array
    }
  },
  data: () => ({
    isShow: true,
    localUsers: null
  }),
  watch: {
    localUsers: {
      deep: true,
      handler() {
        console.log(this.localUsers)
        this.$emit('change-users', this.localUsers)
      }
    }
  },
  created() {
    this.localUsers = this.users.slice()
  },
  methods: {
    toggleUserList: function() {
      this.isShow = !this.isShow
    },
    getFullName(user) {
      return user.firstName + ' ' + user.lastName
    },
    deleteUser(id) {
      axios.delete('http://localhost:3000/users/' + id)
      this.localUsers = this.localUsers.filter(user => user.id !== id)
    }
  }
}
</script>

<style lang="less">
.table {
  .img-thumbnail {
    max-width: 60px;
  }
}
</style>
