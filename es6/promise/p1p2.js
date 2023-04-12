const p1 = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('fail')), 2200)
    setTimeout(() => resolve(123), 3000)
})
const p2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(p1), 2000)
    // setTimeout(()=>reject(p1),1100)
    setTimeout(() => reject(new Error('p2 fail')), 1000)

})
// then方法中有两个回调函数，第一个是resolve状态，第二个是reject状态
p2.then(res => { console.log(res); return res }, err => { console.log(err); return err })
p1.then(res => console.log(res), err => console.log(err)) // p1 初始化后的对象要记得处理
// try{
    // p2.then(res=>{console.log(res); return res;}).catch(err => {console.log(err)
    //     return err})
// }catch(e){
    // console.log(e);
// }
// p2.then(res=>console.log(res)).catch(err => console.log(err))
// p2.catch(err => console.log(err)).then(res=>console.log(res))
// p1.catch(err => console.log(err))
