<template>
  <div class="row">
    <ul class="pagination col-6">
      <li
        v-for="num in pageCount"
        :key="num"
        class="page-item"
        :class="{ active: num === currentPage }"
      >
        <a class="page-link" :data-href="num" @click="changePage">{{ num }}</a>
      </li>
    </ul>
    <div class="input-group mb-4 input-group-sm offset-4 col-2">
      <input type="number" class="form-control" v-model.lazy="size" />
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
      return Math.round(this.users.length / this.size)
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
    size() {
      this.updateUsersPart()
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
    changePage(event) {
      this.currentPage = +event.target.dataset.href
      this.updateUsersPart()
    }
  }
}
</script>
