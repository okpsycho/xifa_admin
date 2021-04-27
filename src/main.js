// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 统一网页元素渲染
import './assets/css/normalize.css'
// 引入element-ui
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(element)
// 引入全局过滤器
import * as filters from './plugin/filters'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
