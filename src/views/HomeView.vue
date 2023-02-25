<script>
/*主页*/
import {  NLayoutHeader, NLayout, NLayoutContent} from "naive-ui";
import Header from '../components/Header.vue'
import Nav from '../components/Nav.vue'
import { RouterView } from 'vue-router'

export default {
  components: {
     NLayoutHeader, NLayout, NLayoutContent, Header, Nav
  },
  setup(){
    return{
    }
  }
}
</script>
<template>
  <!--主页头部-->
<Header></Header>
<Nav></Nav>
  <n-layout>
    <n-layout-content>
      <!--子路由-->
      <RouterView></RouterView>
    </n-layout-content>
  </n-layout>
</template>

<style scoped>
</style>
