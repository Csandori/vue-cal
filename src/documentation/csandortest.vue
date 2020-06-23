<template>
  <div>
    {{ events }}
    <div>
      <v-text-field v-model="interval" label="interval"></v-text-field>
    </div>
    <div style="display:flex">
      <div>Week days</div>
      <v-checkbox
        v-for="n in 7"
        v-model="dayOfWeek"
        :key="n"
        :label="(n-1).toString()"
        :value="(parseInt(n)-1)"
      ></v-checkbox>
    </div>
    <div style="display:flex">
      <div>Months</div>
      <v-checkbox
        v-for="n in 12"
        v-model="months"
        :key="n"
        :label="(n-1).toString()"
        :value="(n-1)"
      ></v-checkbox>
    </div>
    <div style="display:flex">
      <div>dayOfMonth</div>
      <v-checkbox
        v-for="n in 31"
        v-model="dayOfMonth"
        :key="n"
        :label="n.toString()"
        :value="n"
      ></v-checkbox>
    </div>
    {{ dates }}
    <VueCal :events="events" />
  </div>
</template>
<script>
import VueCal from '@/vue-cal'
const now = new Date().subtractMinutes(840)
const first = new Date().subtractDays(500)
export default {
  components: { VueCal },
  data () {
    return {
      interval: 1,
      years: [],
      months: [],
      dayOfMonth: [],
      dayOfWeek: [],
      selectedDate: now,
      recurringEvents: [
        {
          title: 'event',
          recurring: true,
          recurringOptions: { start: first, end: now }
        }
      ]
    }
  },
  computed: {
    events () {
      return [
        {
          title: 'event',
          start: now,
          end: now.addMinutes(120),
          repeat: true,
          repeatOptions: {
            until: now.addDays(250),
            years: [],
            months: this.months,
            dayOfMonth: this.dayOfMonth,
            dayOfWeek: this.dayOfWeek,
            interval: this.interval
          }
        }
      ]
    },
    dates: function () {
      return []
    }
  },
  methods: {
    log (...params) {
      // eslint-disable-next-line
      console.log(...params)
    }
  }
}
</script>

<style lang="scss">
.test {
  .v-application--wrap {
    min-height: 0;
    padding-top: 8em;
    margin-top: -6em;
  }
  footer {
    display: none !important;
  }

  .vuecal {
    min-height: 400px;
    max-height: 75vh;
  }
}
</style>
