<template lang="pug">
  app-card
    template(v-slot:title)
      | Создание
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
        @click="create",
        color="primary"
      ) Сохранить
</template>

<script>
import { createBid } from '@/services/BidsService'
import Snackbar from '@/services/Snackbar'
import AppCard from '@/components/AppCard'
import AppBidForm from '@/components/AppBidForm'
import uuidv4 from 'uuid/v4'

export default {
  name: 'CreateBid',
  components: { AppBidForm, AppCard },
  data() {
    return {
      bid: null,
      createBid
    }
  },
  methods: {
    create() {
      if (!this.$refs.bidForm.$refs.form.validate()) return
      this.bid.id = uuidv4() // create id for bid
      createBid(this.bid)
      Snackbar.success('Заявка создана')
    }
  }
}
</script>

<style scoped></style>
