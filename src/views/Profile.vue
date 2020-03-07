<template>
  <div class="profile">
    <van-tabs color="#07c160">
      <van-tab title="登录">
        <van-cell-group>
          <van-field
            label="用户名"
            required
            clearable
            v-model="loginUsername"
            placeholder="请输入用户名"
          />
          <van-field
            type="password"
            label="密码"
            required
            clearable
            v-model="loginPassword"
            placeholder="请输入密码"
          />
        </van-cell-group>
        <div>
          <van-button
            plain
            hairline
            @click="loginHandler"
            type="primary"
            size="large"
            :loading="isLoading"
            loading-type="spinner"
            :disabled="isDisabled"
            >登录</van-button
          >
        </div>
      </van-tab>
      <van-tab title="注册">
        <van-cell-group>
          <van-field
            label="用户名"
            required
            clearable
            v-model="registerUsername"
            placeholder="请输入用户名"
          />
          <van-field
            type="password"
            label="密码"
            required
            clearable
            v-model="registerPassword"
            placeholder="请输入密码"
          />
        </van-cell-group>
        <div>
          <van-button
            plain
            hairline
            @click="registerHandler"
            type="primary"
            size="large"
            :loading="isLoading"
            loading-type="spinner"
            :disabled="isDisabled"
            >注册</van-button
          >
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/service.config.js";
import { mapActions } from "vuex";

export default {
  name: "Profile",
  data() {
    return {
      isLoading: false,
      isDisabled: false,
      registerUsername: "",
      registerPassword: "",
      loginUsername: "",
      loginPassword: ""
    };
  },
  methods: {
    ...mapActions(["loginAction"]),
    registerHandler() {
      this.isClick("no");
      axios({
        url: url.registerUser,
        method: "post",
        data: {
          userName: this.registerUsername,
          password: this.registerPassword
        }
      })
        .then(res => {
          if (res.data.code == 200) {
            this.$toast.success("注册成功！");
            this.registerUsername = "";
            this.registerPassword = "";
          } else {
            this.$toast.fail(
              `${res.data.message.keyValue.userName}已存在，请换个名字重新注册！`
            );
          }
        })
        .catch(e => {
          console.log(e);
          this.$toast.fail("注册失败！");
        })
        .finally(() => {
          this.isClick("yes");
        });
    },
    loginHandler() {
      this.isClick("no");
      axios({
        url: url.loginUser,
        method: "post",
        data: {
          userName: this.loginUsername,
          password: this.loginPassword
        }
      })
        .then(res => {
          console.log(res);
          if (res.data.code == 200) {
            // 模拟网络延时
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
              }, 1000);
            })
              .then(() => {
                this.$toast.success("登录成功");
                // 保存登录转态
                this.loginAction(res.data.userInfo);
                this.$router.push("/");
              })
              .catch(err => {
                this.$toast.fail("保存登录状态失败");
                console.log(err);
              })
              .finally(() => {
                this.isClick("yes");
              });
          } else {
            this.isClick("yes");
            this.$toast.fail(`${res.data.message}`);
          }
        })
        .catch(err => {
          console.log(err);
          this.isClick("yes");
          this.$toast.fail("登录失败");
        });
    },
    isClick(x) {
      switch (x) {
        case "yes":
          this.isLoading = false;
          this.isDisabled = false;
          break;
        case "no":
          this.isLoading = true;
          this.isDisabled = true;
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.profile {
}
</style>
