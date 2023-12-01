<template>
  <ul class="licenses">
    <li v-for="(item, index) in licenses" :key="index" class="licenses__item">
      <a :href="getImagePath(item)" target="_blank">
        <img :src="getMinImagePath(item)" alt="">
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  data () {
    return {
      licenses: ['1', '2', '3', '4']
    }
  },
  methods: {
    getImagePath (filename) {
      return `/img/licenses/${filename}.jpg`
    },
    getMinImagePath (filename) {
      return `/img/licenses/min/${filename}.jpg`
    }
  }
}
</script>
<style lang="scss" scoped>
.licenses {
  display: flex;
  list-style: none;
  flex-wrap: wrap;

  &__item {
    width: 25%;
    padding: 10px;

    @media screen and (max-width: 767px) {
      width: 50%;
    }

    a {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
}
</style>
