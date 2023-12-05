<template>
  <div class="image-detail" v-if="data">
    <div class="image-detail__view">
      <img :src="data.image" />
    </div>
    sss
    <div class="image-detail__slider">
      <MyPrefixCarousel>
        <MyPrefixCarousel
          :items-to-show="1"
          :height="500"
          :loop="true"
          :autoplay="3000"
          :animationSpeed="10000"
          :wrap-around="true"
          :transition="0"
        >
          <MyPrefixSlide v-for="(tab, index) in 10" :key="index">
            <div>{{ index }}</div>
          </MyPrefixSlide>
        </MyPrefixCarousel>
      </MyPrefixCarousel>
    </div>
  </div>
</template>

<script lang="ts">
export default defineNuxtComponent({
  props: {
    data: {
      type: Object || null,
      required: true,
    },
  },
  setup() {},
});
</script>

<stlye lang="scss" scoped>
.image-detail {
  justify-content: center;
  justify-items: center;
  justify-self: center;
  text-align: center;

  &__view {
    text-align: center;
  }
}
</stlye>
