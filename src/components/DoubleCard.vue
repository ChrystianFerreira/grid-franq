<template>
  <div>
    <single-card
      v-for="family in items"
      :family="family"
      :key="family.id"
      @cardClick="$emit('cardClick', $event)"
      dense
    />

    <div
      v-if="items.length === 1"
      class="dense-dark"
    >
    </div>
  </div>
</template>

<script>
import SingleCard from "@/components/SingleCard"

export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    SingleCard
  }
};
</script>

<style scoped>
.dense-dark {
  background-color: #2c2d34;
  max-width: 180px;
  height: 74px;
}
</style>