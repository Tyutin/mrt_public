<template>
  <main>
    <section class="container section--green">
      <h2 class="sectionTitle">О клинике</h2>
      <nav>
        <ul>
          <li>
            <nuxt-link to="#workers">Наши сотрудники</nuxt-link>
          </li>
          <li>
            <nuxt-link to="#licenses">Лицензия</nuxt-link>
          </li>
          <li>
            <nuxt-link to="#reviews">Отзывы</nuxt-link>
          </li>
          <li>
            <nuxt-link to="#info">Подробная информация</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/privacy">Правила обработки персональных данных</nuxt-link>
          </li>
        </ul>
      </nav>
    </section>
    <section class="container section--mediumspringgreen">
      <div id="workers" class="anchor" />
      <h2 class="sectionTitle">Наши сотрудники</h2>
      <Workers />
    </section>
    <section class="container section--greenyellow">
      <div id="licenses" class="anchor" />
      <h2 class="sectionTitle">Лицензия</h2>
      <Licenses />
    </section>
    <section class="container section--palegreen">
      <div id="reviews" class="anchor" />
      <h2 class="sectionTitle">Отзывы</h2>
      <Reviews />
    </section>
    <section class="container section--seagreen">
      <div id="info" class="anchor" />
      <h2 class="sectionTitle">Подробная информация</h2>
      <p>Общество с ограниченной ответственностью «Диамед» было зарегистрировано  в июле 2018 года, о чем  в Единый государственный реестр юридических лиц  10 июля 2018 года Межрайонной инспекцией Федеральной налоговой службы № 11 по Удмуртской Республике, под основным государственным регистрационным номером (ОГРН) 1181832015958, была внесена запись о создании юридического лица. Учредитель ООО «Диамед» – Аненко Дарья Константиновна.</p>
      <h3>Структура и органы управления ООО «Диамед»</h3>
      <ul class="structure">
        <li>
          <span class="structure__name">Генеральный директор - Аненко Дарья Константиновна</span>
        </li>
        <li>
          <span class="structure__name">Заместитель директора по общим вопросам - Никулина Вера Александровна</span>
          <span class="structure__job">(область решаемых вопросов и задач: организационные вопросы помощи населению, техника безопасности)</span>
        </li>
        <li>
          <span class="structure__name">Заместитель директора по лечебной части - Ивонина Ирина Ивановна</span>
          <span class="structure__job">(область решаемых вопросов и задач:  вопросы медицинской помощи) </span>
        </li>
      </ul>
      <h3>График приема граждан руководителем, заместителями руководителя медицинской организации</h3>
      <p>Вторник, четверг с 14.00-16.00, по предварительной записи по номеру телефона: <a href="tel:+73412777703">+7 (3412) 77-77-03</a></p>
      <h3>Контактная информация</h3>
      <ul>
        <li>Регистратура: <a href="tel:+73412777703">+7 (3412) 77-77-03</a>, <a href="tel:+79962976786">+7 (996) 297 67 86 </a> (WhatsApp, Viber, Telegram - для жалоб и предложений)</li>
        <li>Руководителей: <a href="tel:+79090657776">+7 (909) 065 77 76 </a> (Viber - для жалоб и предложений)</li>
        <li>Адрес электронной почты для обращения граждан: <a href="mailto:diamedtomograph@gmail.com">diamedtomograph@gmail.com</a></li>
      </ul>
      <h3>Правила предоставления медицинскими организациями платных медицинских услуг</h3>
      <p>
        <a href="http://static.government.ru/media/files/AEOoMOcsUNulVmby35UvVoryYUUuBSYr.pdf" target="_blank" rel="noopener noreferrer">Правила предоставления медицинскими организациями платных медицинских услуг в соответствии с Постановлением Правительства РФ от 04.10.2012 г. № 1006 «Об утверждении Правил предоставления медицинскими организациями платных медицинских услуг»</a>
      </p>
      <h3>Сведения об условиях, порядке, форме предоставления платных медицинских услуг и порядке их оплаты</h3>
      <p>
        <a href="/docs/polojenie_o_platnyh_uslugah.pdf" target="_blank" rel="noopener noreferrer">Положении о порядке и условиях предоставления платных медицинских услуг в ООО «ДИАМЕД»</a>
      </p>
      <h3>Прейскурант цен на платные медицинские услуги</h3>
      <p>
        <a href="/docs/price_diamed.pdf" target="_blank" rel="noopener noreferrer">Прейскурант цен на платные медицинские услуги в ООО «ДИАМЕД»</a>
      </p>
      <h3>Права гражданина в сфере здравоохранения </h3>
      <p>
        <a href="https://minzdrav.gov.ru/documents/7025-federalnyy-zakon-323-fz-ot-21-noyabrya-2011-g#:~:text=%D0%93%D0%BB%D0%B0%D0%B2%D0%B0%204.%20%D0%9F%D1%80%D0%B0%D0%B2%D0%B0%20%D0%B8%20%D0%BE%D0%B1%D1%8F%D0%B7%D0%B0%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D0%B8%20%D0%B3%D1%80%D0%B0%D0%B6%D0%B4%D0%B0%D0%BD%20%D0%B2%20%D1%81%D1%84%D0%B5%D1%80%D0%B5%20%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D1%8B%20%D0%B7%D0%B4%D0%BE%D1%80%D0%BE%D0%B2%D1%8C%D1%8F" target="_blank" rel="noopener noreferrer">Права гражданина в сфере здравоохранения в соответствии с главой 4 Федерального закона от 21.11.2011 года №323-ФЗ «Об основах охраны здоровья граждан в Российской Федерации»</a>
      </p>
    </section>
    <section class="container section--magenta">
      <h2 class="sectionTitle">Контакты</h2>
      <Contacts />
    </section>
  </main>
</template>

<script>
export default {
  head: {
    title: '👨‍⚕️ О клинике | Центр томографии Флагман, Ижевск',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Специалисты нашего центра- рентгенологи и онкологи с высшей квалификационной категорией проконсультируют вас и дадут рекомендации'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'комплекс, МРТ, КТ, томография, флагман, Ижевск, центр томографии, Магнитно-резонансный томограф, Компьютерный томограф'
      }
    ]
  }
}
</script>

<style lang="scss" scoped>
.structure {
  li {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }

  &__name {
    font-weight: 500;

    @media screen and (max-width: 767px) {
      font-weight: normal;
    }
  }

  &__job {
    font-size: 0.8em;
  }
}

nav a {
  display: inline-block;
}
</style>
