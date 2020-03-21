<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont iconfanhui back-icon"></span>
    </div>
    <div class="header-input"><span class="iconfont iconsousuo"></span>输入城市/景点/游玩主题</div>
    <div class="header-right">
      城市
      <span class="iconfont iconjiantouxia arrow-icon"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="scss" scoped>
@import '~styles/_variables';
.header {
  display: flex;
  background: $bgColor;
  color: #fff;
  line-height: 0.86rem;
  .header-left {
    width: 0.64rem;
    float: left;
    text-align: center;
    font-size: 0.4rem;
  }
  .header-input {
    flex: 1;
    background: #fff;
    border-radius: 0.1rem;
    height: 0.64rem;
    line-height: 0.64rem;
    color: #ccc;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
  }
  .header-right {
    width: 1.24rem;
    float: right;
    text-align: center;

    .arrow-icon {
      font-size: 0.24rem;
      margin-left: -0.04rem;
    }
  }
}
</style>
