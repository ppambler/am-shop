import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import "@/assets/css/reset.css";
// import "@/assets/js/rem.js";

import "amfe-flexible/index.js";
import "@/mock/mock.js";

// 引入所有组件
// import Vant from "vant";
// import "vant/lib/index.css";

// Vue.use(Vant);

// 按需引入组件
import {
  Toast,
  CellGroup,
  Field,
  Tab,
  Tabs,
  Icon,
  Button,
  NavBar,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Lazyload
} from "vant";
// 可链式注册组件
Vue.use(Icon)
  .use(Toast)
  .use(CellGroup)
  .use(Field)
  .use(Button)
  .use(Tab)
  .use(Tabs)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Swipe)
  .use(SwipeItem)
  .use(Lazyload)
  .use(NavBar);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
