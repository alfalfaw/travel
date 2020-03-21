<template>
  <div class="wrapper">
    <swiper :options="swiperOptions" v-if="showSwiper">
      <swiper-slide v-for="item of swiperList" :key="item.id"><img class="swiper-img" :src="item.imgUrl" alt="" /> </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: true
        // Some Swiper option/callback...
      }
    }
  },
  computed: {
    showSwiper() {
      return this.swiperList.length
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff;
}
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  //padding 百分比相对于父元素的宽度，这里是屏幕宽度，31.25%是图片实际高度/图片宽度
  padding-bottom: 31.25%;
  .swiper-img {
    width: 100%;
  }
}
</style>
