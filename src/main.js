import Vue from 'vue'
import App from './App.vue'
//三级联动的组件 注册全局组件
import TypeNav from '@/components/TypeNav'

//引入仓库
import store from '@/store'
//第一参数 全局组件名字 第二参数 哪一个组件
Vue.component(TypeNav.name,TypeNav)

Vue.config.productionTip = false
//引入路由
import router from '@/router'
new Vue({
  render: h => h(App),
  //注册路由
  router,
  //注册仓库
  store
}).$mount('#app')
