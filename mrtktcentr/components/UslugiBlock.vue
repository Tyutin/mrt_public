<template>
  <div :class="{ uslugi__block_active: isActive }" class="uslugi__block">
    <UslugiUsluga
      v-for="item in uslugi"
      :key="item.nameUslugi"
      :nameuslugi="item.nameUslugi"
      :price="item.price"
      :is-available-for-appoint="item.isAvailableForAppoint"
    />
    <div v-if="paragraphs.length" class="uslugi__block-paragraphs">
      <p v-for="paragraph in paragraphs" :key="paragraph">{{ paragraph }}</p>
    </div>
  </div>
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
    max-height: 1200px;
  }

  &-paragraphs {
    margin-top: 10px;
    padding-left: 10px;
    @media (max-width: 1023px) {
      padding-left: 5px;
    }
    & > p {
      margin-bottom: 10px;
    }
  }
}
</style>
