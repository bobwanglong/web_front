// import process from 'node:process'
const process = require ('node:process')
const someAsyncThing = function () {
    return new Promise((resolve,reject)=>resolve(x+2))
}

someAsyncThing().then(()=>console.log('everything is ok'))

setTimeout(() => {
 console.log(123);    
}, 2000);

process.on('unhandledRejection', function (err, p) {
    
    throw err;
  });
