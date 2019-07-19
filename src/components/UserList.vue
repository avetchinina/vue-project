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
        <bootstrap-spinner v-if="loading"></bootstrap-spinner>
        <tr v-else v-for="user in usersPart" :key="user.id">
          <slot name="table-row" :item="user" :getFullName="getFullName">
            <td><img :src="user.picture" class="img-thumbnail" /></td>
            <td>{{ getFullName(user) }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.company }}</td>
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
                  @click="clickDeleteBtn(user.id)"
                >
                  <span class="mdi mdi-delete"></span>
                </button>
              </div>
            </td>
          </slot>
        </tr>
      </tbody>
    </table>
    <div class="row">
      <paginator
        :total="usersCount"
        :per-page="perPage"
        v-model="currentPage"
      ></paginator>
      <count-per-page v-model.number="perPage"></count-per-page>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UserList',
  components: {
    Paginator: () => import('@/components/Paginator.vue'),
    BootstrapSpinner: () => import('@/components/BootstrapSpinner.vue'),
    CountPerPage: () => import('@/components/CountPerPage.vue')
  },
  props: {
    usersCount: {
      type: Number,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  data: () => ({
    usersPart: [],
    currentPage: 1,
    perPage: 5,
    loading: true
  }),
  computed: {
    startPos() {
      return (this.currentPage - 1) * this.perPage
    }
  },
  watch: {
    currentPage() {
      this.loadUsers()
    },
    perPage() {
      this.currentPage = 1
    }
  },
  mounted() {
    this.loadUsers()
  },
  methods: {
    getFullName(user) {
      return user.firstName + ' ' + user.lastName
    },
    clickDeleteBtn(id) {
      this.deleteUser(id)
    },
    loadUsers() {
      this.loading = true
      axios
        .get(this.url, {
          params: {
            _start: this.startPos,
            _end: this.startPos + this.perPage
          }
        })
        .then(response => response.data)
        .then(users => {
          this.usersPart = users
        })
        .catch(err => console.error(err))
        .finally(() => {
          this.loading = false
        })
    },
    deleteUser(id) {
      axios
        .delete(this.url + id)
        .then(() => this.loadUsers())
        .catch(err => console.error(err))
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
