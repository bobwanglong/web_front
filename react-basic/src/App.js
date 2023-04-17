// 引入类组件
// import HelloClass from './components/classComponents'
// import { HelloFn, TestComponent, clickEventHandler } from './components/funcComponents'

// import Fa from "./components/childToFather"
// import Father from "./components/fathertochild"
// import F from "./components/broToBro"
// import Prov from "./components/context"
// import FDemo from "./components/demo"
import UseApp from "./components/hooks/useState"
// 组件学习


function App () {
  return (
    <div className="App">
      {/*render HelloFn */}
      {/* // <HelloFn></HelloFn> */}
      {/* <HelloClass />
      <HelloFn /> */}

      {/* <div> */}
      {/* 函数组件的事件绑定
// 语法：on+事件名称={事件处理程序}*/}
      {/* <button onClick={clickEventHandler}>click me out</button>
      </div> */}

      {/* <div>
        <TestComponent />
      </div> */}

      {/*父传子*/}
      {/* <Father /> */}
      {/* <div>子传父 */}
      {/* <div> */}
      {/* <Fa /> */}
      {/* </div> */}
      {/* </div> */}

      {/*兄弟之间传递*/}
      {/* <div>兄弟组件之间传递 */}
      {/* <F /> */}
      {/* </div> */}

      {/**使用context跨组件通信 */}
      {/* <Prov></Prov> */}

      {/*
       * 练习demo
       */}
      {/* <div> */}
      {/* <FDemo></FDemo> */}
      {/* </div> */}
      {/**
       * hooks useState
       */}
      <div>
        <UseApp></UseApp>
      </div>
    </div>

  )
}

export default App;

