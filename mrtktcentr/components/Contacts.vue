<template>
  <div class="contacts">
    <div class="contacts__content">
      <div class="contacts__half">
        <div class="contacts__map-switch contacts__map-switch--mob">
          <button :class="{ active: !map }" @click="map = false">
            Схема проезда
          </button>
          <span>|</span>
          <button :class="{ active: map }" @click="map = true">На карте</button>
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
      <div class="contacts__half">
        <div class="contacts__map-switch contacts__map-switch--desktop">
          <button :class="{ active: !map }" @click="map = false">
            Схема проезда
          </button>
          <span>|</span>
          <button :class="{ active: map }" @click="map = true">На карте</button>
        </div>
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
        <div class="contacts__social">
          <a
            href="https://vk.com/mrtktcentr"
            target="_blank"
            rel="noopener noreferrer"
            alt="Группа вконтакте"
          ><img
            src="/img/social-vk.svg"
            alt="Иконка вконтакте"
          ></a>
          <a
            href="http://facebook.com/mrtktcentr"
            target="_blank"
            rel="noopener noreferrer"
            alt="Группа в фейсбуке"
          ><img
            src="/img/social-fb.svg"
            alt="Иконка фейсбука"
          ></a>
          <a
            href="https://www.ok.ru/group/55827943456886"
            target="_blank"
            rel="noopener noreferrer"
            alt="Группа в одноклассниках"
          ><img
            src="/img/social-ok.svg"
            alt="Иконка одноклассников"
          ></a>
          <!-- <a href="https://www.instagram.com/mrtktcentr" target="_blank" rel="noopener noreferrer"><img src="/img/social-insta.svg" alt=""></a> -->
        </div>
      </div>
    </div>
    <Worktime />
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
    margin-bottom: 40px;

    @media (max-width: 1210px) {
      flex-direction: column;

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  &__half {
    width: 50%;

    @media (max-width: 1210px) {
      width: 100%;
      max-height: unset;
      margin-bottom: 30px;

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  &__adress {
    font-size: 30px;
    color: $dgray;
    margin-bottom: 30px;

    @media (max-width: 767px) {
      font-size: 24px;
      margin-bottom: 20px;
    }
  }

  &__contacts {
    font-size: 30px;
    color: $dgray;
    margin-bottom: 30px;

    @media (max-width: 767px) {
      font-size: 22px;
    }

    @media (max-width: 425px) {
      font-size: 18px;
    }

    span {
      font-weight: bold;
    }
  }

  &__route {
    font-size: 20px;
    color: black;
    line-height: 1.3;
    margin-bottom: 15px;

    @media (max-width: 767px) {
      font-size: 18px;
      margin-bottom: 8px;
    }

    @media (max-width: 425px) {
      font-size: 16px;
      margin-bottom: 8px;
    }
  }

  &__map-switch {
    display: flex;
    color: $blue;
    font-size: 24px;
    margin-bottom: 23px;

    button {
      padding-bottom: 2px;
      cursor: pointer;

      &.active {
        padding-bottom: 0;
        border-bottom: 2px solid $blue;
      }
    }

    span {
      margin: 0 10px;
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

    @media (max-width: 767px) {
      font-size: 20px;
    }
  }

  &__yamap {
    width: 493px;
    height: 493px;

    @media (max-width: 1210px) {
      width: 100%;
      height: calc(100vw - 40px);
      max-height: 70vh;
    }
  }

  &__scheme-wrap {
    width: 475px;

    @media (max-width: 1210px) {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }

  &__scheme {
    min-height: 493px;

    @media (max-width: 1210px) {
      min-height: unset;
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
