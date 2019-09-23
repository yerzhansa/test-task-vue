export default {
  init(snackbarComponent) {
    this.snackbarComponent = snackbarComponent
    this.snackbarComponent.snackbar.color = 'default'
  },

  show(message) {
    this.snackbarComponent.snackbar.color = 'info'
    this.snackbarComponent.snackbar.message = message
    this.snackbarComponent.snackbar.shown = true
  },

  error(message) {
    this.snackbarComponent.snackbar.color = 'red darken-1'
    this.snackbarComponent.snackbar.message = message
    this.snackbarComponent.snackbar.shown = true
  },

  success(message) {
    this.snackbarComponent.snackbar.color = 'green darken-1'
    this.snackbarComponent.snackbar.message = message
    this.snackbarComponent.snackbar.shown = true
  },

  hide() {
    this.snackbarComponent.snackbar.shown = false
  }
}
