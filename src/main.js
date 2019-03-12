import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created(){
    var uuid = localStorage.getItem('mUuid')
    this.$store.commit('getUid',uuid)
  },
  render: h => h(App)
}).$mount('#app')

function autoRem(){
  var bw = (document.documentElement.clientWidth/7.5)+"px";    
  var htmlTag = document.getElementsByTagName("html")[0]; 
      htmlTag.style.fontSize=bw; 
}

autoRem()

window.addEventListener('resize',function(){
  autoRem()
})


