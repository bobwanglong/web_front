
class Person {
    constructor(name,age){
        this.name=name
        this.age = age
    }
    do(params) {
        console.log("do function")    
    }
    /* get取值函数，set存值函数,拦截该属性的存取行为
  
    */
    get position(){
        return "position"
    }
    set position(val){
        console.log("setter"+val)
    }

   static toString(){ // 静态方法
      return `this.name+this.age`
    }
   
}

var p =  new Person("bob",12)
// p.toString() //报错 toString 是静态方法，直接用类名调用
Person.toString() 
// console.log(p.name,p.age)
console.log(p.toString())
p.position = 123
console.log(p.position)
// p.do()
// p.age()