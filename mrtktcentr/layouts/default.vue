<template>
  <div v-scroll-lock="callbackPopupIsOpen">
    <Header />
    <Nuxt />
    <Footer />
    <Lightbox>
      <CallbackPopup />
    </Lightbox>
    <Tooltip />
  </div>
</template>

<script>
export default {
  computed: {
    callbackPopupIsOpen () {
      return this.$store.state.popups.callbackPopupIsOpen
    }
  }
}
</script>
