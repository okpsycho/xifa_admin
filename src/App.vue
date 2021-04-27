<template>
  <div id="app">
    <tabBar></tabBar>
    <router-view class="router-view"/>
  </div>
</template>

<script>
import tabBar from './components/tabbar'
import storage from 'good-storage'
export default {
  name: 'App',
  data() {
    return {
      
    };
  },
  components: {
    tabBar
  },
  created() {
    if(!storage.get('user_token')){
      this.$router.push({
        path: '/login'
      })
    }
  }
}
</script>

<style>
.router-view{
  margin-left: 200px;
  box-sizing: border-box;
}
</style>
