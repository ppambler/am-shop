const Koa = require("koa");
const app = new Koa();

app.use(async ctx => {
  if (ctx.url === "/tangxt") {
    ctx.cookies.set("name", "tangxt", {
      domain: "localhost",
      path: "/tangxt",
      // cookie的有效时长，ms
      maxAge: 24 * 60 * 60 * 1000,
      expires: new Date("2020-02-29"),
      httpOnly: false,
      // key重名了，后边的参数是否可重写
      overwrite: false
    });
    ctx.body = "cookie success";
  } else {
    ctx.body = "no cookie";
  }
});

app.listen(3000, () => {
  console.log("服务开启成功在3000端口");
});
