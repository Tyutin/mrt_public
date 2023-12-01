<template>
  <section id="zapis" class="container section--cyan">
    <h2>Запись на прием</h2>
    <p class="callback-section__info">
      Записаться на прием можно ПН–ВС с 7.00 до 23.00 по телефону: <a href="tel:+73412777703">+7(3412) <b>77-77-03</b></a>
    </p>
    <div class="callback-section__form">
      <template v-if="callbackMode === 'callback'">
        <p class="callback-section__header">Оставьте свои данные</p>
        <p class="callback-section__subheader">И мы перезвоним Вам, чтобы уточнить время записи</p>
        <DefaultForm />
      </template>
      <template v-if="callbackMode === 'usluga'">
        <p class="callback-section__header">Подтвердите запись на приём</p>
        <p class="callback-section__subheader">Вы хотите записаться на: <b>"{{ callbackUsluga }}"</b></p>
        <p class="callback-section__subheader">Оставьте свои контактные данные и мы перезвоним вам, чтобы уточнить время записи</p>
        <DefaultForm />
      </template>
      <div v-if="callbackMode === 'success'" class="callback-section__success-screen">
        <p class="callback-section__header">Благодарим за заявку!</p>
        <p class="callback-section__subheader">Очень скоро мы перезвоним вам!</p>
      </div>
      <div v-if="callbackMode === 'error'" class="callback-section__error-screen">
        <p class="callback-section__header">Что-то пошло <nobr>не так :(</nobr></p>
        <p class="callback-section__subheader">Попробуйте <button class="likeLink" @click="reloadPage">обновить страницу</button> и отправить заявку ещё раз, либо позвоните нам <br> <a href="tel:+73412777703">(3412) 77-77-03</a></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    callbackMode () {
      return this.$store.state.popups.callbackMode
    },
    callbackUsluga () {
      return this.$store.state.popups.usluga
    }
  },
  methods: {
    reloadPage () {
      window.location.reload()
    }
  }
}
</script>

<style lang="scss">
.callback-section {
  &__info {
    font-size: 1.2em;
  }

  &__form {
    max-width: 700px;
    margin: 20px 0;
  }

  &__header,
  &__subheader,
  &__info {
    margin: 15px 0;
  }

  &__header {
    font-size: 1.5em;
  }

  &__subheader {
    font-size: 1.3em;
  }

  &__success-screen,
  &__error-screen {
    padding-left: 15px;
    border-top: 5px solid;
    border-left: 5px solid;
  }

  &__success-screen {
    border-color: #00ca00;
  }

  &__error-screen {
    border-color: red;
  }
}

</style>
