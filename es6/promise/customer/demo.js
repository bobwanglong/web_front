// 没加入3个状态
// 不能链式调用
// 回调函数会覆盖

class MyPromiseDemo1 {

  // 构造函数
  constructor(executor) {
    // 成功resolve的值
    this.value = null
    // 失败reject的理由
    this.reason = null
    // 保存then的成功回调
    this.onFulfilled = null
    // 保存then的失败回调
    this.onRejected = null

    let resolve = value => {
      this.value = value
      this.onFulfilled && this.onFulfilled(this.value)
    }

    let reject = reason => {
      this.reason = reason
      this.onRejected && this.onRejected(this.reason)
    }

    // 执行中的异常捕获
    try {
      executor(resolve, reject)
    } catch (err) { reject(err) }

  }

  // 定义then函数
  // 并且将then中的参数复制给this.onFulfilled和this.onRejected
  then (onFulfilled, onRejected) {
    this.onFulfilled = onFulfilled
    this.onRejected = onRejected
  }

}

let p1 = new MyPromiseDemo1((resolve, reject) => {
  // let p2 = new Promise((resolve, reject) => {

  setTimeout(() => {
    reject("failed")
  }, 500)
  setTimeout(() => {
    resolve('成功了')
  }, 1000)



})

p1.then((data) => {
  console.log(data)
}, (err) => {
  console.log(err)
})