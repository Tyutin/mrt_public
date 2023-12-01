<template>
  <div class="callbackformtext">
    <p>
      Записаться на прием можно<br>
      ПН–ВС с 7.00 до 23.00 по<br>
      телефону: <a href="tel:+73412777703">+7(3412) <b>77-77-03</b></a>
    </p>
    <div class="callbackWrapper">
      <DefaultForm />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.callbackWrapper {
  max-width: 350px;
}
.callbackformtext {
  padding: 0 100px;
  display: flex;
  justify-content: space-around;

  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }

  p {
    color: #000;
    font-size: 30px;
    margin-bottom: 0;

    @media (max-width: 1023px) {
      padding-bottom: 40px;
    }

    @media (max-width: 767px) {
      font-size: 24px;
    }

    @media (max-width: 425px) {
      font-size: 21px;
    }
  }
}
</style>
