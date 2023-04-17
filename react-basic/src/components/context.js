/**跨组件通信context
 * 场景：向任意一个下层组件传递数据，现有解决方案是一层一层的通过props传递，很繁琐
 * 新的解决方案：Context提供一个“无需为每层组件手动添加props，就能再组件树之间进行数据传递的方法”
 * 实现步骤：
 * 1.创建Context对象，导出Provider和Consumer对象
 * const {Provider,Consumer} = createContext()
 * 2.使用 Provider包裹上层组件提供数据
 * <Provider value={this.state.message}>
 *  {/* 根组件 }
  </Provider>
 * 3.需要用到数据的组件使用Consumer包裹获取数据
  <Consumer >
    {value => /* 基于 context 值进行渲染}
</Consumer>
*/


import React, { createContext } from 'react'

// 1.创建Context对象，导出Provider和Consumer对象
const { Provider, Consumer } = createContext()
// 3.消费数据
function ComC () {
  return (
    <Consumer>
      {value => <div>消费数据==》{value}</div>}
    </Consumer>
  )
}
function ComA () {
  return (
    <ComC />
  )
}

// 2.提供数据
class Prov extends React.Component {
  state = {
    message: 'this is s context message'
  }

  render () {
    return (
      <Provider value={this.state.message}>
        <ComA />
      </Provider>
    )
  }
}

export default Prov