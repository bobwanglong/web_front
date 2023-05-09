手动实现 promise

```javascript
// 定义Promise的三种状态
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

// 定义Promise类
class MyPromise {
  // 构造函数接受一个执行器函数
  constructor(executor) {
    // 初始化状态为pending
    this.status = PENDING;
    // 初始化成功的值为undefined
    this.value = undefined;
    // 初始化失败的原因为undefined
    this.reason = undefined;
    // 初始化成功的回调函数数组
    this.onFulfilledCallbacks = [];
    // 初始化失败的回调函数数组
    this.onRejectedCallbacks = [];

    // 定义resolve函数
    const resolve = (value) => {
      // 只有当状态为pending时才可以改变状态
      if (this.status === PENDING) {
        // 将状态改为fulfilled
        this.status = FULFILLED;
        // 保存成功的值
        this.value = value;
        // 执行所有成功的回调函数
        this.onFulfilledCallbacks.forEach((fn) => fn());
      }
    };

    // 定义reject函数
    const reject = (reason) => {
      // 只有当状态为pending时才可以改变状态
      if (this.status === PENDING) {
        // 将状态改为rejected
        this.status = REJECTED;
        // 保存失败的原因
        this.reason = reason;
        // 执行所有失败的回调函数
        this.onRejectedCallbacks.forEach((fn) => fn());
      }
    };

    // 执行执行器函数，并传入resolve和reject函数
    try {
      executor(resolve, reject);
    } catch (error) {
      // 如果执行器函数抛出错误，直接调用reject函数
      reject(error);
    }
  }

  // 定义then方法，接受两个可选的回调函数
  then(onFulfilled, onRejected) {
    // 如果onFulfilled不是函数，就用一个默认函数替代，返回成功的值
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    // 如果onRejected不是函数，就用一个默认函数替代，抛出失败的原因
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };

    // 返回一个新的Promise对象，以实现链式调用
    return new MyPromise((resolve, reject) => {
      // 定义一个执行成功回调函数的辅助函数
      const handleFulfilled = () => {
        // 使用setTimeout模拟异步操作，保证then方法是异步执行的
        setTimeout(() => {
          try {
            // 获取成功回调函数的返回值
            const result = onFulfilled(this.value);
            // 如果返回值是一个Promise对象，就调用它的then方法，将当前Promise对象的resolve和reject传入
            if (result instanceof MyPromise) {
              result.then(resolve, reject);
            } else {
              // 否则，直接用返回值来resolve当前Promise对象
              resolve(result);
            }
          } catch (error) {
            // 如果成功回调函数抛出错误，直接用错误来reject当前Promise对象
            reject(error);
          }
        }, 0);
      };

      // 定义一个执行失败回调函数的辅助函数
      const handleRejected = () => {
        // 使用setTimeout模拟异步操作，保证then方法是异步执行的
        setTimeout(() => {
          try {
            // 获取失败回调函数的返回值
            const result = onRejected(this.reason);
            // 如果返回值是一个Promise对象，就调用它的then方法，将当前Promise对象的resolve和reject传入
            if (result instanceof MyPromise) {
              result.then(resolve, reject);
            } else {
              // 否则，直接用返回值来resolve当前Promise对象（注意这
```
