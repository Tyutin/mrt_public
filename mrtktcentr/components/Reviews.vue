<template>
  <div class="reviews">
    <ReviewsSlider :imgnames="workImgs" />
    <ul>
      <li>
        <a href="https://yandex.ru/maps/org/flagman/27475269235/reviews/?ll=53.220107%2C56.865149&z=14" target="_blank" rel="noopener noreferrer">Отзывы на Яндекс картах</a>
      </li>
      <li>
        <a href="https://2gis.ru/izhevsk/firm/70000001035034104/tab/reviews?m=53.219983%2C56.865157%2F16" target="_blank" rel="noopener noreferrer">Отзывы на 2gis</a>
      </li>
      <li>
        <a href="https://izhevsk.zoon.ru/medical/tsentr_tomografii_flagman_na_udmurtskoj_ulitse/" target="_blank" rel="noopener noreferrer">Отзывы на Zoon</a>
      </li>
      <li>
        <a href="https://izhevsk.flamp.ru/firm/flagman_centr_tomografii-70000001035034104#reviews" target="_blank" rel="noopener noreferrer">Отзывы на Flamp</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      workImgs: [
        {
          title: 'Отзыв 1',
          description: '',
          alt: 'Отзыв 1',
          src: '1.jpg'
        },
        {
          title: 'Отзыв 2',
          description: '',
          alt: 'Отзыв 2',
          src: '2.jpg'
        },
        {
          title: 'Отзыв 3',
          description: '',
          alt: 'Отзыв 3',
          src: '3.jpg'
        },
        {
          title: 'Отзыв 4',
          description: '',
          alt: 'Отзыв 4',
          src: '4.jpg'
        },
        {
          title: 'Отзыв 5',
          description: '',
          alt: 'Отзыв 5',
          src: '5.jpg'
        },
        {
          title: 'Отзыв 6',
          description: '',
          alt: 'Отзыв 6',
          src: '6.jpg'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
