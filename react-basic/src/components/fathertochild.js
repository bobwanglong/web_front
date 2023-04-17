/*
目标任务:   实现父子通信中的父传子，把父组件中的数据传给子组件

实现步骤
1.  父组件提供要传递的数据  -  state 
2.  给子组件标签添加属性值为 state中的数据 
3.  子组件中通过 props 接收父组件中传过来的数据 
  a. 类组件使用this.props获取props对象
  b. 函数式组件直接通过参数获取props对象


props说明：
1.props是只读对象(readonly)
2.props可以传递任意数据：
数字，字符串，数组，布尔值，数组，对象，函数，JSX
*/

import React from "react"
// 子组件
function FSon (props) {
  console.log(props)
  return (
    <div>
      子组件1
      <div>{props.msg}</div>
      <div>{props.cb(3)}</div>

    </div>
  )
}
class CSon extends React.Component {
  render () {
    return (
      <div>
        子组件2
        {this.props.msg}
      </div>
    )
  }
}
class Father extends React.Component {
  state = {
    message: 'this is a father message'
  }
  render () {
    return (
      <div>
        <div>父组件</div>
        <FSon
          msg={this.state.message}
          age={20}
          isMan={true}
          cb={(i) => { console.log(i) }}
          child={<span>this is child</span>}
        />
        <CSon msg={this.state.message} />

      </div>
    )
  }
}
// 父组件
// function Father () {
export default Father