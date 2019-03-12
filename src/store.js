import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isUp:false,
    uuid:'',
    songList:[],
    sing:''

  },
  mutations: {
    changeIsUp(){
      this.state.isUp = !this.state.isUp
    },
    getUid(state,id){
      this.state.uuid = id
    },
    songUpdate(a,b){
      this.state.songList.push(b);
      this.state.sing = b
    }
  },
  actions: {

  }
})
