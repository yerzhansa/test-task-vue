<template lang="pug">
  v-app
    app-navigation-drawer(:drawer.sync="drawer")
    app-toolbar(:drawer.sync="drawer")
    v-content(style="background: #e5e9f1")
      v-container
        router-view
    v-snackbar(
        v-model="snackbar.shown",
        :color="snackbar.color",
        right,
        bottom
      )
      span {{ snackbar.message }}
      v-btn(@click="hideSnackbar", text) OK
</template>

<script>
import AppNavigationDrawer from './components/AppNavigationDrawer'
import AppToolbar from './components/AppToolbar'
import Snackbar from '@/services/Snackbar'

export default {
  components: { AppToolbar, AppNavigationDrawer },
  data() {
    return {
      drawer: null,
      snackbar: {
        shown: false,
        color: 'info',
        message: ''
      }
    }
  },
  mounted() {
    Snackbar.init(this)
  },
  methods: {
    hideSnackbar() {
      this.snackbar.shown = false
    }
  }
}
</script>
