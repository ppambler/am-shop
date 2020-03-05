// function timeout() {
//   setTimeout(() => {
//     console.log(1);
//   }, 1000);
// }
// (async () => {
//   console.log(4);
//   await timeout();
//   console.log(2);
// })();

// console.log(3);

// 4321

function timeout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(1);
      resolve();
    }, 1000);
  });
}
(async () => {
  console.log(4);
  await timeout();
  console.log(2);
})();

console.log(3);

// 4312 -> 异步函数得返回一个Promise，如果你要使用await的话！不然，没有用！
