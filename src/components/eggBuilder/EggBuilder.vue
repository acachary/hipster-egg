<template>
  <v-container
    fluid>
    <v-layout
      row
      align-center
      justify-center
      fill-height
      id="egg_builder_title_section"
      class="egg-builder-title-section"
    >
      <h1>Build Hipster-Egg</h1>
    </v-layout>
    <div
      id="egg_builder_section"
      class="egg-builder-section"
    >
      <v-layout
        row
        align-center
        justify-center
        fill-height
        id="egg_body_section"
        class="egg-body-section"
      >
        <v-btn
          flat
          icon
          id="egg-body-left-btn"
          class="slider-button"
        >
          <v-icon>keyboard_arrow_left</v-icon>
        </v-btn>
        <img
          src="@/assets/eggParts/egg_3.svg"
          alt="egg body"
          id="egg_body_img"
          class="egg-body-img"
        >
        <v-btn
          flat
          icon
          id="egg-body-right-btn"
          class="slider-button"
        >
          <v-icon>keyboard_arrow_right</v-icon>
        </v-btn>
      </v-layout>
      <v-layout
        row
        align-center
        justify-center
        fill-height
        id="egg_clothes_section"
        class="egg-clothes-section"
      >
        <v-btn
          flat
          icon
          id="egg-clothes-left-btn"
          class="slider-button"
        >
          <v-icon>keyboard_arrow_left</v-icon>
        </v-btn>
        <img
          src="@/assets/eggParts/clothes_3.svg"
          alt="egg clothes"
          id="egg_clothes_img"
          class="egg-clothes-img"
        >
        <v-btn
          flat
          icon
          id="egg-clothes-right-btn"
          class="slider-button"
        >
          <v-icon>keyboard_arrow_right</v-icon>
        </v-btn>
      </v-layout>
      <v-layout
        row
        align-center
        justify-center
        fill-height
        id="egg_shoes_section"
        class="egg-shoes-section"
      >
        <v-btn
          flat
          icon
          id="egg-shoes-left-btn"
          class="slider-button"
        >
          <v-icon>keyboard_arrow_left</v-icon>
        </v-btn>
        <img
          src="@/assets/eggParts/shoes_3.svg"
          alt="egg shoes"
          id="egg_shoes_img"
          class="egg-shoes-img"
        >
        <v-btn
          flat
          icon
          id="egg-shoes-right-btn"
          class="slider-button"
        >
          <v-icon>keyboard_arrow_right</v-icon>
        </v-btn>
      </v-layout>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'EggBuilder',
  components: {},
};
</script>

<style>
.egg-builder-title-section {
  height: 200px;
}
.egg-builder-section {
  position: relative;
  height: 100%;
}
.egg-clothes-section {
  position: absolute;
  top: 40%;
  bottom: 0;
  left: 0;
  right: 0;
}
.egg-shoes-section {
  position: absolute;
  top: 77%;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.egg-body-img {
  width: 20%;
}
.egg-clothes-img {
  width: 18%;
  margin-left: 34px;
  z-index: 10;
}
.egg-shoes-img {
  width: 14%;
  z-index: 9;
}
.slider-button {
  z-index:11;
}
</style>
