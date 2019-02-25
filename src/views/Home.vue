<template>
  <v-container
    fluid>
    <v-layout
      align-center
      justify-center
      column
      fill-height
      id="home_page_container"
    >
      <img
        src="@/assets/easter_hipster.svg"
        alt=""
        id="hipster_egg_img"
        class="home-img"
      >
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {},
};
</script>

<style lang="scss">
.home-img{
  width: 70%;
}
</style>
