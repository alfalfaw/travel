<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-top-bottem">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper" @click="handleCityClick($store.state.city)">
            <div class="button">{{ this.$store.state.city }}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-top-bottem">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id" @click="handleCityClick(item.name)">
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-top-bottem">{{ key }}</div>
        <div class="item-list">
          <div class="item" v-for="innerItem of item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">
            {{ innerItem.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    cities: {
      type: Object
    },
    hotCities: {
      type: Array
    },
    letter: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleCityClick(city) {
      // 派发changeCity的Action
      this.$store.dispatch('changeCity', city)
      this.$router.push('/')
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  created() {},
  watch: {
    letter(newVal, oldVal) {
      if (newVal) {
        const element = this.$refs[newVal][0]
        this.scroll.scrollToElement(element)
      }
    }
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
  cursor: pointer;
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
