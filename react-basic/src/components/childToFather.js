/**实现子传父
 * 口诀：父组件给子组件传递“回调函数”，子组件调用
 * 实现步骤：
 * 1.父组件提供一个回调函数(用于接受数据)
 * 2.将函数作为属性的值，传给子组件
 * 3.子组件通过props调用回调函数
 * 4.将子组件的数据作为参数传递给回调函数
 */
import React from "react"

// 子组件
function Son (props) {
  function handlerClick () {
    // 调用父组件传递过来的回调函数，并注入参数
    props.changeMsg('this is newMessage')
  }
  return (
    <div>
      这是子组件展示的{props.msg}
      <button onClick={handlerClick}>change</button>
    </div>
  )

}
class Fa extends React.Component {
  state = {
    message: 'this is a message'
  }
  // 提供回调函数
  changeMessage = (newMsg) => {
    console.log("子组件传过来的数据", newMsg)
    this.setState({
      message: newMsg
    })
  }
  render () {
    return (
      <div>
        <div>父组件</div>
        <div>这是父组件展示的{this.state.message}</div>
        <Son
          msg={this.state.message}
          // 传递给子组件
          changeMsg={this.changeMessage}
        />
      </div>
    )
  }
}

export default Fa
