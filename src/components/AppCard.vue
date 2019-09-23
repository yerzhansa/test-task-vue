<template lang="pug">
  v-card.mx-auto(elevation="0", max-width="900")
    v-card-title
      slot(name='title')
    v-divider
    v-card-text
      slot(name='content')
    v-divider
    v-card-actions
      slot(name='actions')
</template>

<script>
export default {
  name: 'AppCard'
}
</script>

<style scoped></style>
