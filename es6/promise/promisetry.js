// 怎样使同步函数同步执行，异步函数异步执行

// 方法1: async
const f1 =()=>console.log("now");
(async ()=>f1())() // 立即执行的匿名函数，会立即执行里面的async函数，
// 因此如果f是同步的，就会得到同步结果，异步的话可以使用 then
// (async ()=>f1())().then(...).catch(...),
//async ()=>f1() 会吃掉f1()抛出的错误，需要用promise.catch的方法捕获
console.log("next");
// out：
// now next

// 方法2:
const f2= ()=>console.log("f2 now"); // f2是一个同步函数
(
    ()=>new Promise(
        resolve => resolve(f2()) 
    )
)(); // 匿名函数立即执行


console.log("f2 next")


