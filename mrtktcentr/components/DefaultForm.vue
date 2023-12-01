<template>
  <form
    class="callbackForm"
    @click.stop
    @submit.prevent="submitForm"
  >
    <label class="callbackForm__label" :class="{'callbackForm__label_error': errors.name}">
      <input
        v-model="name"
        type="text"
        name="name"
        placeholder="Ваше имя*"
        class="callbackForm__input"
        :class="{'callbackForm__input_error': errors.name}"
        @input="nameHandler"
      >
      <span v-if="errors.name" class="callbackForm__error-message">Введите корректное имя</span>
    </label>
    <label class="callbackForm__label" :class="{'callbackForm__label_error': errors.phone}">
      <input
        v-model="phone"
        v-mask="'+7(###)-###-##-##'"
        type="text"
        name="phone"
        placeholder="Ваш телефон*"
        class="callbackForm__input"
        :class="{'callbackForm__input_error': errors.phone}"
        @input="phoneHandler"
      >
      <span v-if="errors.phone" class="callbackForm__error-message">Введите корректый телефон</span>
    </label>
    <input type="submit" value="Записаться" class="callbackForm__submit" :class="{'callbackForm__submit--disabled': errors.name || errors.phone}" :disabled="errors.name || errors.phone">
    <p class="callbackForm__privacy">Оставляя заявку, Вы соглашаетесь с <a href="/privacy" target="_blank">правилами обработки персональных данных.</a></p>
  </form>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      phone: '',
      errors: {
        name: false,
        phone: false
      },
      isSubmitDisabled: false,
      mode: 'form'
    }
  },
  computed: {
    usluga () {
      return this.$store.state.popups.usluga.length ? this.$store.state.popups.usluga : 'Спросите по телефону'
    }
  },
  methods: {
    nameHandler () {
      this.errors.name = false
    },
    phoneHandler () {
      this.errors.phone = false
      if (!(this.phone[3] === '9' || this.phone[3] === '3')) {
        this.phone = this.phone.slice(0, 3) + this.phone.slice(4, this.phone.length)
      }
    },
    async submitForm () {
      this.name = this.name.replace(new RegExp('\\ +', 'gm'), ' ').trim()
      if (this.name.length < 2 || this.name.length > 50) {
        this.errors.name = true
      }
      if (this.phone.length !== 17) {
        this.errors.phone = true
      }
      if (this.errors.name || this.errors.phone) {
        return
      }
      const formData = new FormData()
      formData.append('name', this.name)
      formData.append('phone', this.phone)
      formData.append('usluga', this.usluga)
      this.isSubmitDisabled = true
      const response = await fetch('/post.php', {
        method: 'POST',
        body: formData
      })
      this.$store.commit('popups/closeAllPopup')
      if (response.ok) {
        this.name = ''
        this.phone = ''
        this.$store.commit('popups/openSuccessPopup')
      } else {
        this.$store.commit('popups/openErrorPopup')
      }
    }
  }
}
</script>
<style lang="scss">
.callbackForm {
  width: 100%;
  display: flex;
  flex-direction: column;

  &__label {
    position: relative;
    margin-bottom: 15px;

    &_error {
      padding-bottom: 15px;
    }
  }
  &__input {
    width: 100%;
    height: 46px;
    padding: 2px 3px;
    font-size: 20px;
    font-family: PantonLight, sans-serif;
    border: 1px solid gray;
    border-radius: 4px;

    &_error {
      border-color: red;
    }
  }

  &__error-message{
    position: absolute;
    left: 0;
    bottom: 0;
    font-size: 12px;
    color: red;
  }

  &__submit {
    font-size: 26px;
    height: 54px;
    background-color: $red;
    color: #fff;
    font-family: PantonLight, sans-serif;
    border-width: 0;
    border-radius: 30px;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease;

    &:hover{
      background-color: $blue;
    }

    @media screen and (max-width: 767px) {
      font-size: 18px;
    }

    @media screen and (max-width: 359px) {
      font-size: 16px;
    }

    &--disabled {
      cursor: default;
      background-color: $lgray;

      &:hover {
        background-color: $lgray;
      }
    }
  }
  &__privacy {
    font-size: 14px;
    margin: 20px 0 0;
    text-align: left;
  }

}
</style>
