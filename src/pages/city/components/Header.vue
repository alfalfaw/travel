<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont iconfanhui header-back"></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="scss" scoped>
@import '~styles/variables';
.header {
  overflow: hidden;
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
