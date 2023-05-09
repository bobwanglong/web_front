// 缺陷：不能异步执行
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
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (value) => value
    onRejected = typeof onRejected === "function" ? onRejected : (reason) => { throw (reason) }

    // if (this.status === PENDING) {
    //   this.resolveQueues.push(onFulfilled)
    //   this.rejectQueues.push(onRejected)
    // }

    // if (this.status === FULFILLED) {
    //   onFulfilled(this.value)
    // }

    // if (this.status === REJECTED) {
    //   onRejected(this.reason)
    // }
    // return this
    const promise2 = new MyPromiseDemo2((resolve, reject) => {
      // resolve
      if (this.status === FULFILLED) {
        let x = onFulfilled(this.value)
        resolve(x)
      }

      // reject
      if (this.status === REJECTED) {
        let x = onRejected(this.reason)
        reject(x) && reject
      }

      // pending
      if (this.status === PENDING) {
        this.resolveQueues.push((value) => {
          let x = onFulfilled(value)
          resolve(x)
        })

        this.rejectQueues.push((reason) => {
          let x = onRejected(reason)
          reject(x) && reject
        })
      }
    })
    return promise2
  }
}

// let p1 = new MyPromiseDemo2((resolve, reject) => {
//   // let p2 = new Promise((resolve, reject) => {

//   setTimeout(() => {
//     reject("failed")
//   }, 500)
//   setTimeout(() => {
//     resolve('成功了')
//   }, 3000)



// })

// p1.then((data) => {
//   console.log(data)
// }, (err) => {
//   console.log(err)
// })
const p1 = new MyPromiseDemo2((resolved, rejected) => {
  resolved('resolved')
})

p1.then((res) => {
  console.log(res)
  return 'then1'
})
  .then((res) => {
    console.log(res)
    return 'then2'
  })
  .then((res) => {
    console.log(res)
    return 'then3'
  })