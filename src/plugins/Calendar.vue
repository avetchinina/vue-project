<template>
  <input ref="calendarInput" class="form-control" type="text" :value="value" />
</template>

<script>
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.css'

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
      const self = this
      this.calendar = flatpickr(this.$refs.calendarInput, {
        dateFormat: 'd.m.Y',
        onChange: function(_, dateStr) {
          self.$emit('input', dateStr)
        }
      })
    },
    updateCalendar() {
      if (this.calendar) {
        this.calendar.setDate(this.value)
      }
    }
  }
}
</script>
