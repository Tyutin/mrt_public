<template>
  <ul class="workers">
    <li v-for="worker in workers" :key="`worker_${worker.name}`">
      <Worker :name="worker.name" :speciality="worker.speciality" :diplom="worker.diplom" :photo="worker.photo" :is-male="worker.isMale" />
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      workers: [
        {
          name: 'Залманов Владимир Владимирович',
          isMale: true,
          speciality: 'Врач-рентгенолог высшей квалификационной категории, опыт работы 23 года',
          diplom: 'Диплом ЭВ № 140320 от 27.06.1994 года выдан Ижевским государственным медицинским институтом, квалификация: врач, специальность: лечебное дело; сертификат специалиста № 0118310534683 от 15.02.2020 года по специальности: рентгенология (срок действия 5 лет).',
          photo: 'zalmanov.jpg'
        },
        {
          name: 'Шумилов Иван Евгеньевич',
          isMale: true,
          speciality: 'Врач-рентгенолог, опыт работы 17 лет',
          diplom: 'Диплом ВСВ № 0465564 от 23.06.2004 года, выдан ГОУ ВПО Ижевская государственная медицинская академия; квалификация: врач; специальность: лечебное дело; сертификат специалиста № 0118310534700 от 15.02.2020 года по специальности: рентгенология (срок действия 5 лет).',
          photo: 'shumilov.jpg'
        },
        {
          name: 'Лямина Юлия Викторовна',
          isMale: false,
          speciality: 'Врач-рентгенолог, опыт работы 10 лет',
          diplom: 'Диплом ВСГ № 5550862 от 22.06.2010 года, выдан ГОУ ВПО «Ижевская государственная медицинская академия Федерального агентства по здравоохранению и социальному развитию»; квалификация: врач; специальность: Педиатрия; сертификат специалиста № 1177270026194 от 30.12.2020 года по специальности: рентгенология (срок действия 5 лет).'
        },
        {
          name: 'Корюков Вадим Михайлович',
          isMale: true,
          speciality: 'Врач-рентгенолог, опыт работы 10 лет',
          diplom: 'Диплом КА № 48740 от 21.06.2011 года, выдан ГОУ ВПО «Ижевская государственная медицинская академия» Министерства здравоохранения и социального развития Российской Федерации; квалификация: врач; специальность: лечебное дело; сведения о прохождении аккредитации специалиста: УНРЗ 2022.465003 от 08.07.2022 года: специальность: рентгенология; профессиональный стандарт: врач-рентгенолог; действительна до 23.03.2027 года.'
        },
        {
          name: 'Мензаиров Валерий Фирусович',
          isMale: true,
          speciality: 'Врач-рентгенолог, опыт работы 10 лет',
          diplom: 'Диплом ВСБ № 0541847 от 23.06.2004 года, выдан ГОУ ВПО Ижевская государственная медицинская академия; квалификация: врач-педиатр; специальность: педиатрия; сертификат специалиста № 0118310534690 от 15.02.2020 года по специальности: рентгенология (срок действия 5 лет).'
        },
        {
          name: 'Трефилов Александр Викторович',
          isMale: true,
          speciality: 'Врач-рентгенолог, опыт работы 10 лет',
          diplom: 'Диплом ВСГ № 3890264 от 23.06.2009 года, выдан ГОУ ВПО «Ижевская государственная медицинская академия Федерального агентства по здравоохранению и социальному развитию»; квалификация: врач; специальность: лечебное дело; сведения о прохождении аккредитации специалиста: УНРЗ 2022.465003 от 08.07.2022 года: специальность: рентгенология; профессиональный стандарт: врач-рентгенолог; действительна до 23.03.2027 года.'
        },
        {
          name: 'Коротких Денис Михайлович',
          isMale: true,
          speciality: 'Врач-рентгенолог, опыт работы 15 лет',
          diplom: 'Диплом ВСБ № 0541768 от 20.12.2004 года, выдан ГОУ ВПО Ижевская государственная медицинская академия; квалификация: врач; специальность: лечебное дело; сертификат специалиста №0118310534687 от 15.02.2020 года по специальности: рентгенология (срок действия 5 лет).'
        },
        {
          name: 'Лужбина Роза Валерьевна',
          isMale: false,
          speciality: 'Врач-рентгенолог, опыт работы 10 лет',
          diplom: 'Диплом ВСГ № 5550850 от 22.06.2010 года, выдан: ГОУ ВПО «Ижевская государственная медицинская академия Федерального агентства по здравоохранению и социальному развитию»; квалификация: врач; специальность: Педиатрия; сертификат специалиста № 0118310531489 от 30.12.2020 года по специальности: рентгенология (срок действия 5 лет).'
        },
        {
          name: 'Банникова Надежда Владимировна',
          isMale: false,
          speciality: 'Рентгенолаборант',
          diplom: 'Диплом о профессиональной переподготовке 182404234156 от 22.04.2019 года выдан АПОУ УР «Республиканский медицинский колледж имени Героя Советского Союза Ф.А. Пушиной МЗ УР», специальность: рентгенология; сертификат специалиста №0818310373213 от 22.04.2019 года по специальности: рентгенология (срок действия 5 лет).'
        },
        {
          name: 'Миронов Андрей Олегович',
          isMale: true,
          speciality: 'Рентгенолаборант',
          diplom: 'Диплом 183100151859 от 10.12.2019 года, выдан АПОУ УР «Республиканский медицинский колледж имени Героя Советского Союза Ф.А. Пушиной Министерства здравоохранения Удмуртской республики» по специальности: рентгенология; сертификат специалиста №0718310503141 от 12.12.2019 года по специальности: рентгенология.'
        },
        {
          name: 'Иванова Екатерина Николаевна',
          isMale: false,
          speciality: 'Медицинская сестра',
          diplom: 'Диплом 111824 0629761 № 252 от 30.06.2016 года, специальность: Сестринское дело; квалификация: медицинская сестра; уникальный номер реестровой записи аккредитации специалиста (сертификат) 2022.3115516 от 26.04.2022 года по специальности: сестринское дело (срок действия 5 лет).'
        },
        {
          name: 'Печенкина Виктория Дмитриевна',
          isMale: false,
          speciality: 'Медицинская сестра',
          diplom: 'Диплом 1018310535759 № 429 от 12.07.2022 года, выдан ФГБОУ ВО «Ижевская государственная медицинская академия» МЗ РФ г. Ижевск; специальность :педиатрия; квалификация: врач-педиатр; решение комиссии по допуску к осуществлению медицинской деятельности на должностях среднего медицинского персонала №23 от 26.03.2022г. ( срок действия 5 лет).'
        },
        {
          name: 'Хасанова Татьяна Сергеевна',
          isMale: false,
          speciality: 'Медицинская сестра процедурного кабинета',
          diplom: 'Диплом 18 БА 0014003 № 2784 от 30.06.2010 года, выдан ГОУ СПО «Ижевский медицинский колледж имени Героя Советского Союза Ф.А. Пушиной МЗ УР» специальность: акушерское дело, квалификация: акушерка; сертификат специалиста №0818310521737 от 20.10.2022 года по специальности: акушерское дело (срок действия 5 лет).'
        },
        {
          name: 'Горшков Александр Николаевич',
          isMale: true,
          speciality: 'Медицинский брат',
          diplom: 'Диплом 115904 0088849 № 9939 от 30.06.2021 года, выдан: ГБПОУ «Чайковский медицинский колледж», специальность: лечебное дело, квалификация: фельдшер; Свидетельство об аккредитации специалиста №772300365854 от 5.07.2021 г., подтверждающее право на осуществление медицинской деятельности, по специальности: лечебное дело, профессиональный стандарт: фельдшер.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.workers {
  display: flex;
  flex-direction: column;
  list-style: none;
  row-gap: 40px;

  @media screen and (max-width: 767px) {
    row-gap: 20px;
  }
}
</style>
