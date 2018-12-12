import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import fastClick from 'fastclick'// 连接fastclick库解决三百毫秒延迟事件
import 'babel-polyfill'
Vue.config.productionTip = false
fastClick.attach(document.body)// 将fastclick应用到整个body上
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
