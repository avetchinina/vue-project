<template>
  <div>
    <div class="form-group">
      <label for="firstName">Имя</label>
      <input
        type="text"
        class="form-control"
        name="firstName"
        id="firstName"
        v-model="localUser.firstName"
        v-validate="{ required: true }"
        :class="{ 'is-invalid': errors.has('firstName') }"
      />
      <span v-show="errors.has('firstName')" class="help-block text-danger">
        {{ errors.first('firstName') }}
      </span>
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
        name="age"
        v-model.number="localUser.age"
        v-validate="{ numeric: true, min: 1, max: 199 }"
        :class="{ 'is-invalid': errors.has('age') }"
      />
      <span v-show="errors.has('age')" class="help-block text-danger">
        {{ errors.first('age') }}
      </span>
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input
        type="email"
        class="form-control"
        id="email"
        name="email"
        v-model="localUser.email"
        v-validate="{ required: true, email: true }"
        :class="{ 'is-invalid': errors.has('email') }"
      />
      <span v-show="errors.has('email')" class="help-block text-danger">
        {{ errors.first('email') }}
      </span>
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
      <label for="access-level">Уровень доступа</label>
      <select
        id="access-level"
        class="form-control"
        v-model="localUser.accessLevel"
      >
        <option v-for="opt in accessList" :key="opt">{{ opt }}</option>
      </select>
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
      <label for="address">Дата регистрации</label>
      <Calendar v-model="localUser.registered"></Calendar>
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
    <div class="form-group">
      <label for="address">Биография</label>
      <vue-editor v-model="localUser.about"></vue-editor>
    </div>
    <div class="form-group form-check">
      <label class="form-check-label" for="is-active">
        <input
          type="checkbox"
          class="form-check-input"
          id="is-active"
          v-model="localUser.isActive"
        />
        {{ localUser.isActive ? 'Активен' : 'Не активен' }}
      </label>
    </div>
  </div>
</template>

<script>
import isEqual from 'lodash.isequal'
import { VueEditor } from 'vue2-editor'

export default {
  name: 'UserForm',
  components: {
    Calendar: () => import('@/plugins/Calendar.vue'),
    VueEditor: VueEditor
  },
  model: {
    prop: 'user'
  },
  inject: ['$validator'],
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    localUser: null,
    accessList: ['admin', 'user', 'guest']
  }),
  watch: {
    user: {
      deep: true,
      handler() {
        if (!isEqual(this.localUser, this.user)) {
          this.localUser = Object.assign({}, this.user)
        }
      }
    },
    localUser: {
      deep: true,
      handler() {
        if (!isEqual(this.localUser, this.user)) {
          this.$emit('input', this.localUser)
        }
      }
    }
  },
  created() {
    this.localUser = Object.assign({}, this.user)
  }
}
</script>
