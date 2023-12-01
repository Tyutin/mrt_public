<template>
  <div class="worker__wrap">
    <div class="worker">
      <div class="worker__photo">
        <img :src="image" :alt="name">
      </div>
      <div class="worker__info">
        <h3 class="worker__name">{{ name }}</h3>
        <span class="worker__speciality">{{ speciality }}</span>
        <span class="worker__diplom-desktop">{{ diplom }}</span>
        <span class="worker__toggle likeLink" @click="toggleIsOpen">{{ toggleMessage }}</span>
      </div>
    </div>
    <div v-if="isOpen" class="worker__diplom-mobile">
      <span>{{ diplom }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default () {
        return 'Иванов'
      }
    },
    isMale: {
      type: Boolean,
      default () {
        return true
      }
    },
    speciality: {
      type: String,
      default () {
        return 'Врач'
      }
    },
    diplom: {
      type: String,
      default () {
        return 'Диплом'
      }
    },
    photo: {
      type: String,
      default () {
        return ''
      }
    }
  },
  data () {
    return {
      isOpen: false
    }
  },
  computed: {
    image () {
      if (this.photo.length) {
        return `/img/workers/${this.photo}`
      }
      if (this.isMale) {
        return '/img/workers/doctor-male.png'
      }
      return '/img/workers/doctor-female.png'
    },
    toggleMessage () {
      return this.isOpen ? 'Скрыть сведения' : 'Показать сведения'
    }
  },
  methods: {
    toggleIsOpen () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
<style lang="scss" scoped>
.worker {
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) {
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 20px;
  }

  &__photo {
    min-width: 200px;
    max-width: 200px;
    min-height: 200px;
    max-height: 200px;
    height: 200px;
    border-radius: 10px;
    overflow: hidden;
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    padding-left: 15px;

    @media screen and (max-width: 767px) {
      padding-left: 0;
    }
  }

  &__name {
    margin-bottom: 0;
  }

  &__speciality {
    margin-bottom: 20px;

    @media screen and (max-width: 767px) {
      margin-bottom: 10px;
    }
  }

  &__diplom-desktop {

    @media screen and (max-width: 767px) {
      display: none;
    }
  }

  &__diplom-mobile {
    width: 100%;
    margin-top: 10px;

    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  &__toggle {
    display: block;

    @media screen and (min-width: 768px) {
      display: none;
    }
  }
}
</style>
