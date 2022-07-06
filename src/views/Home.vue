<template>
  <v-container class="wrapper" fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" lg="6" md="12">
        <h1 class="float-left white--text">
          Grid for Franq Open Banking
        </h1>
      </v-col>

      <v-col class="description white--text"  cols="12" lg="6" md="12">
        <p>
          While working at Franq Open Banking, an UI designer proposed the component below for a new feature 
          we were developing. I explored a few different ideas shared by my team on how to do this and
          combined them with what I thought would be the ideal way to this. My final code on the company's
          project is similiar to what you can see here, with the visual result and behaviour being pretty
          much the same. Hope you like it!
        </p>
        <p>- Chrystian</p>
      </v-col>
    </v-row>

    <hr>

    <v-row justify="center" align="center" class="pt-4">
      <v-col class="d-flex justify-center" cols="6" >
        <v-btn class="mr-2" @click="changeSliceEnd('subtract')" :disabled="sliceEnd === 1"><h1>-</h1></v-btn>
        <v-btn @click="changeSliceEnd('add')" :disabled="sliceEnd === 6"><h1>+</h1></v-btn>
      </v-col>
    </v-row>

    <v-row justify="center" align="center">
      <v-col class="d-flex justify-center" cols="6">
        <family-list :families="slicedFamilies" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref, computed } from "@vue/composition-api"
import FamilyList from "@/components/FamilyList";
import {
  Beneficios,
  ContasCartoes,
  Emprestimos,
  Investimentos,
  Saques,
  Seguros,
} from "@/composables/use-icons";

export default {
  components: {
    FamilyList
  },
  setup() {
    const sliceEnd = ref(6);

    const changeSliceEnd = action => { 
      if((action === "add" && sliceEnd.value === 6) || (action === "subtract" && sliceEnd.value === 1)) return;

      action === "add" ? sliceEnd.value++ : sliceEnd.value--;      
    }

    const slicedFamilies = computed(() => {
      return [
        { icon: Emprestimos, name: "Empréstimos" },
        { icon: Investimentos, name: "Investimentos" },
        { icon: Saques, name: "Financiamentos e consórcios" },
        { icon: Beneficios, name: "Outras soluções para empreender" },
        { icon: Seguros, name: "Seguros e previdência" },
        { icon: ContasCartoes, name: "Contas digitais e cartões" },
      ].slice(0, sliceEnd.value);
    });

    return {
      slicedFamilies,
      changeSliceEnd,
      sliceEnd
    };
  },
};
</script>

<style scoped>
@media screen and (max-width: 400px) {
  .description {
    font-size: 12px;
  }
}

@media screen and (min-width: 400px) {
  .description {
    font-size: 14px;
  }
}

@media screen and (min-width: 600px) {
  .description {
    font-size: 16px;
  }
}

.wrapper {
  height: 100%;
  background-color: #28292F
}

.v-btn.v-btn--disabled.v-btn--has-bg {
  background-color: #2c2d34 !important;
  color: #75757542 !important;
}
</style>