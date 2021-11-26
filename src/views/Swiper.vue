<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide>
      <img src="../assets/123.jpg" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/123.jpg" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/123.jpg" alt="" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "swiper-example-default",
  title: "Default",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  max-width: 100%;
}
.swiper {
  padding-bottom: 0.2rem;
}
.swiper-pagination {
  bottom: -0.2rem;
}
</style>
