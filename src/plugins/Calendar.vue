<template>
  <input ref="pikadayInput" class="form-control" type="text" :value="value" />
</template>

<script>
import Pikaday from 'pikaday'
import 'pikaday/css/pikaday.css'

export default {
  name: 'Calendar',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data: () => ({
    calendar: null
  }),
  watch: {
    value: 'updateCalendar'
  },
  mounted() {
    this.initCalendar()
  },
  beforeDestroy() {
    this.calendar.destroy()
  },
  methods: {
    initCalendar() {
      this.calendar = new Pikaday({
        format: 'DD.MM.YYYY',
        field: this.$refs.pikadayInput,
        defaultDate: this.dateParse(this.value),
        toString: this.dateToString,
        parse: this.dateParse,
        onSelect: date => {
          this.$emit('input', this.dateToString(date))
        }
      })
    },
    updateCalendar() {
      if (this.calendar) {
        this.calendar.setDate(this.value)
      }
    },
    dateToString(date) {
      let day = date.getDate()
      day = day < 10 ? `0${day}` : day
      let month = date.getMonth() + 1
      month = month < 10 ? `0${month}` : month
      const year = date.getFullYear()
      return `${day}.${month}.${year}`
    },
    dateParse(dateString) {
      let parts = dateString.split('.')
      let day = parseInt(parts[0], 10)
      let month = parseInt(parts[1], 10) - 1
      let year = parseInt(parts[2], 10)
      return new Date(year, month, day)
    }
  }
}
</script>
