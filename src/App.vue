<template>
  <div id="app">
    <Header></Header>
    <!-- 路由组件出口 -->
    <router-view></router-view>
    <!--在 Home Search 显示 在登录注册是隐藏的  -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
  

</style>
