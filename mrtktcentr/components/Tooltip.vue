<template>
  <div class="tooltip" :style="styles">ЗАПИСАТЬСЯ</div>
</template>
<script>
export default {
  data () {
    return {
      isMobile: false
    }
  },
  computed: {
    styles () {
      return {
        left: this.isMobile ? '0' : this.$store.state.tooltip.x,
        top: this.isMobile ? '0' : this.$store.state.tooltip.y,
        display: this.isMobile ? 'none' : this.$store.state.tooltip.display
      }
    }
  },
  mounted () {
    this.updateViewportSize()
    window.addEventListener('resize', this.updateViewportSize)
  },
  methods: {
    updateViewportSize () {
      this.isMobile = window.innerWidth <= 1024
    }
  }
}
</script>
<style lang="scss" scoped>
.tooltip {
  display: none;
  padding: 8px;
  position: absolute;
  background: #f24841;
  border-radius: 2px;
  font-family: PantonSemiBold, sans-serif;
  text-transform: uppercase;
  font-size: 14px;
  color: #fff;
  z-index: 99;
}
</style>
