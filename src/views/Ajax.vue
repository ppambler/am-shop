<template>
  <div class="ajax">
    <van-button type="primary" @click="getData">获取数据</van-button>
    <van-button type="danger" @click="clearData">清空数据</van-button>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        {{ index + 1 }}: {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Ajax",
  data() {
    return {
      list: []
    };
  },
  methods: {
    clearData() {
      this.list = [];
    },
    ajax() {
      // ajax原理
      let movieUrl = "https://bird.ioliu.cn/netease/playlist?id=4862798971";
      // 1、创建XMLHttpRequest对象
      let xmlhttp;
      if (window.XMLHttpRequest) {
        //使用与高级浏览器(IE7 FireFox，Chrome,Opera,Safari 浏览器浏览代码)
        xmlhttp = new XMLHttpRequest();
      } else {
        console.log("hi");
        // 我在Chrome里边浏览，但这行代码没有走也会报错！
        // //使用与ie5 ie6浏览器
        // xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      }
      // 2、发送请求
      xmlhttp.open("GET", movieUrl, true);
      xmlhttp.send();

      // 3、服务器端响应
      xmlhttp.addEventListener("readystatechange", () => {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          let obj = JSON.parse(xmlhttp.responseText);
          console.log(obj);
          this.list = obj.playlist.tracks;
        }
      });
    },
    getData() {
      this.ajax();
    }
  }
};
</script>

<style scoped>
.ajax {
  font-size: 24px;
}
</style>
