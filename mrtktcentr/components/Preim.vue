<template>
  <ul class="preim__row">
    <li class="preim__el">
      <img src="/img/pr1.png" alt="">
      <p>Удобство и экономия при обследовании</p>
    </li>
    <li class="preim__el">
      <img src="/img/pr2.png" alt="">
      <p>Высокая безопасность и точность диагностики</p>
    </li>
    <li class="preim__el">
      <img src="/img/pr3.png" alt="">
      <p>Профилактика и контроль онкозаболеваний</p>
    </li>
    <li class="preim__el">
      <img src="/img/pr4.png" alt="">
      <p>Сертифицированные врачи высшей категории</p>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.preim {
  &__row {
    display: flex;
    justify-content: space-around;
    list-style: none;

    @media screen and (max-width: 1023px) {
      flex-wrap: wrap;
      row-gap: 50px;
    }
  }

  &__el {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 1023px) {
      width: 40%;
    }

    > img {
      margin-bottom: 20px;
    }

    > p {
      text-align: center;
      line-height: 1.2;
    }
  }
}
</style>
