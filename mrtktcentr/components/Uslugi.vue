<template>
  <div class="uslugi">
    <div class="uslugi__flex">
      <div class="uslugi__half">
        <h3>{{ mrth3 }}</h3>
        <ul>
          <UslugiItem
            v-for="item in mrt"
            :key="item.name"
            :name="item.name"
            :type="item.type"
            :link="item.link"
            :uslugi="item.uslugi"
            :paragraphs="item.paragraphs"
          />
        </ul>
      </div>
      <div class="uslugi__half">
        <h3>{{ kth3 }}</h3>
        <ul>
          <UslugiItem
            v-for="item in kt"
            :key="item.name"
            :name="item.name"
            :type="item.type"
            :link="item.link"
            :uslugi="item.uslugi"
            :paragraphs="item.paragraphs"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    h1: {
      type: Boolean,
      default () {
        return true
      }
    },
    mrt: {
      type: Array,
      default () {
        return []
      }
    },
    kt: {
      type: Array,
      default () {
        return []
      }
    },
    mrth3: {
      type: String,
      default () {
        return 'Магнитно-резонансный томограф'
      }
    },
    kth3: {
      type: String,
      default () {
        return 'Компьютерный томограф'
      }
    }
  },
  computed: {
    funcs () {
      return this.html
    }
  }
}
</script>

<style lang="scss" scoped>
.uslugi {
  &__flex {
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 767px) {
      flex-direction: column;
      padding: 0;
    }
  }

  &__half {
    width: 48%;

    @media screen and (max-width: 767px) {
      width: 100%;

      &:nth-child(1) {
        margin-bottom: 30px;
      }
    }

    ul {
      list-style: none;

      @media screen and (max-width: 767px) {
        padding-left: 10px;
      }

      @media screen and (max-width: 425px) {
        padding-left: 5px;
      }
    }
  }

  h2 {
    font-family: 'PantonBold', sans-serif;
    color: $blue;
    font-size: 45px;
    margin-bottom: 40px;
    padding-left: 20px;
  }

  h3 {
    color: black;
    font-size: 28px;
    margin-bottom: 20px;
    font-weight: bold;

    @media screen and (min-width: 768px) and (max-width: 1023px) {
      min-height: 66px;
    }

    @media screen and (max-width: 424px) {
      font-size: 25px;
    }
  }
}
</style>
