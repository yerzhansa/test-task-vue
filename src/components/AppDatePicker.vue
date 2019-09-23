<template lang="pug">
  v-menu(
      ref='menu',
      v-model='menu',
      :close-on-content-click='false',
      transition='scale-transition',
      offset-y,
      min-width='290px'
    )
    template(v-slot:activator='{ on }')
      v-text-field(
          :value='date',
          label='Дата заявки',
          readonly,
          v-on='on',
          filled,
          :rules="$attrs.rules"
      )
    v-date-picker(
        locale='ru',
        :value="date"
        no-title,
        scrollable,
        @input="changeDate"
      )
</template>

<script>
export default {
  name: 'AppDatePicker',
  props: ['value'],
  data() {
    return {
      date: '',
      menu: false
    }
  },
  watch: {
    value(value) {
      this.date = value
    }
  },
  methods: {
    changeDate(value) {
      this.menu = false
      this.date = value
      this.$emit('input', this.date)
    }
  }
}
</script>

<style scoped></style>
