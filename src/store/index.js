import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    city: '北京'
  },
  // actions调用mutation改变数据
  actions: {
    changeCity(ctx, city) {
      // 调用mutations中的方法
      ctx.commit('changeCity', city)
    }
  },
  mutations: {
    changeCity(state, city) {
      state.city = city
    }
  }
})
