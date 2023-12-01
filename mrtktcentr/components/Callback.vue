<template>
  <div class="callback">
    <a href="tel:+73412777703" class="callback__phone">
      <img src="/img/phone.svg" alt="">
      <span>77-77-03</span>
    </a>
    <p>ПН-ВС 7:00-23:00</p>
    <p>или мы сами перезвоним вам</p>
    <button class="callback__btn" @click="openCallbackPopup">
      заказать звонок
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    openCallbackPopup () {
      this.$store.commit('popups/openCallbackPopup')
    }
  }
}
</script>

<style lang="scss" scoped>
.callback {
  @media screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__phone {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    max-width: 49px;
    max-height: 49px;
    margin-right: 10px;
  }

  span {
    color: $blue;
    font-family: "PantonBold", sans-serif;
    font-size: 61px;
    line-height: 1;

    @media screen and (max-width: 425px) {
      font-size: 45px;
    }
  }

  p {
    margin-bottom: 20px;
    font-family: "PantonLightItalic", sans-serif;
    font-size: 23px;
    color: $lgray;
    white-space: nowrap;

    @media screen and (max-width: 425px) {
      font-size: 18px;
      margin-bottom: 15px;
    }
  }

  &__btn {
    background-color: $red;
    width: 309px;
    height: 60px;
    border-radius: 30px;
    font-family: "PantonLight", sans-serif;
    font-size: 26px;
    text-transform: uppercase;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #fff;

    @media screen and (max-width: 425px) {
      font-size: 22px;
      width: 280px;
    }
  }
}
</style>
