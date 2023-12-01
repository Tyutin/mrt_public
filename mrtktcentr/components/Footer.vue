<template>
  <footer class="container footer">
    <div class="footer__row">
      <p>Центр томографии Флагман (ООО «ДИАМЕД» — адрес осуществления медицинской деятельности: 426027, УР, г. Ижевск, ул. Удмуртская, .255Г (ОГРН 1181832015958, о чем внесена запись в ЕГРЮЛ от 10 июля 2018 года Межрайонной ИФНС № 11 по УР).</p>
      <p>Лицензия на медицинскую деятельность по видам услуг: магнитно-резонансная томография, компьютерная томография (рентгенология), онкология- № ЛО-18-01-002588 от 03.12.2018 года , выдана Управлением лицензирования медицинской и фармацевтической деятельности Минздрава УР(адрес органа, выдавшего лицензию:У Р, г. Ижевск, ул. Воткинское шоссе, д. 57, 9 блок; тел. +7(3412) 20-49-11).</p>
      <p>Название и телефоны контролирующих органов: <br>Росздравназдзор- +7(3412) 40-27-47; <br>Роспотребнадзор - +7(3412) 68-28-44<br>Территориальный фонд ОМС Удмуртской республики: 8-800-301-33-37; <br>Министерство здравоохранения УР: «горячая линия» (3412)60-23-76, 8(800)-100-24-47</p>
    </div>
    <h2>Все права защищены© <nobr>ООО «ДИАМЕД»</nobr></h2>
    <a href="https://buro-sv.ru" target="_blank">Разработка и ведение сайтов - Бюро СВ</a>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: $blue;
  padding: 30px 50px;
  color: #fff;

  @media (max-width: 767px) {
    padding: 30px 20px;
  }

  &__row {
    display: flex;
    justify-content: space-between;
    position: relative;
    padding-bottom: 20px;

    @media (max-width: 1109px) {
      flex-direction: column;
    }

    p {
      max-width: 290px;
      font-size: 14px;
      line-height: 1.2;

      @media (max-width: 1109px) {
        max-width: unset;
        margin-bottom: 20px;

        &:last-of-type {
          margin-bottom: 0;
        }
      }

      @media (max-width: 767px) {
        margin-bottom: 10px;
      }
    }
  }

  a {
    font-size: 12px;
    display: block;
    margin: auto;
    width: fit-content;
  }

  h2 {
    font-size: 20px;
    text-align: center;
    margin: 30px 0;
  }

  &__row::after {
    position: absolute;
    width: 140px;
    height: 2px;
    background-color: #fff;
    bottom: 0;
    left: calc(50% - 70px);
    content: "";
  }
}
</style>
