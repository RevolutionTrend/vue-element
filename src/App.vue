<template>
  <div id="app">
    <el-container>
      <el-aside></el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view/>
        </el-main>
        <el-footer height="30px">Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-main {
  height: calc(100% - 120px);
}
</style>

<script>
import Vue from "vue";
import { Container, Header, Aside, Main, Footer } from "element-ui";
// import SideBar from "./components/SideBar.vue";
// import routes from "./views/routes.js";
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);

// console.log(NavMenu);

export default {
  name: "app"
};
</script>

