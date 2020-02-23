import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import "@/assets/css/reset.css";
import "@/assets/js/rem.js";

// 引入所有组件
// import Vant from "vant";
// import "vant/lib/index.css";

// Vue.use(Vant);

// 按需引入组件
import { Icon, Button } from "vant";
// 可链式注册组件
Vue.use(Icon).use(Button);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
