//main.js

import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router/index'
import 'lib-flexible'

new Vue({
  el:'#app',
  store,//全局引入store
  router,
  template:'<App/>',
  components:{
    App
  }
})
