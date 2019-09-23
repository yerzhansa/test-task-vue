<template lang="pug">
  app-card
    template(v-slot:title)
      v-container
        v-row(justify="space-between")
          v-col
            v-row Список заявок
            v-row
              v-switch(
                label="Групповые операции",
                color="primary",
                v-model="actionsToggle",
                hide-details
              )
          v-col
            v-row(justify="end").pr-2
              v-btn(
                color="primary",
                @click="$router.push({ name: 'CreateBid' })"
              ) Добавить
        v-row(align="baseline" v-if="actionsToggle")
          v-col(lg="3", md="4")
            v-select(
              v-model='commonStatusId'
              :items="bidStatuses"
              item-text='name'
              item-value='id'
              label="Статус заявок"
              hide-details
            )
          v-col()
            v-btn(small, color="primary", @click="changeStatuses")
              v-icon(dark) mdi-content-save
    template(v-slot:content)
      v-data-table(
        show-select
        :headers="headers"
        :items="bids"
        :items-per-page="10"
        class="elevation-0"
        v-model="selectedBids"
      )
        template(v-slot:item.statusName='{ item }')
          v-chip(:color='getColor(item.statusId)', dark='') {{ item.statusName }}
        template(v-slot:item.action='{ item }')
          v-icon.mr-3(
              @click="$router.push({ name: 'EditBid', params: { id: item.id } })"
            )
            | mdi-table-edit
          v-icon(@click='removeBid(item)')
            | mdi-delete
</template>

<script>
import { getBids, deleteBid, changeBid } from '../services/BidsService'
import AppCard from '../components/AppCard'
import { bidStatuses } from '../constants/constants'
import Snackbar from '../services/Snackbar'

export default {
  components: { AppCard },
  data() {
    return {
      bids: [],
      selectedBids: [],
      commonStatusId: 1,
      actionsToggle: false,
      bidStatuses,
      headers: [
        { text: 'Номер', value: 'number', align: 'center' },
        { text: 'Статус', value: 'statusName', align: 'center' },
        { text: 'Дата', value: 'date', align: 'center' },
        { text: 'Действия', value: 'action', align: 'center', sortable: false }
      ]
    }
  },
  mounted() {
    this.getBids()
  },
  methods: {
    getBids() {
      this.bids = getBids()
    },
    getColor(statusId) {
      return bidStatuses.find(status => status.id === statusId).color
    },
    removeBid(item) {
      deleteBid(item.id)
      Snackbar.success('Заявка удалена')
      this.getBids()
    },
    changeStatuses() {
      if (this.selectedBids.length === 0) {
        Snackbar.error('Выберите заявки')
        return
      }

      this.selectedBids.forEach(item => {
        changeBid(item.id, { statusId: this.commonStatusId })
      })
      Snackbar.success('Статус заявок изменен')
      this.getBids()
    }
  }
}
// TODO component needs refactoring
</script>

<style scoped></style>
