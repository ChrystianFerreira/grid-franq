<template>
  <div v-if="families.length" class="grid-wrapper mx-auto mx-lg-0">
    <div class="family-header-grid" v-if="!$vuetify.breakpoint.xsOnly">
      <div class="dark family-header-background"></div>
      <p class="family-header-content mt-auto pb-3">Hello! Nice to meet you.</p>
    </div>
    <div
      :class="
        families.length < 4 && $vuetify.breakpoint.xsOnly
          ? 'two-column-grid'
          : 'family-grid'
      "
    >
      <template v-if="$vuetify.breakpoint.xsOnly">
        <template v-if="families.length < 4">
          <single-card :family="families[0]" />

          <double-card
            v-if="families.length === 3"
            :items="families.slice(1, 3)"
          />

          <single-card v-else-if="!!families[1]" :family="families[1]" class="float-right" />
        </template>
        <div
          v-else
          v-for="(family, index) in families"
          :key="family.id"
          :class="index % 2 === 0 ? 'justify-end' : 'justify-start'"
        >
          <single-card :family="family" dense />
        </div>
      </template>

      <template v-else>
        <div>
          <single-card v-if="families.length != 6" :family="families[0]" />
          
          <double-card v-else :items="families.slice(0, 2)" />
        </div>
        

        <div>
          <single-card v-if="families.length === 2" :family="families[1]" />

          <double-card
            v-else-if="families.length > 2"
            :items="
              families.length === 6
                ? families.slice(2, 4)
                : families.slice(1, 3)
            "
          />

          <div v-if="families.length === 1" class="dark" />
        </div>

        <div>
          <double-card
            v-if="families.length >= 4"
            :items="
              families.length === 6
                ? families.slice(4, 6)
                : families.slice(3, 5)
            "
          />

          <div v-else class="dark"></div>
        </div>

        <v-spacer></v-spacer>

        <div class="dark"></div>
      </template>
    </div>
  </div>
  <v-skeleton-loader v-else type="image"></v-skeleton-loader>
</template>

<script>
import SingleCard from "@/components/SingleCard.vue";
import DoubleCard from "@/components/DoubleCard.vue";

export default {
  components: {
    SingleCard,
    DoubleCard,
  },
  props: {
    families: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 400px) {
  .family-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 13px;
  }
}

@media screen and (min-width: 400px) {
  .family-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 13px 12px;
    grid-template-areas:
      ". ."
      ". ."
      ". .";
  }
}

@media screen and (min-width: 600px) {
  .grid-wrapper {
    width: 555px;
    height: 491px;
  }

  .family-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 13px 12px;
    grid-template-areas:
      ". . ."
      ". . .";
  }
}

.two-column-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 13px 12px;
  grid-template-areas:
    ". ."
    ". ."
    ". .";
}

.dark {
  border-radius: 5px;
  width: 176px;
  height: 155px;
  padding: 10px;
  background-color: #2c2d34;
}

.family-header-grid {
  display: grid;
  grid-template-columns: 100% 33%;
  gap: 13px 12px;
  grid-template-areas: ". .";
  position: relative;
  width: 555px;
  height: 168px;
}

.family-header-content {
  color: #ffffff;
  font-size: 26px;
  font-weight: 700;
  position: relative;
  line-height: 26.5px;
  margin-bottom: 12px;
  z-index: 2;
}

.family-header-background {
  margin-left: 189px;
  position: absolute;
  z-index: 1;
}
</style>