<template>
  <div class="dmsoms__wrap">
    <InfoArea :classname="'dmsoms__info'">
      <p>В нашем Центре вы можете получить медицинскую помощь по полисам ДМС (страховых компаний "Ингосстрах", "АльфаСтрахование").</p>
      <p>С 1 января 2020 года мы включены в реестр Территориального фонда ОМС по Удмуртской республике.</p>
      <p>
        <nuxt-link to="/dms-oms">
          Подробнее
        </nuxt-link>
      </p>
    </InfoArea>
  </div>
</template>

<style lang="scss" scoped>
.dmsoms {
  &__wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__info {
    margin-bottom: 40px;

    @media (max-width: 1210px) {
      margin-bottom: 20px;
    }
  }
}
</style>
