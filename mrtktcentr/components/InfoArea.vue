<template>
  <div class="infoArea" :class="classname">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    classname: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.infoArea {
  max-width: 920px;
  padding: 40px 60px;
  background-color: $infoAreaGray;

  @media (max-width: 767px) {
    padding: 20px;
  }

  p {
    margin-bottom: 20px;
    font-size: 20px;

    &:last-of-type {
      margin-bottom: 0;
    }

    @media (max-width: 767px) {
      font-size: 18px;
    }

    @media (max-width: 425px) {
      margin-bottom: 12px;
    }
  }
}
</style>
