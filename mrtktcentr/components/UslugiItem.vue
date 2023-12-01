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
    <div v-if="!link" class="uslugi__block-name" @click="isActive = !isActive">
      {{ name }}
      <img v-if="isActive" src="/img/uslugi-arrow-up.svg" alt="">
      <img v-else src="/img/uslugi-arrow-down.svg" alt="">
    </div>
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
  font-size: 20px;
  color: $lgray;
  border-bottom: 2px solid #e8e8e8;
  margin-bottom: 10px;
  padding-bottom: 10px;

  @media screen and (max-width: 768px) {
    padding-bottom: 0;
  }

  > a {
    display: block;
    padding: 10px 0;
    color: $red;
  }

  &_bold {
    border-bottom: none;
    font-size: 26px;
    color: black;
  }

  &_link {
    color: $red;
  }
}

.uslugi__block-name {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;

  .uslugi__item_bold & {
    font-weight: 700;
  }

  @media screen and (max-width: 425px) {
    font-size: 18px;
  }
}
</style>
