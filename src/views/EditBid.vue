<template lang="pug">
  app-card
    template(v-slot:title)
      | Редактирование
    template(v-slot:content)
      app-bid-form(
          ref="bidForm",
          v-model="bid"
        )
    template(v-slot:actions)
      v-btn.ml-auto(
        @click="$router.go(-1)",
        color="red darken-3",
        dark
      ) Отмена
      v-btn(
        @click="saveBid",
        color="primary"
      ) Сохранить
</template>

<script>
import { getOneBid, changeBid } from '@/services/BidsService'
import AppCard from '@/components/AppCard'
import AppBidForm from '@/components/AppBidForm'
import Snackbar from '../services/Snackbar'

export default {
  name: 'EditBid',
  components: { AppBidForm, AppCard },
  props: {
    id: String
  },
  data() {
    return {
      bid: {}
    }
  },
  mounted() {
    this.getBid()
  },
  methods: {
    saveBid() {
      if (!this.$refs.bidForm.$refs.form.validate()) return
      changeBid(this.id, this.bid)
      Snackbar.success('Заявка изменена')
      this.$router.push({ name: 'BidsList' })
    },
    getBid() {
      this.bid = getOneBid(this.id)
    }
  }
}
</script>

<style scoped></style>
