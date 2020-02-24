module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        "Android 4.1",
        "iOS 7.1",
        "Chrome > 31",
        "ff > 31",
        "ie >= 8"
      ]
    },
    "postcss-pxtorem": {
      rootValue: 37.5,
      propList: ["*"],
      // 该项仅在使用 Circle 组件时需要
      // 原因参见 https://github.com/youzan/vant/issues/1948
      selectorBlackList: ["van-circle__layer"]
    }
  }
};
