<template>
  <v-card
    :class="dense ? 'dense' : 'card'"
    :flat="!$vuetify.breakpoint.xsOnly"
    @click="$emit('cardClick', family)"
  >
    <div :class="dense ? 'v-card--dense__div' : 'v-card__div'" class="pa-0">
      <template v-if="dense">
        <v-img
          :style="{
            '-webkit-mask-image': `url(${family.icon})`,
            mask: `url(${family.icon})`
          }"
          contain
          max-width="38px"
          class="family-icon"
        />

        <div>
          <p class="text align-center pt-2 pr-1 ma-0">
            <strong>{{ family.name }}</strong>
          </p>

          <p class="ma-0 pt-1 see-more">Ver todos</p>
        </div>
      </template>

      <template v-else>
        <v-row justify="center">
          <v-col class="pa-0 pt-1 pt-sm-0 px-5">
            <v-img
              :style="{
                '-webkit-mask-image': `url(${family.icon})`,
                mask: `url(${family.icon})`
              }"
              contain
            />

            <p class="text text-start pt-2 pt-md-5 ma-0">
              <strong>{{ family.name }}</strong>
            </p>

            <p class="ma-0 pt-1 see-more">Ver todos</p>
          </v-col>
        </v-row>
      </template>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    family: {
      type: Object,
      default: () => {
        return {};
      }
    },
    dense: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
@media screen and (max-width: 400px) {
  .see-more {
    font-size: 10px;
  }

  .card {
    min-width: 115px;
    padding: 0 0 14px 10px;
  }

  .text {
    font-size: 12px !important;
  }

  .family-icon {
    margin-left: 4px;
  }
}

@media screen and (min-width: 400px) {
  .see-more {
    font-size: 11px;
  }

  .card {
    width: 175px;
    margin-left: auto;
    padding: 0 0 20px 16px;
  }

  .text {
    font-size: 14px !important;
  }
  
  .dense {
    min-width: 180px;
  }

  .family-icon {
    margin: 0 7px 0 8px
  }
}

.card {
  display: flex;
  align-items: flex-end;
  height: 155px;
}

.v-card__div {
  padding: 0;
}

.dense {
  display: flex;
  margin-bottom: 7px;
  height: 74px;
}

.v-card--dense__div {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
}

.text {
  line-height: 15px !important;
}

.v-image {
  height: 38px;
  width: 38px;
  background-color: #2F4C73;
  -webkit-mask-repeat: no-repeat !important;
  mask-repeat: no-repeat !important;
}

.v-card:hover {
  background-color:#B9BDD3;
  cursor: pointer;
}

.v-card:hover .v-image {
  background-color: white;
}

.v-card:hover .text,
.v-card:hover .see-more {
  color: white;
}

.see-more {
  font-weight: 600;
  line-height: 15px;
  letter-spacing: 0.01em;
  text-align: left;
}
</style>