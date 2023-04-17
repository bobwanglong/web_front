// 引入类组件
// import HelloClass from './components/classComponents'
// import { HelloFn, TestComponent, clickEventHandler } from './components/funcComponents'

import Fa from "./components/childToFather"
import Father from "./components/fathertochild"

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
      <Father />
      <div>子传父
        <div>
          <Fa />
        </div>
      </div>
    </div>
  )
}

export default App;

