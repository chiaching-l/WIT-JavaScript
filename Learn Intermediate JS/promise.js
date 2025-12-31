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

// console.log("Sync example start");
// // 假設這裡是很慢的同步程式
// console.log("Sync example end");

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

/*
console.log("This will print first");

var a = "Zero";

setTimeout(() => {
  a = "One";
}, 1000);

console.log(a);
*/

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

// const myPromise = new Promise((resolve, reject) => {
//   // 模擬非同步操作
//   setTimeout(() => {
//     resolve("Success");
//     // reject("Error");
//   }, 1000);
// });

/*
const myName = "John Snow"
const myPromise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    if (myName==="John Snow"){
      resolve("The King is in the north")
    }else{
      reject("Winter is coming")
    }
  })
},3000)

function print(result){
  console.log(result)
}

myPromise.then(value=>print(value)).catch(reason=>print(reason))
*/

/*
取得 Promise 結果
*/

// myPromise
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log(error);
//   });

/*
========================
async / await
========================
- Promise 的語法糖 - syntactic sugar for promise - doesn't add gunctionality -
  make it easy to write and read
- 讓非同步程式看起來像同步
  async and await allow us to write to write asynchronous similar to synchoronouse program

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

/*
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
*/


/*
shower takes 3 seconds, husband cooks takes 5 seconds
eat takes 2 seconds and getting dressed takes 1 second
total second = 3 + 5 + 2 + 1 = 11 seconds
let say that shower and cook breakfast runs parallel
total second = 5 + 2 + 1 = 8sec
console.log(`1. Wake up: ${new Date().getSeconds()}`);
setTimeout(function show(){
  console.log(`2. Shower: ${new Date().getSeconds()}`)
}, 3000);
setTimeout(function cook(){
  console.log(`3. Husband cooks breakfast: ${new Date().getSeconds()}`)
    setTimeout(function eat(){
    console.log(`4. Eat: ${new Date().getSeconds()}`)
        setTimeout(function eat(){
          console.log(`5. Get dressed: ${new Date().getSeconds()}`)
          }, 1000);
    }, 2000);
}, 5000)
*/


/*-----上面例子用promise-----
function promise_shower() {
  let shower = new Promise((resolve,reject)=>{
    setTimeout(function(){
      resolve(`2. shower: ${new Date().getSeconds()}`)
    }, 3000)
  });
  return shower
}

function promise_cooks() {
  let cooks = new Promise((resolve, reject)=>{
    setTimeout(function(){
      resolve(`3. Husband cooks: ${new Date().getSeconds()}`)
    }, 5000)
  });
  return cooks;
}

function promise_eat() {
  let eat = new Promise((resolve, reject)=>{
    setTimeout(function(){
      resolve(`4. Eat Breakfast: ${new Date().getSeconds()}`)
    }, 2000)
  });
  return eat;
}

function promise_dressed() {
  let dressed = new Promise((resolve, reject)=>{
    setTimeout(function(){
      resolve(`5. Get dressd: ${new Date().getSeconds()}`)
    }, 1000)
  });
  return dressed;
}
*/



/*---------用promise方法:----------
promise_shower().then(function(value){
  console.log(value)
}).catch((error)=>{
  console.log(error)
})

promise_cooks().then(function(value){
  console.log(value);
  return promise_eat();
}).then(function(value){
  console.log(value);
  return promise_dressed();
}).then(function(value){
  console.log(value);
}).catch((error)=>{
  console.log(error)
});
*/



/*------async and await方法:--------
async function shower(){
  const shower = await promise_shower();
  console.log(shower)
}

async function the_rest() {
  try{
    const cooks = await promise_cooks();
    console.log(cooks)
    const eat = await promise_eat();
    console.log(eat)
    const dressed = await promise_dressed();
    console.log(dressed)
  }catch(e){
    console.log(e)
  }
}


shower()
the_rest()
*/


/*
Task1: Transferring money:

Verify account balance
Deduct amount
Confirm transfer

Reject if balance is insufficient
Resolve if transfer succeeds
Log success or failure using .then() / .catch()
*/
let myBalance = 1000;
let amount = 50;
function transfer(balance, amount) { 
  return new Promise((resolve, reject)=>{
    if (amount <= 0) {
      reject("Transaction failed: amount must be greater than 0");
      return;
    }
    if (balance < amount) {
      reject("Transaction failed: insufficient balance");
      return;
    }
     const newBalance = balance - amount;
      resolve({
      message: `Transfer confirmed! Amount: ${amount}. Remaining balance: ${newBalance}`,
      newBalance
    });
  });
}
transfer(myBalance, amount)
  .then((result) => {
    console.log("SUCCESS:", result.message);
    myBalance = result.newBalance;
  })
  .catch((error) => {
    console.log("FAIL:", error);
  });

/*
Task2 You want to book movie tickets online. The steps take time:
Check seat availability
Reserve seat
Confirm payment


Create a Promise checkSeats(movie) that resolves if seats are available.
Chain reserveSeat() and confirmPayment() to simulate booking.
Use .catch() for errors like “Sold out” or “Payment failed.”
*/


