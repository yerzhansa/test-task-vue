<template lang="pug">
  v-app-bar(app, color='white', elevation="0")
    v-app-bar-nav-icon(@click.stop='toggleDrawer')
    v-toolbar-title Заявки
</template>

<script>
export default {
  name: 'AppToolbar',
  props: {
    drawer: Boolean
  },
  methods: {
    toggleDrawer() {
      this.$emit('update:drawer', !this.drawer)
    }
  }
}
</script>

<style scoped></style>
