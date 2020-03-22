<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        src="https://img1.qunarzz.com/vs_ceph_vs_tts/313147f7-677f-44bf-a091-6999b113e76e.jpg_r_640x420x95_ff0fb8f6.jpg"
        alt=""
      />
      <div class="banner-info">
        <div class="banner-title">产品编号805434166</div>
        <div class="banner-number"><span class="iconfont icontupian banner-icon"></span>39</div>
      </div>
    </div>
    <common-gallery :imgs="imgs" v-show="showGallery" @close="handleGalleryClose"></common-gallery>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallery
  },
  data() {
    return {
      showGallery: false,
      imgs: [
        'https://img1.qunarzz.com/vs_ceph_vs_tts/c8df6bb9-a800-4df9-a582-8ae162c6126c.jpg_r_1280x840x95_a8ac9649.jpg',
        'https://img1.qunarzz.com/vs_ceph_vs_tts/c8df6bb9-a800-4df9-a582-8ae162c6126c.jpg_r_1280x840x95_a8ac9649.jpg'
      ]
    }
  },
  methods: {
    handleBannerClick() {
      this.showGallery = true
    },
    handleGalleryClose() {
      this.showGallery = false
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  position: relative;
  .banner-img {
    width: 100%;
  }
  .banner-info {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    display: flex;
    justify-content: space-between;
    color: #fff;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
    .banner-title {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }
    .banner-number {
      padding: 0 0.3rem;
      border-radius: 0.2rem;
      margin-top: 0.14rem;
      height: 0.32rem;
      line-height: 0.32rem;
      margin-right: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;
      .banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>
