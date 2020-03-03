const Koa = require("koa");

const app = new Koa();

const { connect } = require("./init.js");
connect();

app.use(async ctx => {
  ctx.body = "Hello";
});

app.listen(3000, () => {
  console.log("start shop server", "localhost:3000");
});
