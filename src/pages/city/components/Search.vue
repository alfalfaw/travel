<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
    <!-- keyword有值时显示 -->
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="serach-item" v-for="(item, index) of list" :key="index">{{ item.name }}</li>
        <!-- 没有查询结果时显示 -->
        <li class="serach-item" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: {
      type: Object
    }
  },
  data() {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData() {
      return !this.list.length
    }
  },
  watch: {
    keyword(newVal, oldVal) {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      // 关键字为空，关闭搜索结果页
      if (!newVal) {
        this.list = []
        return
      }
      // 监听关键字变化，显示查询
      const result = []
      for (let i in this.cities) {
        this.cities[i].forEach(value => {
          if (value.spell.indexOf(newVal) > -1 || value.name.indexOf(newVal) > -1) {
            result.push(value)
          }
        })
      }
      this.list = result

      // this.timer = setTimeout(() => {
      //   const result = []
      //   for (let i in this.cities) {
      //     this.cities[i].forEach(value => {
      //       if (value.spell.indexOf(newVal) > -1 || value.name.indexOf(newVal) > -1) {
      //         result.push(value)
      //       }
      //     })
      //   }
      //   this.list = result
      // }, 100)
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.search)
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/variables';
.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: $bgColor;
  .search-input {
    box-sizing: border-box;

    padding: 0 0.1rem;
    width: 100%;
    height: 0.62rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
  }
}
.search-content {
  z-index: 1;
  overflow: hidden;

  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;
  .serach-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    color: #666;
    background: #fff;
    border-bottom: 1px solid #cfcfcf;
  }
}
</style>
