<template>
  <div class="app" :class="classes">
    <ul class="container toggles">
      <li class="toggles__settings">
        <span>Размер шрифта:</span>
        <ul class="toggles__item-list fsz">
          <li class="toggles__item">
            <button class="toggles__button" :class="{'active': visualSettings.fsz === 'fsz20'}" @click="setFsz('fsz20')">20</button>
          </li>
          <li class="toggles__item">
            <button class="toggles__button" :class="{'active': visualSettings.fsz === 'fsz30'}" @click="setFsz('fsz30')">30</button>
          </li>
          <li class="toggles__item">
            <button class="toggles__button" :class="{'active': visualSettings.fsz === 'fsz40'}" @click="setFsz('fsz40')">40</button>
          </li>
        </ul>
      </li>
      <li class="toggles__settings">
        <span>Цветовая схема:</span>
        <ul class="toggles__item-list color-scheme">
          <li class="toggles__item">
            <button class="toggles__button" :class="{'active': visualSettings.colorScheme === 'defaultColor'}" @click="setColorScheme('defaultColor')">А</button>
          </li>
          <li class="toggles__item">
            <button class="toggles__button" :class="{'active': visualSettings.colorScheme === 'whiteBlack'}" @click="setColorScheme('whiteBlack')">А</button>
          </li>
          <li class="toggles__item">
            <button class="toggles__button" :class="{'active': visualSettings.colorScheme === 'blackWhite'}" @click="setColorScheme('blackWhite')">А</button>
          </li>
          <li class="toggles__item">
            <button class="toggles__button" :class="{'active': visualSettings.colorScheme === 'blue'}" @click="setColorScheme('blue')">А</button>
          </li>
          <li class="toggles__item">
            <button class="toggles__button" :class="{'active': visualSettings.colorScheme === 'beigeBlack'}" @click="setColorScheme('beigeBlack')">А</button>
          </li>
          <li class="toggles__item">
            <button class="toggles__button" :class="{'active': visualSettings.colorScheme === 'brownYellow'}" @click="setColorScheme('brownYellow')">А</button>
          </li>
        </ul>
      </li>
      <li class="toggles__settings">
        <button class="toggles__button toggles__button--more" @click="showMoreSettings = !showMoreSettings ">{{ showMoreSettings ? 'Скрыть доп. настройки' : 'Дополнительные настройки' }}</button>
      </li>
    </ul>
    <ul v-if="showMoreSettings" class="container togglesMore">
      <li class="togglesMore__settings">
        <span>Кернинг:</span>
        <ul class="togglesMore__item-list kerning">
          <li class="togglesMore__item">
            <button class="togglesMore__button" :class="{'active': visualSettings.kerning === 'kerning-1'}" @click="setKerning('kerning-1')">Стандартный</button>
          </li>
          <li class="togglesMore__item">
            <button class="togglesMore__button" :class="{'active': visualSettings.kerning === 'kerning-2'}" @click="setKerning('kerning-2')">Средний</button>
          </li>
          <li class="togglesMore__item">
            <button class="togglesMore__button" :class="{'active': visualSettings.kerning === 'kerning-3'}" @click="setKerning('kerning-3')">Большой</button>
          </li>
        </ul>
      </li>
      <li class="togglesMore__settings">
        <span>Интервал:</span>
        <ul class="togglesMore__item-list">
          <li class="togglesMore__item">
            <button class="togglesMore__button" :class="{'active': visualSettings.interval === 'interval-1'}" @click="setInterval('interval-1')">Одинарный</button>
          </li>
          <li class="togglesMore__item">
            <button class="togglesMore__button" :class="{'active': visualSettings.interval === 'interval-2'}" @click="setInterval('interval-2')">Полуторный</button>
          </li>
          <li class="togglesMore__item">
            <button class="togglesMore__button" :class="{'active': visualSettings.interval === 'interval-3'}" @click="setInterval('interval-3')">Двойной</button>
          </li>
        </ul>
      </li>
      <li class="togglesMore__settings">
        <span>Гарнитура:</span>
        <ul class="togglesMore__item-list garnitura">
          <li class="togglesMore__item">
            <button class="togglesMore__button" :class="{'active': visualSettings.garnitura === 'garnitura-1'}" @click="setGarnitura('garnitura-1')">Без засечек</button>
          </li>
          <li class="togglesMore__item">
            <button class="togglesMore__button" :class="{'active': visualSettings.garnitura === 'garnitura-2'}" @click="setGarnitura('garnitura-2')">С засечками</button>
          </li>
        </ul>
      </li>
      <li class="togglesMore__settings">
        <ul class="togglesMore__item-list ">
          <li class="togglesMore__item">
            <a href="https://mrtktcentr.ru/" class="togglesMore__button">Обычная версия сайта</a>
          </li>
        </ul>
      </li>
    </ul>
    <Header :hidefunction="hideMoreSettings" />
    <Nuxt />
    <CallbackSection />
    <Footer />
  </div>
</template>

<script>
export default {
  data () {
    return {
      visualSettings: {
        fsz: 'fsz20',
        colorScheme: 'defaultColor',
        kerning: 'kerning-1',
        interval: 'interval-1',
        garnitura: 'garnitura-1'
      },
      showMoreSettings: false
    }
  },
  computed: {
    classes () {
      return Object.values(this.visualSettings).join(' ')
    }
  },
  mounted () {
    this.getSettingsFromStorage()
  },
  methods: {
    hideMoreSettings () {
      this.showMoreSettings = false
    },
    setFsz (fsz) {
      this.visualSettings.fsz = fsz
      this.setSettingsToStorage()
    },
    setColorScheme (color) {
      this.visualSettings.colorScheme = color
      this.setSettingsToStorage()
    },
    setKerning (kerning) {
      this.visualSettings.kerning = kerning
      this.setSettingsToStorage()
    },
    setInterval (interval) {
      this.visualSettings.interval = interval
      this.setSettingsToStorage()
    },
    setGarnitura (garnitura) {
      this.visualSettings.garnitura = garnitura
      this.setSettingsToStorage()
    },
    setSettingsToStorage () {
      window.localStorage.setItem('visionSettings', JSON.stringify(this.visualSettings))
    },
    getSettingsFromStorage () {
      const settingsJSON = window.localStorage.getItem('visionSettings')
      if (settingsJSON) {
        try {
          const settings = JSON.parse(settingsJSON)
          this.visualSettings = settings
        } catch {
          this.setSettingsToStorage()
        }
      } else {
        this.setSettingsToStorage()
      }
    }
  }
}
</script>

<style lang="scss">
.togglesMore {
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: #fff;
  color: #000;

  &__settings {
    display: flex;
    align-items: center;
    column-gap: 10px;
    flex-wrap: wrap;

    @media screen and (max-width:767px) {
      flex-direction: column;
      align-items: baseline;
      row-gap: 8px;
    }
  }

  &__item-list {
    display: flex;
    border: 1px solid black;
    border-radius: 5px;

    @media screen and (max-width:767px) {
      flex-direction: column;
      align-items: baseline;
      row-gap: 15px;
      border: none;
    }
  }

  &__item {
    border-right: 1px solid black;
    margin: 0;

    @media screen and (max-width:767px) {
      border: 1px solid black;
      border-radius: 15px;
    }

    &:last-of-type {
      @media screen and (min-width: 768px) {
        border-right: none;
      }
    }

    .kerning & {
      &:nth-child(1) {
        letter-spacing: normal;
      }
      &:nth-child(2) {
        letter-spacing: 2px;
      }
      &:nth-child(3) {
        letter-spacing: 4px;
      }
    }

    .garnitura & {
      &:nth-child(1) {
        font-family: Roboto, sans-serif;
      }
      &:nth-child(2) {
        font-family: serif;
      }
    }
  }

  &__button {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;

    &:hover {
      outline: 3px dotted gray;
    }

    &.active {
      position: relative;

      @media screen and (max-width: 767px) {
        position: static;
        padding-bottom: 5px;
        border-bottom: 5px solid;
      }

      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -10px;
        width: 100%;
        height: 5px;
        border-radius: 2px;
        background-color: #000;

        @media screen and (max-width: 767px) {
          display: none;
        }
      }
    }
  }

  a {
    border: none !important;
    color: #000 !important;

    &:hover {
      outline: 3px dotted !important;
    }
  }
}
.app {
  a, .likeLink {
    border-bottom: 1px solid;

    &:hover {
      outline: 1px dashed;
    }
  }

  &.defaultColor {
    background-color: #0b2a4e;
    color: #fff;

    a, .likeLink {
      color: yellow;
      border-bottom-color: yellow;

      &:hover {
        color: magenta;
        border-bottom-color: magenta;
      }
    }
  }

  &.whiteBlack {
    background-color: #fff;
    color: #000;
    a, .likeLink {
      &:hover {
        color: blue;
        background-color: #eee;
      }
    }
  }

  &.blackWhite {
    background-color: #000;
    color: #fff;
    a, .likeLink {
      &:hover {
        color: #000;
        background-color: #eee;
      }
    }
  }

  &.blue {
    background-color: #9dd1ff;
    color: #195183;
    a, .likeLink {
      &:hover {
        background-color: #eee;
      }
    }
  }

  &.beigeBlack {
    background-color: #f7f3d6;
    color: #4d4b43;
    a, .likeLink {
      &:hover {
        background-color: #ede3a1;
      }
    }
  }

  &.brownYellow {
    background-color: #3b2716;
    color: #a9dd38;

    a, .likeLink {
      color: #a9dd38;
      border-bottom-color: #a9dd38;

      &:hover {
        background-color: #51431d;
      }
    }
  }
}
.toggles {
  display: flex;
  align-items: center;
  background-color: #fff;
  color: #000;
  gap: 40px;
  flex-wrap: wrap;
  padding: 20px 10px;

  &__settings{
    display: flex;
    align-items: center;
    column-gap: 10px;

    @media screen and (max-width:767px) {
      flex-direction: column;
      align-items: baseline;
      row-gap: 8px;
    }

    @media screen and (max-width: 425px) {
      width: 100%;
    }
  }

  &__item-list {
    display: flex;
    border: 1px solid black;
    border-radius: 5px;

    &.color-scheme {
      @media screen and (max-width: 425px) {
        width: 100%;
      }
    }
  }

  &__item {
    border-right: 1px solid black;
    width: 60px;
    height: 60px;
    margin: 0;

    &:last-of-type {
      border-right: none;
    }

    .fsz & {
      &:nth-of-type(1) {
        font-size: 20px;
      }

      &:nth-of-type(2) {
        font-size: 30px;
      }

      &:nth-of-type(3) {
        font-size: 40px;
      }
    }

    .color-scheme & {
      font-size: 40px;
      font-weight: bold;

      @media screen and (max-width: 425px) {
        flex-grow: 1;
      }
    }

    .color-scheme & {
      &:nth-of-type(1) {
        background-color: #0b2a4e;
        color: #fff;
      }
      &:nth-of-type(2) {
        background-color: #fff;
        color: #000;
      }
      &:nth-of-type(3) {
        background-color: #000;
        color: #fff;
      }
      &:nth-of-type(4) {
        background-color: #9dd1ff;
        color: #195183;
      }
      &:nth-of-type(5) {
        background-color: #f7f3d6;
        color: #4d4b43;
      }
      &:nth-of-type(6) {
        background-color: #3b2716;
        color: #a9dd38;
      }
    }
  }

  &__button {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;

    &:hover {
      outline: 3px dotted gray;
    }

    &.active {
      position: relative;

      @media screen and (max-width: 767px) {
        position: static;
        padding-bottom: 5px;
        border-bottom: 5px solid;
      }

      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -10px;
        width: 100%;
        height: 5px;
        border-radius: 2px;
        background-color: #000;

        @media screen and (max-width: 767px) {
          display: none;
        }
      }
    }

    &--more {
      padding: 10px;
      border: 1px solid;
      border-radius: 5px;

      @media screen and (max-width: 767px) {
        width: unset;
      }
    }
  }
}
.fsz20 {
  font-size: 20px;
  a, .likeLink {
    border-bottom: 1px solid;

    &:hover {
      outline: 1px dashed;
    }
  }
}
.fsz30 {
  font-size: 30px;
  a, .likeLink {
    border-bottom: 3px solid;

    &:hover {
      outline: 3px dashed;
    }
  }
}
.fsz40 {
  font-size: 40px;
  a, .likeLink {
    border-bottom: 5px solid;

    &:hover {
      outline: 5px dashed;
    }
  }
}
.kerning-1 {
  letter-spacing: normal;
}
.kerning-2 {
  letter-spacing: 2px;
}
.kerning-3 {
  letter-spacing: 4px;
}
.interval-1 {
  line-height: normal;
}
.interval-2 {
  line-height: 2;

  a,
  button {
    line-height: 1.5;
  }
}
.interval-3 {
  line-height: 2.5;

  a,
  button {
    line-height: 1.8;
  }
}
.garnitura-1 {
  font-family: Roboto, sans-serif;
}
.garnitura-2 {
  font-family: serif;
}
</style>
