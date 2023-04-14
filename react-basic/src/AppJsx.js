// jsx 表达式
// 2.类名样式
// app.css
import './app.css'
const name = "bon"
function getName () {
  return "wang"
}
// jsx 列表渲染
const songs = [
  { id: 1, name: '痴心绝对' },
  { id: 2, name: '像我这样的人' },
  { id: 3, name: '南山南' }
]
// jsx的条件渲染
// 实现：三元表达式，逻辑与&&运算
const flag = true
// 多分枝判断
// 状态：1，2，3...
// 1->h1
// 2->h2
// 3->h3
// 解决：状态收敛为一个函数
const getType = (type) => {
  if (type === 1) {
    return <h1>h1</h1>
  }
  if (type === 2) {
    return <h1>h2</h1>
  }
  return <h1>h3</h1>
}

// jsx 样式处理
// 1 行内样式 --style
const insideStype = {
  color: "red",
  fontSize: "20px"
}
const showStyle = false
function App () {
  return (
    <div className="App">
      app
      {name}
      {getName()}
      <ui>
        {
          songs.map(item => <li key={songs.id}>{item.name}</li>) // 添加来key属性，使虚拟dom中的diff算法高效
        }
      </ui>
      {/* 条件渲染字符串 */}
      {flag ? 'react 出现' : "vue 出现"}
      {/*条件渲染标签/组件 */}
      {flag ? (
        <div>
          <span> this is a span</span>
        </div>)
        : "hello"}
      {/*逻辑运算 */}
      {true && <span>this is && span</span>}
      {false || <span>this is "||"" span</span>}
      {/*多状态多分枝判断 */}
      {getType(2)}
      {getType(1)}
      {getType(3)}

      {/*行内样式 */}
      <div style={insideStype}>
        this is inside style
      </div>
      {/* 类名控制 */}
      <div className={showStyle ? 'titleT' : 'titleFalse'}>
        this is a class ctr style
      </div>
    </div>
  )
}

export default App;

