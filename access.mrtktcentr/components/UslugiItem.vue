<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <li
    class="uslugi__item"
    :class="{
      uslugi__item_bold: type == 'bold',
      uslugi__item_link: type == 'link'
    }"
  >
    <nuxt-link v-if="link" :to="link">
      {{ name }}
    </nuxt-link>
    <button
      v-if="!link"
      class="uslugi__block-name likeLink"
      @click="isActive = !isActive"
    >
      <span>{{ name }}</span>
      <img v-if="isActive" src="/img/uslugi-arrow-up.svg" alt="">
      <img v-else src="/img/uslugi-arrow-down.svg" alt="">
    </button>
    <UslugiBlock
      v-if="!link"
      :uslugi="uslugi"
      :isActive="isActive"
      :paragraphs="paragraphs"
    />
  </li>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default () {
        return ''
      }
    },
    name: {
      type: String,
      default () {
        return ''
      }
    },
    link: {
      type: String,
      default () {
        return ''
      }
    },
    uslugi: {
      type: Array,
      default () {
        return []
      }
    },
    paragraphs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      isLink: this.type === 'link',
      isBold: this.type === 'bold',
      isDefault: this.type === 'default',
      isActive: false
    }
  }
}
</script>

<style lang="scss" scoped>
.uslugi__item {
  margin-bottom: 10px;
  padding-bottom: 10px;

  @media screen and (max-width: 768px) {
    padding-bottom: 0;
  }

  > a {
    display: block;
    padding: 10px 0;
  }

  &_bold {
    border-bottom: none;
  }

  &_link {
    color: #f24841;
  }
}

.uslugi__block-name {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
  border-bottom-width: 2px;

  & span {
    text-align: left;
  }
}
</style>
