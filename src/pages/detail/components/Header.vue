<template>
  <div>
    <router-link to="/" tag="div" class="header-abs" v-show="showAbs"
      ><span class="iconfont iconfanhui header-abs-icon"></span
    ></router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont iconfanhui header-back"></div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',

  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll() {
      // 滚动的距离
      const top = document.documentElement.scrollTop

      // 距离顶部60开始隐藏
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.showAbs = false
        this.opacityStyle = {
          opacity
        }
      } else {
        this.showAbs = true
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/variables';
.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  text-align: center;
  line-height: 0.8rem;
  border-radius: 0.4rem;
  background: rgba(0, 0, 0, 0.8);
  .header-abs-icon {
    color: #fff;
    font-size: 0.4rem;
  }
}
.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #fff;
  background: $bgColor;
  font-style: 0.32rem;
  .header-back {
    position: absolute;
    top: 0;
    width: 0.64rem;
    text-align: center;
    font-size: 0.4rem;
    color: #fff;
  }
}
</style>
