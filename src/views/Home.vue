<template>
  <div class="home">
    <!-- 头部 -->
    <van-nav-bar title="首页">
      <van-icon name="search" slot="left" />
      <van-icon name="cart-o" slot="right" />
    </van-nav-bar>

    <!-- 轮播图 -->
    <div class="carousel">
      <van-swipe
        class="carousel-swipe"
        :autoplay="5000"
        indicator-color="white"
      >
        <van-swipe-item
          class="carousel-swipe__item"
          v-for="(item, index) in carouselItem"
          :key="index"
        >
          <img v-lazy="item.imgSrc" :alt="item.name" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      carouselItem: [
        {
          name: "img1",
          imgSrc: require("../assets/images/img1-1080x720.jpg")
        },
        {
          name: "img2",
          imgSrc: require("../assets/images/img2-1080x720.jpg")
        },
        {
          name: "img3",
          imgSrc: require("../assets/images/img3-1080x720.jpg")
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.home {
  padding: 16px;
}
.van-nav-bar {
  margin-left: -16px;
  margin-right: -16px;
  .van-icon {
    font-size: 16px;
  }
}

.carousel {
  margin-top: 8px;
  &-swipe {
    border-radius: 5px;

    &__item {
      img {
        width: 100%;
        height: 185px;
        background-size: contain;
      }
    }
  }
}
</style>
