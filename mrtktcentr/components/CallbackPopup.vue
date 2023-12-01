<template>
  <div v-if="callbackPopupIsOpen" class="callback-popup" @click.stop>
    <button class="callback-popup__close" @click="closeAllPopup" />
    <template v-if="callbackMode === 'callback'">
      <p class="callback-popup__header">Оставьте свои данные</p>
      <p class="callback-popup__subheader">И мы перезвоним Вам, чтобы уточнить время записи</p>
      <DefaultForm />
    </template>
    <template v-if="callbackMode === 'usluga'">
      <p class="callback-popup__header callback-popup__header--min">Подтвердите запись на приём</p>
      <p class="callback-popup__confirmMessage">Вы хотите записаться на: <br><b>"{{ callbackUsluga }}"</b></p>
      <p class="callback-popup__confirmSubMessage">Оставьте свои контактные данные и мы перезвоним вам, чтобы уточнить время записи</p>
      <DefaultForm />
    </template>
    <div v-if="callbackMode === 'success'" class="callback-popup__success-screen" @click.stop>
      <p class="callback-popup__header">Благодарим за заявку!</p>
      <p class="callback-popup__subheader">Очень скоро мы перезвоним вам!</p>
    </div>
    <div v-if="callbackMode === 'error'" class="callback-popup__error-screen" @click.stop>
      <p class="callback-popup__header">Что-то пошло <nobr>не так :(</nobr></p>
      <p class="callback-popup__subheader">Попробуйте обновить страницу и отправить заявку ещё раз, либо позвоните нам <br> <a href="tel:+73412777703">(3412) 77-77-03</a></p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    callbackPopupIsOpen () {
      return this.$store.state.popups.callbackPopupIsOpen
    },
    callbackMode () {
      return this.$store.state.popups.callbackMode
    },
    callbackUsluga () {
      return this.$store.state.popups.usluga
    }
  },
  methods: {
    closeAllPopup () {
      this.$store.commit('popups/closeAllPopup')
    }
  }
}
</script>

<style lang="scss" scoped>
.callback-popup {
    position: relative;
    width: 424px;
    padding: 30px 42px;
    display: flex;
    flex-direction: column;
    background-color: $infoAreaGray;
    border-radius: 6px;

    @media screen and (max-width: 767px) {
        width: 100%;
        height: 100%;
        padding: 60px 15px 30px;
    }

    &__success-screen,
    &__error-screen {
        display: flex;
        flex-direction: column;
        padding-top: 30px;
    }

    &__form {
        display: flex;
        flex-direction: column;
    }

    &__header {
        margin-bottom: 10px;
        font-size: 28px;
        text-align: center;
        font-weight: 500;

        &--min {
          font-size: 22px;
        }
    }

    &__confirmMessage {
      text-align: center;
      margin-bottom: 10px;
    }
    &__confirmSubMessage{
      text-align: center;
      font-size: 16px;
      margin-bottom: 10px;
    }

    &__subheader {
        margin-bottom: 30px;
        font-size: 20px;
        text-align: center;
    }

    &__close {
        position: absolute;
        right: 15px;
        top: 15px;
        height: 30px;
        width: 30px;
        opacity: 0.5;
        transition: all 0.3s ease;
        border: unset;
        background-color: transparent;
        cursor: pointer;

        &:hover {
            opacity: 1;
        }

        &::after,
        &::before {
            content: "";
            position: absolute;
            top: 14px;
            left: 0;
            width: 30px;
            height: 2px;
            background: black;
        }

        &::after {
            transform: rotate(45deg);
        }

        &::before {
            transform: rotate(-45deg);
        }
    }
}
</style>
