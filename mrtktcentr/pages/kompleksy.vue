<template>
  <main class="kompleksy">
    <section class="container section__akcii">
      <h2 class="sectionTitle">Акции</h2>
      <Akcii :html="htmlcode" />
    </section>
    <section class="container">
      <h1 class="sectionTitle">Комплексные программы</h1>
      <Uslugi
        :mrt="mrtk"
        :kt="ktk"
        :h1="false"
        :kth3="'Спиральный компьютерный томограф'"
      />
    </section>
    <section class="container">
      <h2 class="sectionTitle">Это важно знать</h2>
      <Etovajno />
    </section>
  </main>
</template>

<script>
export default {
  data () {
    return {
      htmlcode:
        '<h3>Прохождение исследования по программе "онкопоиск" <nobr>за <span>12000 рублей.</span></nobr></h3>',
      mrtk: [
        // {
        //   type: 'default',
        //   name: 'Женское здоровье',
        //   uslugi: [
        //     {
        //       nameUslugi: 'Женское здоровье (МРТ гипофиса с контрастным усилением и органов малого таза)',
        //       price: 7000
        //       // oldPrice: 8700
        //     }
        //   ]
        // },
        // {
        //   type: 'default',
        //   name: 'Мужское здоровье',
        //   uslugi: [
        //     {
        //       nameUslugi: 'Мужское здоровье (МРТ органов малого таза и сакроиллеальных сочленений)',
        //       price: 6000
        //       // oldPrice: 7300
        //     }
        //   ]
        // },
        {
          type: 'default',
          name: 'МРТ всего позвоночника',
          uslugi: [
            {
              nameUslugi:
                'МРТ всего позвоночника (МРТ шейного, грудного и пояснично-крестцовых отделов)',
              price: 6300
              // oldPrice: 8400
            }
          ]
        },
        {
          type: 'default',
          name: 'МРТ коленных суставов',
          uslugi: [
            {
              nameUslugi: 'МРТ двух коленных суставов',
              price: 6500
              // oldPrice: 7600
            }
          ]
        },
        // {
        //   type: 'default',
        //   name: 'Боль в спине',
        //   uslugi: [
        //     {
        //       nameUslugi: 'Боль в спине (МРТ пояснично крестцового отдела позвоночника и 2 тазобедренных суставов)',
        //       price: 5500
        //       // oldPrice: 6600
        //     }
        //   ]
        // },
        {
          type: 'default',
          name: 'МРТ всего тела',
          uslugi: [
            {
              nameUslugi:
                'МРТ всего тела (МРТ головного мозга, всего позвоночника, органов брюшной полости, забрюшинного пространства, малого таза)',
              price: 18000
              // oldPrice: 21400
            }
          ]
        },
        {
          type: 'default',
          name: 'Головная боль 1',
          uslugi: [
            {
              nameUslugi:
                'Головная боль 1 (МРТ головного мозга, МР ангиография вен и артерий головного мозга)',
              price: 7000
              // oldPrice: 7000
            }
          ]
        },
        {
          type: 'default',
          name: 'Головная боль 2',
          uslugi: [
            {
              nameUslugi:
                'Головная боль 2 (МРТ головного мозга и шейного отдела позвоночника)',
              price: 5000
              // oldPrice: 5800
            }
          ]
        },
        {
          type: 'default',
          name: 'Головная боль 3',
          uslugi: [
            {
              nameUslugi:
                'Головная боль 3 (МРТ головного мозга и шейного отдела позвоночника, МР ангиография артерий и вен головного мозга, а также артерий шейного отдела позвоночника)',
              price: 8800
              // oldPrice: 10300
            }
          ]
        }
        // {
        //   type: 'default',
        //   name: 'Боль в животе',
        //   uslugi: [
        //     {
        //       nameUslugi: 'Боль в животе (МРТ органов брюшной полости, забрюшинного пространства, малого таза)',
        //       price: 10400
        //       // oldPrice: 11500
        //     }
        //   ]
        // }
      ],
      ktk: [
        {
          type: 'default',
          name: 'Онкопоиск',
          uslugi: [
            {
              nameUslugi:
                'Онкопоиск (КТ головного мозга, придаточных пазух носа, височной кости, глазницы, внутреннего уха, органов грудной клетки, шейных, подчелюстных, надключинных и подмышечных лимфоузлов, молочных желез, костной системы, органов брюшной полости, забрюшинного пространства, малого таза с внутривенным и пероральным контрастным веществом.)',
              price: 12000
              // oldPrice: 15000
            }
          ]
        },
        // {
        //   type: 'default',
        //   name: 'КТ Кишечника',
        //   uslugi: [
        //     {
        //       nameUslugi: 'КТ кишечника (КТ брюшной полости, КТ таза, внутривенное и пероральное контрастное усиление)',
        //       price: 6000
        //       // oldPrice: 7500
        //     }
        //   ]
        // },
        {
          type: 'default',
          name: 'КТ Мочевыделительной системы',
          uslugi: [
            {
              nameUslugi: 'КТ Мочевого пузыря и мочевыводящих путей',
              price: 7000
              // oldPrice: 6500
            }
          ]
        }
      ]
    }
  },
  head: {
    title:
      '🩺 Комплексные МРТ и КТ исследования | Центр томографии Флагман, Ижевск',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Комплексные программы МРТ и КТ исследований: Онкопоиск, МРТ всего тела, Головная боль, МРТ суставов'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'комплекс, МРТ, КТ, томография, флагман, Ижевск, центр томографии, Магнитно-резонансный томограф, Компьютерный томограф'
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
.kompleksy {
  ul,
  p {
    list-style-position: inside;
    font-size: 20px;
    line-height: 1.4;
    margin-bottom: 40px;
  }
}
</style>
