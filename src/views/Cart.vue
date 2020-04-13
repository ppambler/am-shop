<template>
  <div>
    <van-nav-bar title="购物车"></van-nav-bar>
    <div class="card">
      <van-card
        v-for="(item, index) in productList"
        :key="index"
        :price="item.price"
        :desc="item.company"
        :title="item.name"
        :thumb="item.img"
        :num="purchasesNum"
      >
        <div slot="footer">
          <van-button size="mini" @click="plusOne(item._id)">+1</van-button>
          <van-button size="mini" @click="subOne(item._id)">-1</van-button>
          <van-button size="mini" @click="delCart(item._id, index)"
            >删除</van-button
          >
        </div>
      </van-card>
    </div>
    <van-submit-bar
      class="submit-bar"
      :price="totalPrice"
      button-text="提交订单"
      @submit="onSubmit"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
import url from "@/service.config.js";
import { debounce } from "@/utils/helper.js";
export default {
  name: "Cart",
  data() {
    return {
      productList: [],
      purchasesNum: 1
    };
  },
  computed: {
    ...mapState(["userInfo"]),
    totalPrice() {
      return (
        this.productList.reduce((sum, elem) => {
          sum += elem.price;
          return sum;
        }, 0) *
        10 *
        10
      );
    }
  },
  created() {
    // 验证用户是否登录
    if (JSON.stringify(this.userInfo) === "{}") {
      this.$toast.fail("请先登录");
      setTimeout(() => {
        this.$router.push("/profile");
      }, 1000);
    } else {
      console.log(this.userInfo);
      axios({
        url: url.getCart,
        method: "get",
        params: {
          userId: this.userInfo._id
        }
      })
        .then(res => {
          for (let item of res.data) {
            this.productList.push(item.productId);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  methods: {
    addCart(userId, productId, purchasesNum) {
      axios({
        url: url.addCart,
        method: "post",
        data: {
          userId: userId,
          productId: productId,
          purchasesNum: purchasesNum
        }
      })
        .then(() => {})
        .catch(e => {
          console.log(e);
        });
    },
    onSubmit() {
      this.$toast.success("进入付款页面");
    },
    plusOne(productId) {
      if (this.purchasesNum < 10) {
        this.purchasesNum += 1;
        debounce(
          this.addCart(this.userInfo._id, productId, this.purchasesNum),
          1000
        );
      } else {
        this.$toast.success("最多购买10件");
      }
    },
    subOne(productId) {
      if (this.purchasesNum == 1) {
        this.purchasesNum = 1;
      } else {
        this.purchasesNum -= 1;
      }
      debounce(
        this.addCart(this.userInfo._id, productId, this.purchasesNum),
        100
      );
    },
    delCart(id, index) {
      // 删除数据库中的数据(同学自己完成)，如果删除成功，进入回调函数，在回调函数中，如下代码
      this.productList.splice(index, 1);
      console.log(id, index);
      axios({
        url: url.delCart,
        method: "post",
        params: {
          userId: this.userInfo._id,
          productId: id
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.submit-bar {
  margin-bottom: 50px;
}
.card {
  margin-bottom: 100px;
}
</style>
