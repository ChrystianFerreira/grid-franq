<template>
  <v-app>
    <v-main>
      <Home />
    </v-main>
  </v-app>
</template>

<script>
import Home from './views/Home';

export default {
  name: 'App',
  components: {
    Home,
  },
};
</script>

<style scoped>
::v-deep .v-application {
  background: #28292F;
}
</style>
