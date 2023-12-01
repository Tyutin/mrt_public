<template>
  <div v-if="callbackPopupIsOpen" class="lightbox" @click="closeAllPopup">
    <slot />
  </div>
</template>

<script>
export default {
  computed: {
    callbackPopupIsOpen () {
      return this.$store.state.popups.callbackPopupIsOpen
    }
  },
  methods: {
    closeAllPopup () {
      this.$store.commit('popups/closeAllPopup')
    }
  }
}
</script>

<style lang="scss" scoped>
.lightbox {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    background-color: #00000066;
}
</style>
