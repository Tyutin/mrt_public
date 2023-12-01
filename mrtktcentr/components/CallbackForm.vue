<template>
  <form class="callbackform">
    <input type="text" placeholder="Имя*">
    <input type="text" placeholder="Телефон*">
    <p class="callbackform__agreement">Оставляя заявку, Вы соглашаетесь с <a href="/privacy" target="_blank">правилами обработки персональных данных.</a></p>
    <input type="submit" value="записаться">
  </form>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.callbackform {
  min-width: 350px;
  display: flex;
  flex-direction: column;

  @media (max-width: 425px) {
    min-width: unset;
  }

  input {
    font-family: Roboto, sans-serif;
    margin-bottom: 25px;
    height: 46px;
    border: 1px solid #878786;
    border-radius: 6px;
    font-size: 20px;
    color: #292929;
    padding-left: 10px;
    font-style: italic;
    font-weight: 300;
  }

  input[type="submit"] {
    border: none;
    border-radius: 30px;
    background-color: $red;
    height: 58px;
    font-family: "PantonLight", sans-serif;
    color: #fff;
    text-transform: uppercase;
    font-weight: normal;
    font-style: normal;
    margin-top: 25px;
    font-size: 26px;
  }

  label {
    font-size: 13px;
    font-weight: 300;
    font-style: italic;
    display: flex;

    > input {
      margin-bottom: 0;
      height: unset;
      margin-right: 10px;
    }
  }

  &__agreement {
    max-width: 350px;
    font-size: 14px;
    font-style: italic;
    margin-bottom: 0;
  }
}
</style>
