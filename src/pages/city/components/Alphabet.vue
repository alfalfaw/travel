<template>
  <ul class="list">
    <li class="item" v-for="(item, key) of cities" :key="key">{{ key }}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: {
      type: Object
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
