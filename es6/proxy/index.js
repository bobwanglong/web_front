
var person={name:"bob"}
var proxy = new Proxy(person,{
    get: function(target,propKey){
        if (propKey in target){
            return target[propKey]
        }else{
            throw new ReferenceError("Prop name \""+propKey+"\" does not exist.")
        }
    },
    set: (obj,prop,value,p)=>{
        if (prop ==="age"){
            if (!Number.isInteger(value)){
                throw new TypeError("the age is not an int")
            }
            if (value >20){
                throw new RangeError('the age seems too old')
            }
            // 满足条件。保存值
            obj[prop]=value
            console.log(p)
        }
    }
}
)

const {log} = console

log(proxy.name)
person.age = 10
log(person)
proxy.age = 10
// log(proxy)
