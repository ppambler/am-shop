// async返回的是Promise对象
async function timeout() {
  return "1";
}
console.log(5);
console.log(timeout()); // Promise { '1' }
console.log("2");

// 获取Promise的返回值 -> 用then
// 6 -> 1
timeout().then(res => {
  console.log(res);
});
console.log("6");

// 想让1先走，然后再走6,1 -> 6
// 用了promise，就得手动resolve一下
// 1 -> 2
function timeout() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(1);
      resolve();
    }, 2000);
  });
}

async function fn() {
  await timeout();
  console.log(2);
}

fn();
