<template>
  <div id="app">
    <router-view></router-view>
    <ul class="footer-bar">
      <li class="footer-bar__item">
        <router-link to="/">首页</router-link>
      </li>
      <li class="footer-bar__item">
        <router-link to="/category">分类</router-link>
      </li>
      <li class="footer-bar__item">
        <router-link to="/cart">购物车</router-link>
      </li>
      <li class="footer-bar__item">
        <router-link to="/profile">我的</router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.footer-bar {
  display: flex;
  background-color: #eee;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  &__item {
    // 分成4份
    flex-grow: 1;
    text-align: center;
  }
}
</style>
