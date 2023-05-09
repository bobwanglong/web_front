
// 三个状态 常量
const PENDING = "pending"
const FULFILLED = "fulfilled"
const REJECTED = "rejected"
class MyPromiseDemo2 {
  constructor(executor) {
    // 初始状态
    this.status = PENDING
    // resolve值value
    this.value = undefined
    // reject reason
    this.reason = undefined
    // resolve queue
    this.resolveQueues = []
    // reject queue
    this.rejectQueues = []
    // executor 的两个函数参数
    let resolve = (value) => {
      // 只有状态是pending才继续执行
      if (this.status == PENDING) {
        this.value = value
        this.status = FULFILLED
        this.resolveQueues.forEach(rf => rf(this.value))
      }
    }

    // reject
    let reject = (reason) => {
      if (this.status == PENDING) {
        this.reason = reason
        this.status = REJECTED
        this.rejectQueues.forEach(rf => rf(this.reason))
      }
    }

    try {
      executor(resolve, reject)
    } catch (err) { reject(err) }
  }

  then (onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (value) = value
    onRejected = typeof onRejected === "function" ? onRejected : (reason) = reason
  }
}