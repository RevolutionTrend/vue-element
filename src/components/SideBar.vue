<template>
  <div id="SideBar">
    <el-menu unique-opened="true" router="true">
      <component
        v-for="item in routes"
        :key="item.path"
        :is="item.hasOwnProperty('children')?'el-submenu':'el-menu-item'"
      >
        <span>{{item.name}}</span>
      </component>
    </el-menu>
  </div>
</template>

<style>
#SideBar {
  width: 100%;
  height: 100%;
}
</style>


<script>
import Vue from "vue";
import { Menu, Submenu, MenuItem } from "element-ui";

import routes from "../views/routes.js";

Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);

export default {
  name: "SideBar",
  data() {
    return {
      routes: routes
    };
  }
};
</script>
