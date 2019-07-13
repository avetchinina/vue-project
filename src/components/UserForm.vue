<template>
  <div>
    <div class="form-group">
      <label for="firstName">Имя</label>
      <input
        type="text"
        class="form-control"
        id="firstName"
        :value="localUser.firstName"
        @input="inputHandler"
      />
    </div>
    <div class="form-group">
      <label for="lastName">Фамилия</label>
      <input
        type="text"
        class="form-control"
        id="lastName"
        :value="localUser.lastName"
        @input="inputHandler"
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
        :value="localUser.email"
        @input="inputHandler"
      />
    </div>
    <div class="form-group">
      <label for="phone">Телефон</label>
      <input
        type="phone"
        class="form-control"
        id="phone"
        :value="localUser.phone"
        @input="inputHandler"
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
export default {
  name: 'UserForm',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    localUser: null
  }),
  watch: {
    localUser: {
      deep: true,
      handler() {
        this.$emit('input', this.localUser)
      }
    }
  },
  created() {
    this.localUser = Object.assign({}, this.user)
  },
  methods: {
    inputHandler($event) {
      this.localUser[$event.target.getAttribute('id')] = $event.target.value
    }
  }
}
</script>
