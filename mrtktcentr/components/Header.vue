<template>
  <header class="header">
    <div class="header__top">
      <div class="container">
        <div class="header__top-fake">
          <a id="poor-vision-desktop" href="https://special.mrtktcentr.ru/">слабовидящим</a>
        </div>
        <span>Ижевск, ул. Удмуртская, 255г, офисный центр «Флагман» тел.: <a href="tel:+73412777703">+7(3412) 77-77-03</a></span>
        <button class="header__top-btn" @click="openCallbackPopup">
          Заказать звонок
        </button>
      </div>
    </div>
    <div class="container header__bottom">
      <nuxt-link to="/" class="header__logo" alt="На главную">
        <img src="/img/logo1.png" alt="">
      </nuxt-link>
      <nuxt-link to="/" alt="На главную">
        <h1 class="header__h1">
          МРТ- И КТ-ИССЛЕДОВАНИЯ<br>КОНСУЛЬТАЦИЯ ОНКОЛОГА
        </h1>
      </nuxt-link>
      <a class="header__toggle" :class="{ active : isToggleActive }" alt="Навигация" @click="ToggleNav" />
      <nav :class="{ active : isToggleActive }">
        <ul>
          <li id="poor-vision-mob" @click="ToggleNav">
            <a href="https://special.mrtktcentr.ru/">слабовидящим</a>
          </li>
          <li @click="ToggleNav">
            <nuxt-link to="/#discount">
              акции
            </nuxt-link>
          </li>
          <li @click="ToggleNav">
            <nuxt-link to="/#price">
              услуги и цены
            </nuxt-link>
          </li>
          <li @click="ToggleNav">
            <nuxt-link to="/podgotovka">
              подготовка к мрт
            </nuxt-link>
          </li>
          <li @click="ToggleNav">
            <nuxt-link to="/about">
              о клинике
            </nuxt-link>
          </li>
          <li class="red" @click="ToggleNav">
            <nuxt-link to="/kompleksy">
              комплексы
            </nuxt-link>
          </li>
          <li @click="ToggleNav">
            <nuxt-link to="/dms-oms">
              ДМС/ОМС
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      isToggleActive: false
    }
  },
  methods: {
    ToggleNav () {
      this.isToggleActive = !this.isToggleActive
    },
    openCallbackPopup () {
      this.$store.commit('popups/openCallbackPopup')
    }
  }
}
</script>

<style lang="scss" scoped>
#poor-vision-mob {
  @media screen and (min-width:1024px) {
    display: none;
  }
}
#poor-vision-desktop {
  text-transform: uppercase;
  @media screen and (max-width:1023px) {
    display: none;
  }
}
.header {
  width: 100%;
  position: fixed;
  background-color: #fff;
  z-index: 999;

  &__h1 {
    @media screen and (min-width: 1024px) {
      display: none;
    }

    color: #fff;
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    padding: 8px;

    @media screen and (max-width: 1023px) {
      background-color: $blue;
      align-items: center;
      padding: 8px 14px;
    }

    nav {
      @media screen and (max-width: 1023px) {
        position: absolute;
        right: -100%;
        top: 54px;
        background-color: #fff;
        transition: 0.3s;
        width: 100%;
        padding: 10px 0;
      }
    }

    nav.active {
      @media screen and (max-width: 1023px) {
        right: 0;
      }
    }

    > nav > ul {
      list-style-type: none;
      display: flex;
      color: $blue;

      @media screen and (max-width: 1023px) {
        display: flex;
        flex-direction: column;
      }

      > li > a {
        display: block;
        padding: 20px 0;
        margin-left: 15px;
        font-size: 19px;
        font-family: "PantonBold", sans-serif;
        text-transform: uppercase;

        @media screen and (max-width: 1023px) {
          padding: 10px 20px;
          margin-left: 0;
          text-align: center;
        }

        @media screen and (max-width: 1120px) {
          font-size: 17px;
        }
      }

      > li.red {
        color: $red;
      }
    }
  }

  &__top {
    padding: 8px;
    font-size: 18px;
    color: #fff;
    background-color: $blue;

    @media screen and (max-width: 1023px) {
      display: none;
    }

    a {
      color: #fff;
    }

    > .container {
      display: flex;
      justify-content: space-between;
    }
  }

  &__logo {
    width: 250px;
    display: block;

    @media screen and (max-width: 1120px) {
      width: 230px;
    }

    @media screen and (max-width: 1023px) {
      display: none;
    }

    > img {
      width: 100%;
    }
  }

  &__top-btn {
    width: 140px;
    height: 25px;
    border-radius: 13px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: $red;
    font-size: 0.75rem;
    text-transform: uppercase;

    &:hover {
      cursor: pointer;
    }
  }

  &__top-fake {
    width: 130px;
    height: 25px;
  }

  &__toggle {
    @media screen and (min-width: 1024px) {
      display: none;
    }
    position: relative;
    display: block;
    width: 31px;
    height: 22px;
    border-top: 3px solid #fff;
    border-bottom: 3px solid #fff;
    transition: 0.4s;
  }

  &__toggle::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 99%;
    height: 3px;
    background: #fff;
    -webkit-transition: 0.4s;
    -o-transition: 0.4s;
    transition: 0.4s;
  }

  &__toggle::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 99%;
    height: 3px;
    background: #fff;
    -webkit-transition: 0.4s;
    -o-transition: 0.4s;
    transition: 0.4s;
  }

  &__toggle.active {
    border-color: transparent;
  }

  &__toggle.active::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &__toggle.active::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
}
</style>
