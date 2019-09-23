<template lang="pug">
  v-navigation-drawer(
    :value='drawer',
    @input='emitValue',
    app,
    color="primary",
    dark
  )
    v-list(dense)
      v-list-item(@click="$router.push({ name: 'BidsList' })")
        v-list-item-action
          v-icon mdi-view-list
        v-list-item-content
          v-list-item-title Заявки
      v-list-item(@click="$router.push({ name: 'CreateBid' })")
        v-list-item-action
          v-icon mdi-account-edit
        v-list-item-content
          v-list-item-title Создать заявку
</template>

<script>
export default {
  name: 'AppNavigationDrawer',
  props: {
    drawer: Boolean
  },
  methods: {
    emitValue(value) {
      this.$emit('update:drawer', value)
    }
  }
}
</script>

<style scoped></style>
