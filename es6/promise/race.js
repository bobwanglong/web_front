const p1 = new Promise((resolve,reject)=>{
    setTimeout(resolve(1),100)
    setTimeout(reject(11),110)
})
const p2 = new Promise((resolve,reject)=>{
    setTimeout(resolve(2),100)
    setTimeout(reject(22),110)
})
const p3 = new Promise((resolve,reject)=>{
    setTimeout(resolve(3),100)
    setTimeout(reject(33),110)
})

const p = Promise.race([p1,p2,p3])

p.then(res=>console.log(res)).catch(err => console.log(err))
//只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。