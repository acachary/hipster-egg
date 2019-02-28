<template>
  <v-app :dark=isDark>
    <div id="app">
      <EggBuilder />
    </div>
  </v-app>
</template>

<script>
// import Home from '@/views/Home.vue';
import EggBuilder from '@/components/eggBuilder/EggBuilder.vue';

export default {
  components: {
    // Home,
    EggBuilder,
  },
  data: () => ({
    isDark: false,
  }),
};
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
