export const state = () => ({
  callbackPopupIsOpen: false,
  callbackMode: 'callback',
  usluga: ''
})

export const mutations = {
  openCallbackPopup (state) {
    state.callbackPopupIsOpen = true
    state.callbackMode = 'callback'
  },
  openSuccessPopup (state) {
    state.callbackPopupIsOpen = true
    state.callbackMode = 'success'
  },
  openErrorPopup (state) {
    state.callbackPopupIsOpen = true
    state.callbackMode = 'error'
  },
  openUslugaPopup (state, usluga) {
    state.callbackPopupIsOpen = true
    state.callbackMode = 'usluga'
    state.usluga = usluga
  },
  closeAllPopup (state) {
    state.callbackPopupIsOpen = false
    state.callbackMode = 'callback'
    state.usluga = ''
  }
}
