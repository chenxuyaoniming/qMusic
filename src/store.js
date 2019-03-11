import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isUp:false,
  },
  mutations: {
    changeIsUp(){
      this.state.isUp = !this.state.isUp
    }
  },
  actions: {

  }
})
