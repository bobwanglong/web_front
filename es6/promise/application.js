
function getFoo(){
    return new Promise(
        function(resolve,reject){
            resolve("foo")
        }
    )
}

const g = function*(){
    try {
        const foo = yield getFoo()
        console.log(foo)
    }catch(e){
        console.log(e);
    }
}


function run(generator){
    const it = generator()

  go(it.next())

  function go (result) {
    if (result.done) return result.value;

    return result.value.then(function (value) {
      return go(it.next(value));
    }, function (error) {
      return go(it.throw(error));
    });
  }
}
run(g)
g().next().value.then(function (val) {
    console.log(val);
})