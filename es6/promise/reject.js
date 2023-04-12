// promise.reject() 方法返回一个新的promise实例，该实例的状态是reject
// 

const p = Promise.reject("出错了")
p.then(null,function(s){
    console.log(s) // out: "出错了"
}) 

const thenable = {
    then(resolve,reject){
        reject("err...")
    }
}
// catch 方法的参数不是reject抛出的“err...”的字符，而是thenable这个对象
Promise.reject(thenable).catch(e=>{
    console.log(e===thenable) // true  
    console.log(e) // true  

})
