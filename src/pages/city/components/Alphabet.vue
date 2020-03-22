<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      @click="handleLetterClick"
      @touchstart.stop.prevent="handleTouchStart"
      @touchmove.stop.prevent="handleTouchMove"
      @touchend.stop.prevent="handleTouchEnd"
      :ref="item"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: {
      type: Object
    }
  },
  computed: {
    letters() {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated() {
    // update在获取数据后被执行
    // 获取'A'元素距离其父元素上边缘的距离
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick(e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart() {
      this.touchStatus = true
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }

        // e.touches[0].clientY表示鼠标指针距屏幕顶部的距离
        // 79为导航栏的高度
        const touchY = e.touches[0].clientY - 79

        // 鼠标经过字符下标
        const index = Math.floor((touchY - this.startY) / 20)
        if (index >= 0 && index < this.letters.length) {
          this.$emit('change', this.letters[index])
        }
        // 延迟16毫秒执行，如果16毫秒间事件再次发生，取消上一次事件处理
        // this.timer = setTimeout(() => {
        //   const touchY = e.touches[0].clientY - 79
        //   const index = Math.floor((touchY - this.startY) / 20)
        //   if (index >= 0 && index < this.letters.length) {
        //     this.$emit('change', this.letters[index])
        //   }
        // }, 16)
      }
    },
    handleTouchEnd() {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/variables';
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  align-items: center;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  .item {
    line-height: 0.4rem;
    color: $bgColor;
  }
}
</style>
