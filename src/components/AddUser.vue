<template>
  <div>
    <form>
      <div class="form-group">
        <label for="user-first-name">Имя</label>
        <input type="text" class="form-control" id="user-first-name" />
      </div>
      <div class="form-group">
        <label for="user-age">Возраст</label>
        <input type="text" class="form-control" id="user-age" />
      </div>
      <div class="form-group">
        <label for="user-email">Email</label>
        <input type="email" class="form-control" id="user-email" />
      </div>
      <div class="form-group">
        <label for="user-phone">Телефон</label>
        <input type="phone" class="form-control" id="user-phone" />
      </div>
      <div class="form-group">
        <label for="user-company">Компания</label>
        <input type="text" class="form-control" id="user-company" />
      </div>
      <div class="form-group">
        <label for="user-address">Адрес</label>
        <textarea class="form-control" id="user-address"></textarea>
      </div>
      <div class="form-group">
        <label for="user-balance">Баланс</label>
        <input type="text" class="form-control" id="user-balance" />
      </div>
      <button type="submit" class="btn btn-primary">Сохранить</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddUser'
}
</script>

<style scoped></style>
