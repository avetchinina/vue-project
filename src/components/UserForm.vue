<template>
  <div>
    <div class="form-group">
      <label for="firstName">Имя</label>
      <input
        type="text"
        class="form-control"
        id="firstName"
        v-model="localUser.firstName"
      />
    </div>
    <div class="form-group">
      <label for="lastName">Фамилия</label>
      <input
        type="text"
        class="form-control"
        id="lastName"
        v-model="localUser.lastName"
      />
    </div>
    <div class="form-group">
      <label for="age">Возраст</label>
      <input
        type="number"
        class="form-control"
        id="age"
        v-model.number="localUser.age"
      />
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input
        type="email"
        class="form-control"
        id="email"
        v-model="localUser.email"
      />
    </div>
    <div class="form-group">
      <label for="phone">Телефон</label>
      <input
        type="phone"
        class="form-control"
        id="phone"
        v-model="localUser.phone"
      />
    </div>
    <div class="form-group">
      <label for="company">Компания</label>
      <input
        type="text"
        class="form-control"
        id="company"
        v-model="localUser.company"
      />
    </div>
    <div class="form-group">
      <label for="address">Адрес</label>
      <textarea
        class="form-control"
        id="address"
        v-model="localUser.address"
      ></textarea>
    </div>
    <div class="form-group">
      <label for="balance">Баланс</label>
      <input
        type="text"
        class="form-control"
        id="balance"
        v-model="localUser.balance"
      />
    </div>
  </div>
</template>

<script>
import isEqual from 'lodash.isequal'

export default {
  name: 'UserForm',
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    localUser: null
  }),
  watch: {
    value: {
      deep: true,
      handler() {
        if (!isEqual(this.localUser, this.value)) {
          this.localUser = Object.assign({}, this.value)
        }
      }
    },
    localUser: {
      deep: true,
      handler() {
        if (!isEqual(this.localUser, this.value)) {
          this.$emit('input', this.localUser)
        }
      }
    }
  },
  created() {
    this.localUser = Object.assign({}, this.value)
  }
}
</script>
