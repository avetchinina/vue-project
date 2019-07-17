<template>
  <div class="row">
    <ul class="pagination col-6">
      <li class="page-item" :class="{ disabled: currentPage == 1 }">
        <a class="page-link" @click="changePage(currentPage - 1)">Назад</a>
      </li>
      <li
        v-for="num in pageCount"
        :key="num"
        class="page-item"
        :class="{ active: num === currentPage }"
      >
        <a class="page-link" @click="changePage(num)">{{ num }}</a>
      </li>
      <li class="page-item" :class="{ disabled: currentPage == pageCount }">
        <a class="page-link" @click="changePage(currentPage + 1)">Вперед</a>
      </li>
    </ul>
    <div class="input-group mb-4 input-group-sm offset-4 col-2">
      <select id="page-size" class="form-control" v-model.lazy.number="size">
        <option>5</option>
        <option>10</option>
        <option>15</option>
        <option>20</option>
        <option>30</option>
        <option>50</option>
      </select>
      <div class="input-group-append">
        <span class="input-group-text">Количество</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Paginator',
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    usersPart: null,
    size: 5,
    currentPage: 1
  }),
  computed: {
    pageCount() {
      return Math.max(Math.round(this.users.length / this.size), 1)
    },
    startPos() {
      return (this.currentPage - 1) * this.size
    }
  },
  watch: {
    usersPart: {
      deep: true,
      handler() {
        this.$emit('input', this.usersPart)
      }
    },
    startPos: {
      deep: true,
      handler() {
        this.updateUsersPart()
      }
    }
  },
  mounted() {
    this.updateUsersPart()
  },
  methods: {
    updateUsersPart() {
      this.usersPart = this.users.slice(
        this.startPos,
        this.startPos + this.size
      )
    },
    changePage(page) {
      this.currentPage = +page
    }
  }
}
</script>

<style lang="less">
.page-item {
  cursor: pointer;
}
</style>
