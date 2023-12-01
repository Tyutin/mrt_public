<template>
  <ul
    v-if="isActive"
    :class="{ uslugi__block_active: isActive }"
    class="uslugi__block"
  >
    <li v-for="item in uslugi" :key="item.nameUslugi">
      <UslugiUsluga
        :nameuslugi="item.nameUslugi"
        :price="item.price"
        :is-available-for-appoint="item.isAvailableForAppoint"
      />
    </li>
    <div v-if="paragraphs.length" class="uslugi__block-paragraphs">
      <p v-for="paragraph in paragraphs" :key="paragraph">{{ paragraph }}</p>
    </div>
  </ul>
</template>

<script>
export default {
  props: {
    uslugi: {
      type: Array,
      default () {
        return []
      }
    },
    isActive: {
      type: Boolean,
      default () {
        return false
      }
    },
    paragraphs: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.uslugi__block {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease-out;

  &_active {
    max-height: 3000px;
  }
}
</style>
