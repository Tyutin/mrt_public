<template>
  <div class="akcii">
    <div class="container akcii__block" v-html="html" />
  </div>
</template>

<script>
export default {
  props: {
    html: {
      type: String,
      default () {
        return ''
      }
    }
  },
  computed: {
    funcs () {
      return this.html
    }
  }
}
</script>

<style lang="scss">
.akcii {
  @media screen and (max-width: 768px) {
    padding-left: 0;
    padding-right: 0;
  }

  &__block {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    @media screen and (max-width: 767px) {
      min-height: 250px;
      padding: 30px 20px 20px;
    }

    @media screen and (max-width: 425px) {
      padding: 20px 15px 15px;
    }

    h3 {
      margin-bottom: 20px;

      @media screen and (max-width: 425px) {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
