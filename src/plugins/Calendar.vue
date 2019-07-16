<template>
  <input ref="pikadayInput" class="form-control" v-model="value" />
</template>

<script>
import Pikaday from 'pikaday'
import 'pikaday/css/pikaday.css'

export default {
  name: 'Calendar',
  props: {
    value: {
      type: String
    }
  },
  data: () => ({
    calendar: null
  }),
  mounted() {
    this.calendar = new Pikaday({
      format: 'DD.MM.YYYY',
      field: this.$refs.pikadayInput,
      toString(date) {
        let day = date.getDate()
        day = day < 10 ? `0${day}` : day
        let month = date.getMonth() + 1
        month = month < 10 ? `0${month}` : month
        const year = date.getFullYear()
        return `${day}.${month}.${year}`
      }
    })
  },
  beforeDestroy() {
    this.calendar.destroy()
  },
  methods: {}
}
</script>
