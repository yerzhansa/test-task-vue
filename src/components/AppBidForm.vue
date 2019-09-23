<template lang="pug">
  v-form(ref="form" @input="input")
    v-row
      v-col(cols="12" sm="6" md="4")
        v-text-field(
        v-model="bid.number"
        label="Номер заявки"
        filled
        :rules="required"
        )
      v-col(cols='12' sm="6" md="4")
        app-date-picker(v-model="bid.date", :rules="required")
      v-col(cols="12" sm="6" md="4")
        v-select(
        v-model='bid.statusId'
        :items="bidStatuses"
        item-text='name'
        item-value='id'
        filled
        label="Статус заявки"
        :rules="required"
        )
      v-col(cols="12")
        v-textarea(
        v-model='bid.comment'
        label="Комментарий"
        filled
        :rules="required"
        )
</template>

<script>
import { bidStatuses } from '../constants/constants'
import { required } from '../utils/validationRules'
import AppDatePicker from './AppDatePicker'

export default {
  name: 'AppBidForm',
  components: { AppDatePicker },
  props: ['value'],
  data() {
    return {
      bidStatuses,
      bid: {
        date: null,
        comment: '',
        statusId: null,
        number: null
      },
      required
    }
  },
  watch: {
    value(value) {
      this.bid = value
    }
  },
  methods: {
    input() {
      this.$emit('input', this.bid)
    }
  }
}
</script>

<style scoped></style>
