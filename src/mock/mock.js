import Mock from "mockjs";
import data from "./data.json";

// mock数据方式一：
Mock.mock("http://www.tangxt.cn/getList", { data: data.list });

// mock数据方式二：简单的随机数

// {name: "春哥春哥", age: 34}
Mock.mock("http://www.tangxt.cn/getUser", {
  // 重复两次，值我们给的是字符串，所以这值的数据类型是String
  "name|2": "春哥",
  // 随机返回18到35
  "age|18-35": 22
});

// 正则
// {regexp1: "zZ6", regexp2: "323152"}
Mock.mock("http://www.tangxt.cn/regexp", {
  // 值是RegExp类型，返回3个随机字符组成的字符串
  regexp1: /[a-z][A-Z][0-9]/,
  // 5到10个数字字符的字符串
  regexp2: /\d{5,10}/
});

// 占位符，类似一个模板然后v-for生成很多条格式一致的数据
// 随机生成10到20条
Mock.mock("http://www.tangxt.cn/list", {
  "info|10-20": [
    {
      "index|+1": 1,
      name: "@first @last",
      id: "@integer(10000,99999)",
      date: "@datetime",
      img: '@image("200*200")',
      text: "@sentence(6, 22)"
    }
  ]
});

let Random = Mock.Random;
let productData = () => {
  let productList = []; // 存放农机信息的数组
  for (let i = 0; i < 10; i++) {
    let product = {
      name: Random.ctitle(5, 20),
      // 注意是 x 而不是*
      // 腾讯课堂的移动端页面的图片大小是这么大，我就写了这么大
      img: Random.dataImage("356x200", "农机" + Random.integer(1, 100)),
      price: Random.integer(1000, 10000),
      owner: Random.cname()
    };
    productList.push(product);
  }
  return productList;
};
Mock.mock("http://www.tangxt.cn/getVarietyItem", productData);
