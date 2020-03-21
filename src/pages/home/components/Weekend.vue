<template>
  <div>
    <div class="title">
      周末去哪儿
    </div>
    <ul>
      <li class="item" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" alt="" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data() {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/313147f7-677f-44bf-a091-6999b113e76e.jpg_r_480x320x90_7355c6cf.jpg',
          title: '珠海一日游',
          desc: '珠海出发：澳门大三巴+银河酒店+运财水钻+妈祖阁+威尼斯人度假村纯玩一日游'
        },
        {
          id: '0002',
          imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/313147f7-677f-44bf-a091-6999b113e76e.jpg_r_480x320x90_7355c6cf.jpg',
          title: '珠海一日游',
          desc: '珠海出发：澳门大三巴+银河酒店+运财水钻+妈祖阁+威尼斯人度假村纯玩一日游'
        },
        {
          id: '0003',
          imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/313147f7-677f-44bf-a091-6999b113e76e.jpg_r_480x320x90_7355c6cf.jpg',
          title: '珠海一日游',
          desc: '珠海出发：澳门大三巴+银河酒店+运财水钻+妈祖阁+威尼斯人度假村纯玩一日游'
        },
        {
          id: '0004',
          imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/313147f7-677f-44bf-a091-6999b113e76e.jpg_r_480x320x90_7355c6cf.jpg',
          title: '珠海一日游',
          desc: '珠海出发：澳门大三巴+银河酒店+运财水钻+妈祖阁+威尼斯人度假村纯玩一日游'
        },
        {
          id: '0001',
          imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/313147f7-677f-44bf-a091-6999b113e76e.jpg_r_480x320x90_7355c6cf.jpg',
          title: '珠海一日游',
          desc: '珠海出发：澳门大三巴+银河酒店+运财水钻+妈祖阁+威尼斯人度假村纯玩一日游'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~styles/mixin';
.title {
  margin-top: 0.1rem;
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}
.item {
  .item-img-wrapper {
    overflow: hidden;
    height: 0;
    padding-bottom: 33.9%;
    img {
      width: 100%;
    }
  }
  .item-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;
    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      @include ellipsis;
    }
    .item-desc {
      line-height: 0.4rem;
      color: #ccc;
      @include ellipsis;
    }
  }
}
</style>
