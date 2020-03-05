const Router = require("koa-router");
let router = new Router();
const mongoose = require("mongoose");

router.post("/registerUser", async ctx => {
  console.log("请求成功");
  ctx.body = "请求成功";
});

module.exports = router;
