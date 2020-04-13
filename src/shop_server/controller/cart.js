const Koa = require("koa");
const Router = require("koa-router");
let router = new Router();
const mongoose = require("mongoose");

router.post("/addCart", async ctx => {
  const Cart = mongoose.model("Cart");
  console.log(ctx.request.body);
  let data = ctx.request.body;
  await Cart.findOne({ userId: data.userId, productId: data.productId })
    .exec()
    .then(async res => {
      console.log(res);
      if (res) {
        const cart = new Cart(data);
        cart
          .update(
            { userId: data.userId, productId: data.productId },
            {
              purchasesNum: data.purchasesNum
            }
          )
          .then(() => {
            ctx.body = {
              code: 200,
              message: "更新成功"
            };
          })
          .catch(err => {
            console.log(err);
            ctx.body = {
              code: 500,
              message: err
            };
          });
      } else {
        console.log("第一次");
        const cart = new Cart(data);
        cart
          .save()
          .then(() => {
            console.log("xxx");
            ctx.body = {
              code: 200,
              message: "添加成功"
            };
          })
          .catch(err => {
            console.log(err);
            ctx.body = {
              code: 500,
              message: err
            };
          });
      }
    });
});

router.get("/getCart", async ctx => {
  const Cart = mongoose.model("Cart");
  await Cart.find({ userId: ctx.query.userId })
    .populate("productId")
    .exec()
    .then(res => {
      console.log(res);
      ctx.body = res;
    });
});

router.post("/delCart", async ctx => {
  const Cart = mongoose.model("Cart");
  let data = ctx.request.body;
  await Cart.remove({ userId: data.userId, productId: data.productId }).then(
    data => {
      console.log(data);
      ctx.body = data;
    }
  );
});

module.exports = router;
