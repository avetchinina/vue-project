<template>
  <div>
    <table class="table table-border">
      <thead>
        <tr>
          <slot name="table-head">
            <th></th>
            <th>ФИО</th>
            <th>Возраст</th>
            <th>E-mail</th>
            <th>Телефон</th>
            <th>Компания</th>
            <th>Адрес</th>
            <th>Баланс</th>
            <th>Управление</th>
          </slot>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in partUsers" :key="user.id">
          <slot name="table-row" :item="user" :getFullName="getFullName">
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
                <button
                  type="button"
                  class="btn btn-danger"
                  @click="$emit('delete-user', user.id)"
                >
                  <span class="mdi mdi-delete"></span>
                </button>
              </div>
            </td>
          </slot>
        </tr>
      </tbody>
    </table>
    <paginator :users="users" @input="value => (partUsers = value)"></paginator>
  </div>
</template>

<script>
import uppercase from '@/methods/uppercase.js'
import Paginator from '@/components/Paginator.vue'

export default {
  name: 'UserList',
  components: {
    Paginator
  },
  filters: {
    uppercase: uppercase
  },
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    partUsers: null
  }),
  methods: {
    getFullName(user) {
      return user.firstName + ' ' + user.lastName
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
