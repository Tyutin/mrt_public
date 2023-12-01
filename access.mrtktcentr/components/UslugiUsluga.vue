<template>
  <a
    class="uslugi__usluga likeLink"
    :class="{'uslugi__usluga--available' : isAvailable}"
    href="#zapis"
    @click="goToCallback"
  >
    <span class="uslugi__name">
      {{ nameuslugi }}
    </span>
    <span v-if="freeprice" class="uslugi__price">
      бесплатно
    </span>
    <span v-else class="uslugi__price">
      {{ price }}Р
    </span>
  </a>
</template>

<script>
export default {
  props: {
    nameuslugi: {
      type: String,
      default () {
        return 'sas'
      }
    },
    price: {
      type: Number,
      default () {
        return 0
      }
    },
    isAvailableForAppoint: {
      type: Boolean,
      default () {
        return true
      }
    }
  },
  data () {
    return {
      freeprice: this.price === 0
    }
  },
  computed: {
    isAvailable () {
      return this.isAvailableForAppoint
    }
  },
  methods: {
    goToCallback () {
      if (this.isAvailableForAppoint) {
        this.$store.commit('popups/openUslugaPopup', this.nameuslugi)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.uslugi__usluga {
  width: calc(100% - 30px);
  margin-left: 30px;
  margin-top: 8px;
  margin-bottom: 15px;
  padding: 8px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid yellow;

  @media screen and (max-width: 1023px) {
    margin-left: 5px;
  }

  &--available:hover {
    cursor: pointer;
  }
}

.uslugi__price {
  font-weight: bold;
}

.uslugi__name {
  max-width: 80%;
  margin-bottom: 0;
  text-align: left;
}
</style>
