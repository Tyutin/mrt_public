<template>
  <header class="header">
    <div class="container header__bottom">
      <nav>
        <ul>
          <li @click="hidefunction">
            <nuxt-link to="/">
              на главную
            </nuxt-link>
          </li>
          <li @click="hidefunction">
            <nuxt-link to="/#discount">
              акции
            </nuxt-link>
          </li>
          <li @click="hidefunction">
            <nuxt-link to="/#price">
              услуги и цены
            </nuxt-link>
          </li>
          <li @click="hidefunction">
            <nuxt-link to="/podgotovka">
              подготовка к мрт
            </nuxt-link>
          </li>
          <li @click="hidefunction">
            <nuxt-link to="/about">
              о клинике
            </nuxt-link>
          </li>
          <li class="red" @click="hidefunction">
            <nuxt-link to="/kompleksy">
              комплексы
            </nuxt-link>
          </li>
          <li @click="hidefunction">
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
  props: {
    hidefunction: {
      type: Function,
      default () {
        return () => {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  padding: 20px 0;

  &__bottom {
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1023px) {
      align-items: center;
      padding: 8px 14px;
    }

    nav {
      border: 2px solid;

      @media screen and (max-width: 1023px) {
        width: 100%;
      }
    }

    > nav > ul {
      list-style-type: none;
      display: flex;
      flex-wrap: wrap;

      @media screen and (max-width: 1023px) {
        display: flex;
        flex-direction: column;
      }

      > li {
        margin: 0;
        padding: 15px 20px;

        @media screen and (max-width: 425px) {
          padding: 0;
        }
      }

      > li > a {
        display: block;
        padding: 10px 15px;
        text-transform: uppercase;
        font-size: 1.1em;
        font-weight: bold;

        @media screen and (max-width: 1023px) {
          padding: 5px;
          margin-left: 0;
          text-align: center;
        }
      }
    }
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
