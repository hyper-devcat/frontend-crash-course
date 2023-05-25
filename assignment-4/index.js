// 1. 顯示一個訊息：使用 Promise，在延遲 1 秒後，在控制台打印出 "Hello, world!"。

function printWord() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log("Hello, world!"));
    }, 1000);
  });
}

printWord();

// 2. 延遲執行：使用 async/await，創建一個函數，該函數將延遲 3 秒後返回一個 Promise。然後使用 await 來等待 Promise 完成，並在控制台打印出 "Delay complete!"。

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function delayPrint() {
  await delay(3000);
  console.log("Delay complete!");
}

delayPrint();

// 3. 處理錯誤：創建一個 Promise，該 Promise resolve 或 reject。使用 async/await 在控制台打印出相應的訊息，如果 Promise 成功，則打印出 "Promise resolved!"，如果 Promise 失敗，則打印出 "Promise rejected!"。

function makeRequest(color) {
  return new Promise((resolve, reject) => {
    if (color === "yellow") {
      resolve("Promise resolved!");
    } else {
      reject("Promise rejected!");
    }
  });
}

async function guessColor(x) {
  try {
    const response = await makeRequest(x);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

guessColor("yellow");

// 4. 順序執行多個 Promise：創建三個 Promise：Promise A 在 2 秒後 resolve，Promise B 在 1 秒後resolve，Promise C 在 3 秒後resolve。使用 Promise 和 async/await，在它們依次解析完成後，在控制台打印出 "All promises resolved!"

function PromiseA(ms1) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms1);
  });
}

function PromiseB(ms2) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms2);
  });
}

function PromiseC(ms3) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms3);
  });
}

async function orderPrint() {
  await PromiseA(2000);
  console.log("PromiseA resolve");
  await PromiseB(1000);
  console.log("PromiseB resolve");
  await PromiseC(3000);
  console.log("PromiseC resolve");
  console.log("All promises resolved!");
}

orderPrint();
