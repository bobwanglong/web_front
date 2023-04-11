
var obj ={}
var loggedObj = new Proxy(obj,{
    get: (target,name)=>{
        console.log("get",target,name)
        return Reflect.get(target,name)
    },
    deleteProperty(target,name){
        console.log('delete'+name)
        return Reflect.deleteProperty(target,name)
    },
    has(target,name){
        console.log('has'+name)
        return Reflect.has(target,name)
    }
})

loggedObj.name = "bob"

Reflect.has(loggedObj,"name")
// console.log("name" in loggedObj)

// 旧写法
// delete loggedObj.name
// 新写法
// Reflect.deleteProperty(loggedObj,"name")

// get
Reflect.get(loggedObj,"name")
