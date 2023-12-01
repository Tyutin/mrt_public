<template>
  <div
    class="uslugi__usluga"
    :class="{ 'uslugi__usluga--available': isAvailable }"
    @click="openZapisPopup"
    @mousemove="updateTooltipStyle"
    @mouseout="clearTooltipStyle"
  >
    <p class="uslugi__name">
      {{ nameuslugi }}
    </p>
    <p v-if="freeprice" class="uslugi__price">бесплатно</p>
    <p v-else class="uslugi__price">{{ price }}Р</p>
  </div>
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
    openZapisPopup () {
      if (this.isAvailableForAppoint) {
        this.$store.commit('popups/openUslugaPopup', this.nameuslugi)
      }
    },
    updateTooltipStyle (ev) {
      if (!this.isAvailableForAppoint) {
        return
      }
      this.$store.commit('tooltip/updateTooltipStyle', {
        x: ev.pageX,
        y: ev.pageY
      })
    },
    clearTooltipStyle () {
      if (!this.isAvailableForAppoint) {
        return
      }
      this.$store.commit('tooltip/clearTooltipStyle')
    }
  }
}
</script>

<style lang="scss" scoped>
.uslugi__usluga {
  margin-left: 30px;
  margin-top: 8px;
  padding: 8px 0;
  display: flex;
  justify-content: space-between;
  font-size: 16px;

  &:hover {
    border-bottom: 1px solid #bababa;
    padding-bottom: 7px;
  }

  @media screen and (max-width: 1023px) {
    margin-left: 5px;
  }

  &--available:hover {
    cursor: pointer;
  }
}

.uslugi__price {
  color: $blue;
  font-weight: bold;
}

.uslugi__name {
  font-weight: normal;
  max-width: 80%;
  color: $lgray;
  margin-bottom: 0;
}
</style>
