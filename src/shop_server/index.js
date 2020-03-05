const Koa = require("koa");

const app = new Koa();

// 解决跨域问题
const cors = require("koa2-cors");
app.use(
  cors({
    origin: ["http://localhost:8080"],
    credentials: true
  })
);

// 加载路由
const Router = require("koa-router");
let user = require("./controller/user.js");

let router = new Router();

// 返回Router，类似于缓存一个路由到router实例里边
router.use("/user", user.routes());

// router.routes()，返回中间件函数，注册所有路由
app.use(router.routes());
app.use(router.allowedMethods());

const { connect, initSchemas } = require("./init.js");
(async () => {
  await connect();
  initSchemas();
})();

app.use(async ctx => {
  ctx.body = "Hello";
});

app.listen(3000, () => {
  console.log("start shop server", "localhost:3000");
});
