//then方法支持异步

// 定义上个状态
const PENDING = "pending"
const FULFILLED = "fulfilled"
const REJECTED = "reject"

class MyPromiseDemo3 {
  constructor(executor) {
    this.status = PENDING
    this.value = undefined
    this.reason = undefined
    this.RejectQueue = []
    this.ResolveQueue = []

    if (typeof executor !== 'function') {
      throw new TypeError('Promise resolver undefined is not a function')
    }
    // executor 的两个执行函数 resolve,reject
    let resolve = value => {
      if (this.status == PENDING) {
        this.value = value
        this.status = FULFILLED
        this.ResolveQueue.forEach(rf => rf(this.value))
      }
    }

    let reject = (reason) => {
      if (this.status == PENDING) {
        this.reason = reason
        this.status = REJECTED
        this.RejectQueue.forEach(rf => rf(this.reason))
      }
    }

    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }

  then (onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : value => value
    onRejected = typeof onRejected === "function" ? onRejected : reason => { throw reason }

    const promise2 = new MyPromiseDemo3((resolve, reject) => {

      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value)
            resolvePromiseBac(promise2, x, resolve, reject)
          } catch (err) {
            reject(err)
          }
        })
      }

      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromiseBac(promise2, x, resolve, reject)
          } catch (err) {
            reject(err)
          }
        })
      }

      if (this.status === PENDING) {
        this.ResolveQueue.push((value) => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value)
              resolvePromiseBac(promise2, x, resolve, reject)
            } catch (err) {
              reject(err)
            }
          })
        })

        this.RejectQueue.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason)
              resolvePromiseBac(promise2, x, resolve, reject)
            } catch (err) {
              reject(err)
            }
          })
        })
      }
    })

    return promise2
  }
}

const resolvePromiseBac = (promise2, x, resolve, reject) => {
  if (x === promise2) {
    return reject(new TypeError("chaining cycle detected for promise"))
  }

  let called
  if (x != null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      let then = x.then
      if (typeof then === 'function') {
        then.call(x, y => {
          if (called) return
          called = true
          resolvePromiseBac(promise2, y, resolve, reject)
        }, err => {
          if (called) return
          called = true
          reject(err)
        })
      } else {
        // if(called)return;
        // called = true;
        resolve(x)
      }
    } catch (e) {
      if (called) return
      called = true
      reject(e)
    }
  } else {
    resolve(x)
  }
}
// const p1 = new Promise((resolved, rejected) => {
//   resolved('我 resolved 了')
// })

// p1.then((res) => {
//   console.log(res)
//   return new Promise((resolved, rejected) => {
//     setTimeout(() => {
//       resolved('then1')
//     }, 1000)
//   })
// })
//   .then((res) => {
//     console.log(res)
//     return new Promise((resolved, rejected) => {
//       setTimeout(() => {
//         resolved('then2')
//       }, 1000)
//     })
//   })
//   .then((res) => {
//     console.log(res)
//     return 'then3'
//   })

const p2 = new MyPromiseDemo3((resolved, rejected) => {
  resolved('我p2 resolved 了')
})

p2.then((res) => {
  console.log(res)
  return new MyPromiseDemo3((resolved, rejected) => {
    setTimeout(() => {
      resolved('p2 then1')
    }, 2000)
  })
})
  .then((res) => {
    console.log(res)
    return new MyPromiseDemo3((resolved, rejected) => {
      setTimeout(() => {
        resolved('p2 then2')
      }, 1000)
    })
  })
  .then((res) => {
    console.log(res)
    return 'p2 then3'
  })

