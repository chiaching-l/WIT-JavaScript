/*********************************************************
           * JavaScript 非同步（Async）筆記
 *********************************************************/

/*
========================
Sync（同步）
========================
- 程式一行一行執行
- 前一行沒完成，下一行不能執行
- 會阻塞（blocking）
- 適合快速計算，不適合耗時工作
*/

console.log("Sync example start");
// 假設這裡是很慢的同步程式
console.log("Sync example end");

/*
========================
Async（非同步）
========================
- 不會等待結果
- 耗時工作交給背景處理
- 結果完成後再通知
- JavaScript 是單執行緒，透過 Event Loop 處理非同步
*/

/*
========================
setTimeout（非同步範例）
========================
- setTimeout 是非同步
- 會等指定時間後再執行 callback
- 不會阻塞主程式
*/

console.log("This will print first");

var a = "Zero";

setTimeout(() => {
  a = "One";
}, 1000);

console.log(a);

/*
輸出結果：
This will print first
Zero

原因：
- setTimeout 是非同步
- console.log(a) 先執行
- 1 秒後才執行 a = "One"
*/

/*
========================
Promise（承諾物件）
========================
- 用來取得非同步操作的結果
- 當結果「現在還拿不到」時使用
*/

/*
Promise 的三種狀態（States）：
1. pending   - 等待中（結果尚未完成）
2. resolved  - 成功完成（fulfilled）
3. rejected  - 失敗（error）

狀態一旦改變就不會再改
*/

/*
Promise 的概念屬性：
- state  ：狀態（pending / resolved / rejected）
- result ：結果（成功的值或錯誤）
*/

/*
========================
Promise 基本寫法
========================
*/

const myPromise = new Promise((resolve, reject) => {
  // 模擬非同步操作
  setTimeout(() => {
    resolve("Success");
    // reject("Error");
  }, 1000);
});

/*
取得 Promise 結果
*/

myPromise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });

/*
========================
async / await
========================
- Promise 的語法糖
- 讓非同步程式看起來像同步
- async 函式一定回傳 Promise
*/

async function getData() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

/*
========================
重點總結
========================
- Sync：會等、會卡住
- Async：不等、不阻塞
- setTimeout 是非同步
- Promise 用來處理非同步結果
- async / await + try / catch
*/

console.log(`1. ${new Date().getSeconds()}`);
setTimeout(()=>{
    console.log(`2. ${new Date().getSeconds()}`);
}, 10)
console.log(`3. ${new Date().getSeconds()}`);
console.log(`4. ${new Date().getSeconds()}`);
console.log(`5. ${new Date().getSeconds()}`);
setTimeout(()=>{
    console.log(`6. ${new Date().getSeconds()}`);
}, 0)
console.log(`7. ${new Date().getSeconds()}`);
console.log(`8. ${new Date().getSeconds()}`);
console.log(`9. ${new Date().getSeconds()}`);
console.log(`10. ${new Date().getSeconds()}`);

