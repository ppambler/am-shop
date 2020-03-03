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
            >注册</van-button
          >
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      registerUsername: "",
      registerPassword: "",
      loginUsername: "",
      loginPassword: ""
    };
  },
  methods: {
    registerHandler() {},
    loginHandler() {}
  }
};
</script>

<style lang="scss" scoped>
.profile {
}
</style>
