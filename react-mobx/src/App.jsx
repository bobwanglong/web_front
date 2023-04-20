import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// 导入store
import counter from './components/counterStore'
// 导入computerStore
import counterCom from './components/mobComputer'
// 导入observer方法
import { observer } from 'mobx-react-lite'
// 导入 异步执行类
import channelStore from './components/asyncawait'

// 模块化，使用store中的组件｜方法
import { useStore } from './components/store'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    channelStore.setChannelList()
  })

  // mobx模块化结合context
  const store = useStore()
  return (
    <div className="App">
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
     
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div>
        <button onClick={() => counter.addCount()}>
          点击计数：{counter.count}
        </button>
      </div>

      <div>
        <span>mobx计算属性</span>
        {/**原数组 */}
        {JSON.stringify(counterCom.list)}
        {/**计算属性 */}
        {JSON.stringify(counterCom.filterList)}
        <button onClick={() => counterCom.changeList()}>change list</button>
      </div>

      <div>
        <span>异步执行</span>
        <ul>
          {channelStore.channelList.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>

      <div>
        <span>mobx的组件化方案</span>
        <button onClick={() => store.counterStore.addCount()}>
          {store.counterStore.count}
        </button>
      </div>
    </div>
  )
}

export default observer(App)
