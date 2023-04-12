const p1 = new Promise((resolve,reject)=>{
    setTimeout(() => resolve(1),4100)
    setTimeout(() => reject(11),1000)
})
const p2 = new Promise((resolve,reject)=>{
    setTimeout(() => resolve(2),5100)
    setTimeout(() => reject(22),2100)
})
const p3 = new Promise((resolve,reject)=>{
    setTimeout(() => resolve(3),6100)
    setTimeout(() => reject(33),3100)
})

Promise.any([p1,p2,p3]).then(res=>console.log(res)).catch(err => console.log(err))


// 只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。
// 那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。
// 程序只有等 所有的promise状态全部确定后才 退出