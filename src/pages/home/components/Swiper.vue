<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item of swiperList" :key="item.id"><img class="swiper-img" :src="item.imgUrl" alt="" /> </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
        // Some Swiper option/callback...
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: 'https://imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg'
        },
        {
          id: '0002',
          imgUrl: 'https://imgs.qunarzz.com/vc/24/36/10/3fc94d042ae62de380581d4c98.jpg_92.jpg'
        }
      ]
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
