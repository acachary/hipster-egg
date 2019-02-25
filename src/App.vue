<template>
  <v-app :dark=isDark>
    <div id="app">
      <router-view />
    </div>
  </v-app>
</template>

<script>
export default {
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
