<template>
  <div>
    <form @submit.prevent="$parent.sendUser">
      <div class="form-group">
        <label for="firstName">Имя</label>
        <input
          type="text"
          class="form-control"
          id="firstName"
          :value="user.firstName"
          @input="inputHandler"
        />
      </div>
      <div class="form-group">
        <label for="lastName">Фамилия</label>
        <input
          type="text"
          class="form-control"
          id="lastName"
          :value="user.lastName"
          @input="inputHandler"
        />
      </div>
      <div class="form-group">
        <label for="age">Возраст</label>
        <input
          type="number"
          class="form-control"
          id="age"
          v-model.number="user.age"
        />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          :value="user.email"
          @input="inputHandler"
        />
      </div>
      <div class="form-group">
        <label for="phone">Телефон</label>
        <input
          type="phone"
          class="form-control"
          id="phone"
          :value="user.phone"
          @input="inputHandler"
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
export default {
  name: 'ManageUser',
  props: {
    user: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    inputHandler($event) {
      this.user[$event.target.getAttribute('id')] = $event.target.value
    }
  }
}
</script>
