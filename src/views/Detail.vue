<template>
  <div class="detail-wrapper">
    <van-nav-bar
      title="商品详情"
      left-text="返回"
      @click-left="$router.go(-1)"
    ></van-nav-bar>
    <img :src="detail.img" alt class="detail-img" />
    <div class="detail">
      <p class="detail-name">{{ detail.name }}</p>
      <p class="detail-price">￥{{ detail.price }}</p>
      <p>公司：{{ detail.company }}</p>
      <p>产地：{{ detail.city }}</p>
    </div>
    <div class="toolbar">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="cart-o" text="购物车" @click="jumpCart" />
        <van-goods-action-button
          type="warning"
          text="加入购物车"
          @click="addCart"
        />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/service.config.js";
import { mapState } from "vuex";
export default {
  name: "Detail",
  data() {
    return {
      detail: {},
      purchasesNum: 1
    };
  },
  created() {
    axios({
      url: url.getDetail,
      method: "get",
      params: {
        id: this.$route.params.id
      }
    })
      .then(res => {
        this.detail = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    jumpCart() {
      this.$router.push("/cart");
    },
    addCart() {
      // 检查用户是否登录  前端vuex保存登录状态
      // 如果后端保存登录状态 koa-session  redis
      if (JSON.stringify(this.userInfo) === "{}") {
        this.$toast.fail("请先登录");
        setTimeout(() => {
          this.$router.push("/profile");
        }, 1000);
      } else {
        // 插入购物车
        axios({
          url: url.addCart,
          method: "post",
          data: {
            productId: this.detail._id,
            userId: this.userInfo._id,
            purchasesNum: this.purchasesNum
          }
        })
          .then(res => {
            // console.log(res);
            if (res.data.code == 200) {
              this.$toast.success(res.data.message);
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.detail-wrapper {
  font-size: 16px;
  padding: 0 20px;
}
.van-nav-bar__left {
  left: 0;
}
.detail {
  margin-top: 10px;
  &-img {
    width: 100%;
    height: 250px;
    border-radius: 5px;
  }
  &-name {
    color: #333;
    font-weight: bold;
  }
  &-price {
    color: #ff5937;
    font-size: 20px;
  }
}
</style>
