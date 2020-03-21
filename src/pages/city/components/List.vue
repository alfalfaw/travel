<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-top-bottem">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">上海</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-top-bottem">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">上海</div>
          </div>
          <div class="button-wrapper">
            <div class="button">上海</div>
          </div>
          <div class="button-wrapper">
            <div class="button">上海</div>
          </div>
          <div class="button-wrapper">
            <div class="button">上海</div>
          </div>
          <div class="button-wrapper">
            <div class="button">上海</div>
          </div>
          <div class="button-wrapper">
            <div class="button">上海</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-top-bottem">A</div>
        <div class="item-list">
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/variables';
.border-top-bottem {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
}
.title {
  line-height: 0.54rem;
  background: #eee;
  padding-left: 0.2rem;
  color: #666;
  font-size: 0.26rem;
}
.button-list {
  overflow: hidden;
  padding: 0.1rem 0.6rem 0.1rem 0.1rem;
  .button-wrapper {
    float: left;
    width: 33.33%;

    .button {
      text-align: center;
      margin: 0.1rem;
      padding: 0.1rem 0;
      border: 0.02rem solid #ccc;
      border-radius: 0.06rem;
    }
  }
}
.item-list {
  .item {
    line-height: 0.76rem;
    padding-left: 0.2rem;
    border-bottom: 1px solid #ccc;
  }
}
</style>
