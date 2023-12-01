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
    color: #fff;
    background-image: url("/img/akcii.jpg");
    min-height: 451px;
    padding: 70px 30px 30px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-family: "PantonSemiBold", sans-serif;
    text-align: center;
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
      font-size: 58px;
      line-height: 1.1;
      margin-bottom: 20px;

      @media screen and (max-width: 1024px) {
        font-size: 50px;
      }

      @media screen and (max-width: 767px) {
        font-size: 38px;
      }

      @media screen and (max-width: 425px) {
        font-size: 23px;
        margin-bottom: 10px;
      }
    }

    h4 {
      font-size: 45px;
      line-height: 1.1;
      margin-bottom: 20px;

      @media screen and (max-width: 1024px) {
        font-size: 40px;
      }

      @media screen and (max-width: 767px) {
        font-size: 33px;
      }

      @media screen and (max-width: 425px) {
        font-size: 20px;
        margin-bottom: 10px;
      }
    }

    span {
      color: $red;
    }

    p {
      font-size: 23px;

      @media screen and (max-width: 767px) {
        font-size: 18px;
      }

      @media screen and (max-width: 425px) {
        font-size: 14px;
      }
    }
  }
}
</style>
