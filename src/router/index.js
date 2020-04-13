import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Cart from "../views/Cart.vue";
import Profile from "../views/Profile.vue";
import Ajax from "../views/Ajax.vue";
import Detail from "../views/Detail.vue";
import FooterBar from "../components/FooterBar.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    // component: Home
    components: {
      default: Home,
      "footer-bar": FooterBar
    },
    meta: {
      keepAlive: true
    }
  },
  {
    path: "/category",
    name: "Category",
    components: {
      default: () => import("../views/Category.vue"),
      "footer-bar": FooterBar
    },
    meta: {
      keepAlive: true
    }
  },
  {
    path: "/cart",
    name: "Cart",
    // component: Cart
    components: {
      default: Cart,
      "footer-bar": FooterBar
    }
  },
  {
    path: "/profile",
    name: "Profile",
    // component: Profile
    components: {
      default: Profile,
      "footer-bar": FooterBar
    }
  },
  {
    path: "/ajax",
    name: "Ajax",
    component: Ajax
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: Detail
  }
];

const router = new VueRouter({
  routes
});

export default router;
