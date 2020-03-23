<template>
  <div class="container" @click.self.prevent="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, index) in imgs" :key="index"><img :src="item" class="swiper-img" alt="" /> </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  props: {
    imgs: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observeParents: true,
        observer: true,

        loop: true

        // Some Swiper option/callback...
      }
    }
  },
  methods: {
    handleGalleryClick() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.container >>> .swiper-container {
  overflow: inherit;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 99;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #000;
  .wrapper {
    width: 100%;
    height: 0;
    // overflow: hidden;
    background: #fff;
    padding-bottom: 100%;
    img {
      width: 100%;
    }
    .swiper-pagination {
      color: #fff;
      bottom: -1rem;
    }
  }
}
</style>
