<template>
  <main>
    <Banner />
    <div class="bannerCallbackMobile">
      <Callback />
    </div>
    <section class="container">
      <h2 class="sectionTitle">График работы</h2>
      <div class="grafik">
        <p>Мы работаем для Вас ежедневно в две смены:</p>
        <ul>
          <li>
            Первая смена: 7.00-10.00 (прием по квоте из прикрепленных
            клиник),10.00-15.00-платный прием
          </li>
          <li>
            Вторая смена: 15.00-17.00(прием по квоте из прикрепленных
            клиник),17.00-23.00-платный прием
          </li>
        </ul>
      </div>
    </section>
    <section class="container section__akcii">
      <div id="discount" class="anchor" />
      <h2 class="sectionTitle">Акции</h2>
      <Akcii :html="htmlcode" />
    </section>
    <!-- <Corona /> -->
    <section class="container">
      <div id="price" class="anchor" />
      <h2 class="sectionTitle">Услуги и цены</h2>
      <Uslugi :mrt="mrt" :kt="kt" />
    </section>
    <section class="container section__preim">
      <h2 class="sectionTitle">Преимущества</h2>
      <Preim />
    </section>
    <section class="container section__podgotovka">
      <h2 class="sectionTitle">Подготовка к МРТ /КТ-исcледованиям</h2>
      <Podgotovka />
    </section>
    <section id="contacts" class="container">
      <h2 class="sectionTitle">Контакты</h2>
      <Contacts />
    </section>
    <section class="container">
      <h2 class="sectionTitle">ДМС/ОМС</h2>
      <Dmsoms />
    </section>
    <section class="container">
      <CallbackFormText />
    </section>
  </main>
</template>

<script>
export default {
  data () {
    return {
      htmlcode: `<h3>Скидка по <span>UDS</span></h3>
        <h3>КТ диагностика мочекаменной болезни с контрастированием за <span>6000р.</span> до 3 декабря</h3>
        <h3>Счастливые часы- <span>скидка 20%</span> <nobr>с 21.00 до 23.00</nobr></h3>
        <h3>На любой массаж скидка <span>10%</span></h3>
        <p>Дополнительная скидка <span>5%</span> от полной цены прескуранта пенсионерам, инвалидам, мед. работникам, ветеранам труда, многодетным семьям (не включается в акцию <nobr>"Счастливые часы"</nobr>)</p>`,
      mrt: [
        {
          type: 'default',
          name: 'МРТ головы',
          uslugi: [
            {
              nameUslugi: 'МРТ головного мозга обзорная',
              price: 3000
            },
            {
              nameUslugi: 'МРТ головного мозга при эпилепсии',
              price: 4500
            },
            {
              nameUslugi: 'МРТ головного мозга при нейроваскулярном конфликте',
              price: 4000
            },
            {
              nameUslugi:
                'МРТ головного мозга при демиелинизирующих заболеваниях',
              price: 4500
            },
            {
              nameUslugi: 'МРТ гипофиза (с контрастом)',
              price: 5500
            },
            {
              nameUslugi: 'МРТ глазных орбит и зрительные нервы',
              price: 3300
            },
            {
              nameUslugi: 'МРТ головного мозга и исследование орбит',
              price: 4800
            },
            {
              nameUslugi: 'МРТ придаточных пазух носа',
              price: 2900
            },
            {
              nameUslugi: 'МРТ головного мозга и придаточных пазух носа',
              price: 4500
            },
            {
              nameUslugi:
                'МРТ головного мозга обзорная (расширенная программа с МР-вентрикулографией)',
              price: 4500
            }
          ]
        },
        {
          type: 'default',
          name: 'МРТ брюшной полости и забрюшинного пространства',
          uslugi: [
            {
              nameUslugi: 'МРТ брюшной полости',
              price: 4000
            },
            {
              nameUslugi: 'МР холангиография',
              price: 3000
            },
            {
              nameUslugi: 'МРТ брюшной полости и холангиография',
              price: 5500
            },
            {
              nameUslugi:
                'МРТ забрюшинного пространства (почки, надпочечники, лимфатические узлы)',
              price: 3700
            },
            // {
            //   nameUslugi: 'МРТ забрюшинного пространства и урография (трехмерное изображение мочевыводящих путей)',
            //   price: 4500
            // },
            {
              nameUslugi: 'МРТ брюшной полости и забрюшенного пространства',
              price: 7300
            }
          ]
        },
        {
          type: 'default',
          name: 'МРТ органов малого таза',
          uslugi: [
            {
              nameUslugi:
                'МРТ органов малого таза (Женщины: матка, придатки, яичники, мочевой пузырь, прямая кишка. Мужчины: предстательная железа, семенные пузырьки, мочевой пузырь, прямая кишка)',
              price: 4500
            }
          ]
        },
        {
          type: 'default',
          name: 'МРТ бесконтрастной ангиографии головного мозга',
          uslugi: [
            {
              nameUslugi: 'МР-ангиография венозных синусов головного мозга',
              price: 3000
            },
            {
              nameUslugi:
                'МРТ головного мозга и МР-ангиография вен головного мозга',
              price: 5000
            },
            {
              nameUslugi: 'МР-ангиография артерий головного мозга',
              price: 3000
            },
            {
              nameUslugi:
                'МРТ головного мозга и МР-ангиография артерий головного мозга',
              price: 5000
            },
            {
              nameUslugi: 'МР-ангиография вен и артерий головного мозга',
              price: 5300
            },
            {
              nameUslugi:
                'МРТ головного мозга, ангиография вен и артерий головного мозга',
              price: 7000
            },
            {
              nameUslugi: 'МР-ангиография артерий шеи',
              price: 3000
            },
            {
              nameUslugi:
                'МРТ шейного отдела позвоночника и ангиография артерий шеи',
              price: 5000
            }
          ]
        },
        {
          type: 'default',
          name: 'МРТ позвоночника',
          uslugi: [
            {
              nameUslugi: 'МРТ шейного отдела позвоночника',
              price: 3000
            },
            {
              nameUslugi: 'МРТ грудного отдела позвоночника',
              price: 3000
            },
            {
              nameUslugi: 'МРТ пояснично-крестцового отдела позвоночника',
              price: 3200
            },
            {
              nameUslugi: 'МРТ краниовертебрального перехода',
              price: 3000
            },
            {
              nameUslugi: 'МРТ крестцово-копчикового отдела позвоночника',
              price: 3000
            },
            {
              nameUslugi:
                'МРТ пояснично-крестцового и крестцово-копчикого отделов позвоночника',
              price: 4000
            },
            {
              nameUslugi: 'МРТ крестцово-подвздошных сочленений',
              price: 3300
            },
            {
              nameUslugi:
                'МРТ поясничного отдела позвоночника и крестцово-подвздошных сочленений',
              price: 4500
            },
            {
              nameUslugi: 'МРТ поясничного отдела позвоночника с миелографией',
              price: 4500
            }
          ]
        },
        {
          type: 'default',
          name: 'МРТ суставов',
          uslugi: [
            {
              nameUslugi: 'МРТ плечевого сустава (один сустав)',
              price: 3800
            },
            {
              nameUslugi: 'МРТ локтевого сустава (один сустав)',
              price: 3800
            },
            {
              nameUslugi: 'МРТ коленного сустава (один сустав)',
              price: 3800
            },
            {
              nameUslugi: 'МРТ голеностопного сустава (один сустав)',
              price: 3800
            },
            {
              nameUslugi: 'МРТ тазобедренных суставов (пара суставов)',
              price: 3800
            },
            {
              nameUslugi: 'МРТ височно-нижнечелюстных суставов (пара суставов)',
              price: 5000
            },
            {
              nameUslugi: 'МРТ одной кисти',
              price: 4000
            },
            {
              nameUslugi: 'МРТ одной стопы',
              price: 4000
            },
            {
              nameUslugi: 'МРТ лучезапястного сустава (один сустав)',
              price: 3800
            },
            {
              nameUslugi: 'МРТ грудинно-ключичных сочленений',
              price: 4000
            }
          ]
        },
        {
          type: 'default',
          name: 'МРТ мягких тканей',
          uslugi: [
            {
              nameUslugi: 'МРТ мягких тканей (одна область)',
              price: 5000
            }
          ]
        },
        {
          type: 'link',
          name: 'Комплексные программы МРТ',
          link: '/kompleksy'
        },
        {
          type: 'bold',
          name: 'Контрастное усиление',
          uslugi: [
            {
              nameUslugi: 'Внутривенное контрастное усиление (омнискан 10мл.)',
              price: 2500,
              isAvailableForAppoint: false
            },
            {
              nameUslugi: 'Внутривенное контрастное усиление (омнискан 15мл.)',
              price: 3000,
              isAvailableForAppoint: false
            },
            {
              nameUslugi: 'Внутривенное контрастное усиление (омнискан 20мл.)',
              price: 3800,
              isAvailableForAppoint: false
            },
            {
              nameUslugi: 'Внутривенное контрастное усиление (омнипак 50мл.)',
              price: 2000,
              isAvailableForAppoint: false
            },
            {
              nameUslugi: 'Внутривенное контрастное усиление (омнипак 100мл.)',
              price: 3000,
              isAvailableForAppoint: false
            },
            {
              nameUslugi: 'Внутривенное контрастное усиление (омнипак 200мл.)',
              price: 3500,
              isAvailableForAppoint: false
            }
          ]
        },
        {
          type: 'bold',
          name: 'Массаж',
          paragraphs: [
            'При оплате 5-ти сеансов массажа – скидка 7%',
            'При оплате 10-ти сеансов массажа – скидка 15%'
          ],
          uslugi: [
            {
              nameUslugi: 'Общий массаж тела (1 час)',
              price: 1800,
              isAvailableForAppoint: true
            },
            {
              nameUslugi: 'Общий массаж тела + голова (1 час 20 мин)',
              price: 2200,
              isAvailableForAppoint: true
            },
            {
              nameUslugi: 'Массаж головы (20 мин)',
              price: 700,
              isAvailableForAppoint: true
            },
            {
              nameUslugi: 'Массаж спины (30 мин)',
              price: 950,
              isAvailableForAppoint: true
            },
            {
              nameUslugi: 'Массаж спины (45 мин)',
              price: 1400,
              isAvailableForAppoint: true
            },
            {
              nameUslugi: 'Массаж шейно-воротниковой зоны (25 мин)',
              price: 900,
              isAvailableForAppoint: true
            },
            {
              nameUslugi: 'Массаж рук (30 мин)',
              price: 900,
              isAvailableForAppoint: true
            },
            {
              nameUslugi: 'Массаж ног (30 мин)',
              price: 900,
              isAvailableForAppoint: true
            },
            {
              nameUslugi: 'Лимфодренажный массаж (1 час)',
              price: 1700,
              isAvailableForAppoint: true
            },
            {
              nameUslugi: 'Антицеллюлитный массаж (1 зона 30 мин) ',
              price: 900,
              isAvailableForAppoint: true
            },
            {
              nameUslugi: 'Антицеллюлитный массаж (45 мин)',
              price: 1500,
              isAvailableForAppoint: true
            },
            {
              nameUslugi: 'Массаж лица классический (30 мин)',
              price: 900,
              isAvailableForAppoint: true
            },
            {
              nameUslugi: 'Хиропластический массаж лица (45 мин)',
              price: 1300,
              isAvailableForAppoint: true
            },
            {
              nameUslugi: 'Буккальный массаж (1 час)',
              price: 1500,
              isAvailableForAppoint: true
            },
            {
              nameUslugi:
                'Буккальный массаж + альгинатная маска (1 час 15 мин)',
              price: 1750,
              isAvailableForAppoint: true
            }
          ]
        },
        {
          type: 'bold',
          name: 'Консультации врачей',
          uslugi: [
            {
              nameUslugi:
                'Первичная консультация врача-онколога (оформление документации, сбор анамнеза)',
              price: 1500
            },
            {
              nameUslugi: 'Повторная консультация врача-онколога',
              price: 1200
            },
            {
              nameUslugi:
                'Консультация врача-онколога с результатом нашего МРТ или КТ исследования ( исследования не позднее 2х месяцев)',
              price: 1200
            }
          ]
        },
        {
          type: 'bold',
          name: 'Забор крови на антитела',
          uslugi: [
            {
              nameUslugi:
                'Определение антител ImgM и Img G к SARS-CoV-2(Covid-19)',
              price: 1500
            }
          ]
        },
        {
          type: 'bold',
          name: 'Дополнительно',
          uslugi: [
            {
              nameUslugi: 'Запись исследования на диск',
              price: 0,
              isAvailableForAppoint: false
            },
            {
              nameUslugi: 'Запись исследования на диск (дубликат)',
              price: 250,
              isAvailableForAppoint: false
            },
            {
              nameUslugi: 'Выдача дубликата протокола исследования',
              price: 200,
              isAvailableForAppoint: false
            },
            {
              nameUslugi:
                'Оценка динамики с предыдущими исследованиями сделанными не у нас',
              price: 1500,
              isAvailableForAppoint: false
            }
          ]
        }
      ],
      kt: [
        {
          type: 'default',
          name: 'КТ головы',
          uslugi: [
            {
              nameUslugi: 'КТ внутреннего уха',
              price: 2700
            },
            {
              nameUslugi: 'КТ головного мозга',
              price: 2700
            },
            {
              nameUslugi: 'КТ лицевого скелета',
              price: 2700
            },
            {
              nameUslugi: 'КТ орбит',
              price: 2700
            },
            {
              nameUslugi: 'КТ придаточных пазух носа',
              price: 2700
            }
          ]
        },
        {
          type: 'default',
          name: 'КТ шеи',
          uslugi: [
            {
              nameUslugi: 'КТ гортани, глотки, трахеи',
              price: 2700
            },
            {
              nameUslugi: 'КТ мягких тканей шеи',
              price: 2700
            }
          ]
        },
        {
          type: 'default',
          name: 'КТ грудной клетки',
          uslugi: [
            {
              nameUslugi: 'КТ грудной клетки обзорное',
              price: 3000
            }
            // {
            //   nameUslugi: 'КТ легких при вирусной пневмонии',
            //   price: 3000
            // }
          ]
        },
        {
          type: 'default',
          name: 'КТ брюшной полости и малого таза',
          uslugi: [
            {
              nameUslugi: 'КТ малого таза',
              price: 2700
            },
            {
              nameUslugi:
                'КТ мочевыводящих путей (мочеточники, мочевыводящие пути)',
              price: 4500
            },
            {
              nameUslugi:
                'КТ органов брюшной полости + обзорное (пероральное контрастированием)',
              price: 3300
            },
            {
              nameUslugi: 'КТ почек',
              price: 3000
            }
          ]
        },
        {
          type: 'default',
          name: 'КТ кишечника',
          uslugi: [
            {
              nameUslugi:
                'КТ органов брюшной полости + таз (пероральное и внутривенное контрастирование)',
              price: 8000
            }
          ]
        },
        {
          type: 'default',
          name: 'КТ позвоночника',
          uslugi: [
            {
              nameUslugi: 'КТ грудного отдела',
              price: 2700
            },
            {
              nameUslugi: 'КТ крестцово-копчикового отдела',
              price: 2700
            },
            {
              nameUslugi: 'КТ поясничного отдела позвоночника + таз',
              price: 4500
            },
            {
              nameUslugi: 'КТ шейного отдела',
              price: 2700
            },
            {
              nameUslugi: 'КТ поянисничного отдела позвоночника',
              price: 2700
            },
            {
              nameUslugi:
                'КТ онкоскелет (шейный, грудной,поясничный отделы позвоночника и таз)',
              price: 6500
            }
          ]
        },
        {
          type: 'default',
          name: 'КТ суставов',
          uslugi: [
            {
              nameUslugi: 'КТ голеностопного сустава',
              price: 2700
            },
            {
              nameUslugi: 'КТ коленного сустава',
              price: 2700
            },
            {
              nameUslugi: 'КТ локтевого сустава',
              price: 2700
            },
            {
              nameUslugi: 'КТ лучезапястного сустава',
              price: 2700
            },
            {
              nameUslugi: 'КТ плечевого сустава',
              price: 2700
            },
            {
              nameUslugi: 'КТ тазобедренного сустава',
              price: 2700
            }
          ]
        },
        // {
        //   type: 'default',
        //   name: 'КТ сосудов',
        //   uslugi: [
        //     {
        //       nameUslugi: 'КТ аорты',
        //       price: 6500
        //     },
        //     {
        //       nameUslugi: 'КТ сосудов верхней конечности',
        //       price: 6200
        //     },
        //     {
        //       nameUslugi: 'КТ головного мозга (с контрастированием)',
        //       price: 4500
        //     },
        //     {
        //       nameUslugi: 'КТ сосудов нижней конечности',
        //       price: 8400
        //     },
        //     {
        //       nameUslugi: 'КТ сосудов шеи',
        //       price: 6200
        //     }
        //   ]
        // },
        {
          type: 'default',
          name: 'КТ мягких тканей',
          uslugi: [
            {
              nameUslugi: 'КТ кисти (одной)',
              price: 2700
            },
            {
              nameUslugi: 'КТ конечности (голень или бедро или плечевая кость)',
              price: 2700
            },
            {
              nameUslugi: 'КТ стопы',
              price: 2700
            }
          ]
        },
        {
          type: 'default',
          name: 'Онкопоиск',
          uslugi: [
            {
              nameUslugi:
                'КТ головного мозга, придаточных пазух носа, шеи, тела, органов брюшной полости, забрюшинного пространства, малого таза (пероральное и внутривенное контрастирование)',
              price: 15000
            }
          ]
        },
        {
          type: 'link',
          name: 'Комплексные программы КТ',
          link: '/kompleksy'
        }
      ]
    }
  },
  head: {
    title: '🏥 МРТ и КТ в Ижевске | Центр томографии Флагман Ижевск',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Центр томографии Флагман Ижевск. Магнитно-резонансная томография, компьютерная томография'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'МРТ, КТ, томография, флагман, Ижевск, центр томографии, Магнитно-резонансный томограф, Компьютерный томограф'
      }
    ]
  }
}
</script>

<style lang="scss" scoped>
.section__akcii {
  @media screen and (max-width: 1023px) {
    padding: 20px 0;
  }

  .sectionTitle {
    @media screen and (max-width: 1023px) {
      padding-left: 35px;
    }

    @media screen and (max-width: 767px) {
      padding-left: 15px;
    }
  }
}

.section__preim {
  @media screen and (max-width: 767px) {
    display: none;
  }
}

.section__podgotovka {
  @media screen and (max-width: 767px) {
    display: none;
  }
}

.bannerCallbackMobile {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    display: none;
  }
}

.tehrab {
  font-size: 28px;
  text-align: center;

  @media screen and (max-width: 425px) {
    font-size: 20px;
  }
}

.grafik {
  p {
    margin-bottom: 10px;
  }
}
</style>
