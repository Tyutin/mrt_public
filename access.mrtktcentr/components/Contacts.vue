<template>
  <div class="contacts">
    <div class="contacts__content">
      <div class="contacts__half">
        <p class="contacts__adress">
          Ижевск, ул. Удмуртская, 255Г Офисный центр «Флагман»
        </p>
        <p class="contacts__route">
          Автобус 12, 12к, 22, 26, 27, 79 - остановка "Мой Порт"
        </p>
        <p class="contacts__route">
          Троллейбус 1, 2, 2д, 4, 4д, 7, 14 - остановка "Ул. Димитрова"
        </p>
        <p class="contacts__route">
          Маршрутное такси 50, 53, 68 - остановка "Ул. Димитрова"
        </p>
        <p class="contacts__route">
          Трамвай 2, 7, 9 - остановка "Ул. Коммунаров"
        </p>
        <p class="contacts__contacts">
          тел: <a href="tel:+73412777703">+7(3412) <span>77-77-03</span></a><br>
          e-mail:
          <a href="mailto:diamedtomograph@gmail.com">diamedtomograph@gmail.com</a>
        </p>
        <Worktime />
      </div>
      <div class="contacts__half">
        <div class="contacts__map-switch">
          <button
            class="likeLink"
            :class="{ active: !map }"
            @click="map = false"
          >
            Схема проезда
          </button>
          <span>|</span>
          <button class="likeLink" :class="{ active: map }" @click="map = true">
            На карте
          </button>
        </div>
        <div v-if="map" class="contacts__yamap">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A8413322bfe036c3aee7d17aa4d7e668094c9f8e9f579822325ac22ffa830676b&amp;source=constructor"
            width="100%"
            height="100%"
            frameborder="0"
          />
          <!-- <script v-if="map" type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A8413322bfe036c3aee7d17aa4d7e668094c9f8e9f579822325ac22ffa830676b&amp;width=100%25&amp;height=100%&amp;lang=ru_RU&amp;scroll=true" /> -->
        </div>
        <div v-if="!map" class="contacts__scheme-wrap">
          <img
            v-if="!map"
            src="/img/map.svg"
            alt="Схема проезда"
            class="contacts__scheme"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      map: false
    }
  }
}
</script>

<style lang="scss" scoped>
.contacts {
  &__content {
    display: flex;
    flex-direction: column;
  }

  &__half {
    width: 100%;

    &:first-of-type {
      margin-bottom: 50px;
    }
  }

  &__adress {
    margin-bottom: 30px;

    @media (max-width: 767px) {
      margin-bottom: 20px;
    }
  }

  &__contacts {
    margin-bottom: 30px;
  }

  &__route {
    margin-bottom: 15px;

    @media (max-width: 767px) {
      margin-bottom: 8px;
    }

    @media (max-width: 425px) {
      margin-bottom: 8px;
    }
  }

  &__map-switch {
    display: flex;
    margin-bottom: 23px;

    @media screen and (max-width: 767px) {
      flex-direction: column;
    }

    button {
      padding-bottom: 2px;
      cursor: pointer;

      &.active {
        padding-bottom: 0;
      }
    }

    span {
      margin: 0 10px;
      @media screen and (max-width: 767px) {
        display: none;
      }
    }

    &--mob {
      justify-content: center;
      margin-bottom: 30px;
    }

    @media (min-width: 1211px) {
      &--mob {
        display: none;
      }
    }

    @media (max-width: 1210px) {
      &--mob {
        display: flex;
      }

      &--desktop {
        display: none;
      }
    }
  }

  &__yamap {
    width: 100%;
    height: 600px;

    @media (max-width: 1210px) {
      width: 100%;
      height: calc(100vw - 40px);
      max-height: 70vh;
    }
  }

  &__scheme-wrap {
    width: 100%;
  }

  &__scheme {
    @media screen and (min-width: 1024px) {
      min-height: 800px;
    }
  }

  &__social {
    display: flex;

    a {
      margin-right: 20px;
      width: 50px;
      height: 50px;
    }
  }
}
</style>
