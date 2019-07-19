<template>
  <ul class="pagination col-6">
    <li class="page-item" :class="{ disabled: page === 1 }">
      <a class="page-link" @click.prevent="prevPage">Назад</a>
    </li>
    <li
      v-for="num in pageCount"
      :key="num"
      class="page-item"
      :class="{ active: num === page }"
    >
      <a class="page-link" @click.prevent="changePage(num)">{{ num }}</a>
    </li>
    <li class="page-item" :class="{ disabled: page === pageCount }">
      <a class="page-link" @click.prevent="nextPage">Вперед</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Paginator',
  model: {
    prop: 'page'
  },
  props: {
    total: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      default: 5
    },
    page: {
      type: Number,
      default: 1
    }
  },
  computed: {
    pageCount() {
      return Math.max(Math.round(this.total / this.perPage), 1)
    }
  },
  mounted() {
    this.$emit('change-page', this.page)
  },
  methods: {
    changePage(page) {
      this.$emit('input', parseInt(page))
    },
    prevPage() {
      this.changePage(this.page - 1)
    },
    nextPage() {
      this.changePage(this.page + 1)
    }
  }
}
</script>

<style lang="less">
.page-item {
  cursor: pointer;
}
</style>
