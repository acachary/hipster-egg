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
          @click="selectPreviousBody()"
        >
          <v-icon>keyboard_arrow_left</v-icon>
        </v-btn>
        <img
          :src="selectedEgg.body.src"
          alt="egg body"
          id="egg_body_img"
          class="egg-body-img"
        >
        <v-btn
          flat
          icon
          id="egg-body-right-btn"
          class="slider-button"
          @click="selectNextBody()"
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
          @click="selectPreviousClothes()"
        >
          <v-icon>keyboard_arrow_left</v-icon>
        </v-btn>
        <img
          :src="selectedEgg.clothes.src"
          alt="egg clothes"
          id="egg_clothes_img"
          class="egg-clothes-img"
        >
        <v-btn
          flat
          icon
          id="egg-clothes-right-btn"
          class="slider-button"
          @click="selectNextClothes()"
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
          @click="selectPreviousShoes()"
        >
          <v-icon>keyboard_arrow_left</v-icon>
        </v-btn>
        <img
          :src="selectedEgg.shoes.src"
          alt="egg shoes"
          id="egg_shoes_img"
          class="egg-shoes-img"
        >
        <v-btn
          flat
          icon
          id="egg-shoes-right-btn"
          class="slider-button"
          @click="selectNextShoes()"
        >
          <v-icon>keyboard_arrow_right</v-icon>
        </v-btn>
      </v-layout>
      <v-layout
        row
        align-center
        justify-center
        fill-height
        id="egg_name_section"
        class="egg-name-section"
      >
        <v-badge color="red">
          <span v-if="selectedEgg.body.onSale" slot="badge">Sale!</span>
          <h2>{{selectedEgg.body.title}}</h2>
        </v-badge>
      </v-layout>
    </div>
  </v-container>
</template>

<script>
import EggParts from '@/data/parts';

function getPreviousValidIndex(index, length) {
  const decreasedIndex = index - 1;
  return decreasedIndex < 0 ? length - 1 : decreasedIndex;
}

function getNextValidIndex(index, length) {
  const increasedIndex = index + 1;
  return increasedIndex > length - 1 ? 0 : increasedIndex;
}

export default {
  name: 'EggBuilder',
  components: {},
  data: () => ({
    EggParts,
    selectedBodyIndex: 0,
    selectedClothesIndex: 0,
    selectedShoesIndex: 0,
  }),
  methods: {
    selectPreviousBody() {
      this.selectedBodyIndex = getPreviousValidIndex(
        this.selectedBodyIndex,
        EggParts.body.length,
      );
    },
    selectNextBody() {
      this.selectedBodyIndex = getNextValidIndex(
        this.selectedBodyIndex,
        EggParts.body.length,
      );
    },
    selectPreviousClothes() {
      this.selectedClothesIndex = getPreviousValidIndex(
        this.selectedClothesIndex,
        EggParts.clothes.length,
      );
    },
    selectNextClothes() {
      this.selectedClothesIndex = getNextValidIndex(
        this.selectedClothesIndex,
        EggParts.clothes.length,
      );
    },
    selectPreviousShoes() {
      this.selectedShoesIndex = getPreviousValidIndex(
        this.selectedShoesIndex,
        EggParts.shoes.length,
      );
    },
    selectNextShoes() {
      this.selectedShoesIndex = getNextValidIndex(
        this.selectedShoesIndex,
        EggParts.shoes.length,
      );
    },
  },
  computed: {
    selectedEgg() {
      return {
        body: EggParts.body[this.selectedBodyIndex],
        clothes: EggParts.clothes[this.selectedClothesIndex],
        shoes: EggParts.shoes[this.selectedShoesIndex],
      };
    },
  },
};
</script>

<style>
.egg-builder-title-section {
  height: 150px;
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
.egg-name-section {
  position: absolute;
  height: 100px;
  top: 135%;
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
