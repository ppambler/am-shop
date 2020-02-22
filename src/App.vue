<template>
  <div id="app">
    <ul class="footer-bar">
      <li class="footer-bar__item">首页</li>
      <li class="footer-bar__item">分类</li>
      <li class="footer-bar__item">购物车</li>
      <li class="footer-bar__item">我的</li>
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
