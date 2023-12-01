<template>
  <div class="reviewsSlider">
    <CoolLightBox :items="fullImgs" :index="sliderIndex" @close="sliderIndex = null" />
    <VueSlickCarousel v-bind="settings" class="slick-works">
      <div v-for="(image, imageIndex) in minImgs" :key="imageIndex">
        <div class="slick-works__image-wrap" @click="sliderIndex = imageIndex">
          <img :src="image.src" :alt="image.alt" class="slick-works__image">
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>
<script>
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import '@/assets/scss/slick.scss'
import VueSlickCarousel from 'vue-slick-carousel'
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
export default {
  components: {
    VueSlickCarousel,
    CoolLightBox
  },
  props: {
    imgnames: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      sliderIndex: null,
      settings: {
        arrows: true,
        dots: true,
        slidesToShow: 3,
        infinite: true,
        swipe: false,
        autoplay: false,
        autoplaySpeed: 4000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              swipe: true
            }
          },
          {
            breakpoint: 767,
            settings: {
              autoplay: false,
              slidesToShow: 1,
              swipe: true
            }
          }
        ]
      }
    }
  },
  computed: {
    fullImgs () {
      return this.imgnames.map((prop) => {
        return {
          title: prop.title,
          description: prop.description,
          alt: prop.alt,
          src: `/img/reviews/${prop.src}`
        }
      })
    },
    minImgs () {
      return this.imgnames.map((prop) => {
        return {
          src: `/img/reviews/min/${prop.src}`,
          alt: prop.alt
        }
      })
    }
  }

}
</script>
<style lang="scss" scoped>
.reviewsSlider {
  padding: 0 20px;
}
.slick-works {
  padding-bottom: 25px;
  @media screen and (max-width: 767px) {
    max-width: 490px;
    margin: 0 auto;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__image-wrap {
    height: 500px;
    margin: 0 10px;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #326197;
    cursor: pointer;

    @media screen and (max-width: 425px) {
      height: 240px;
    }
  }
}
</style>
