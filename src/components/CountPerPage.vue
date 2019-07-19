<template>
  <div class="input-group mb-4 input-group-sm offset-4 col-2">
    <select
      id="page-size"
      class="form-control"
      :value="value"
      @input="change($event.target.value)"
    >
      <option v-for="opt in select" :key="opt">
        {{ opt }}
      </option>
    </select>
    <div class="input-group-append">
      <span class="input-group-text">Количество</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountPerPage',
  props: {
    value: {
      type: Number,
      default: 5
    },
    select: {
      type: Array,
      default: () => [5, 10, 20, 50]
    }
  },
  methods: {
    change(value) {
      this.$emit('input', value)
    }
  }
}
</script>
