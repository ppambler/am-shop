import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Cart from "../views/Cart.vue";
import Profile from "../views/Profile.vue";
import Ajax from "../views/Ajax.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/category",
    name: "Category",
    component: () => import("../views/Category.vue")
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/ajax",
    name: "Ajax",
    component: Ajax
  }
];

const router = new VueRouter({
  routes
});

export default router;
