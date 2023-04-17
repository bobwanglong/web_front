/** 兄弟组件通信
 * 思路：通过状态提升机制，利用共同的父组件实现兄弟通信
 * 实现步骤：
 * 1，将共享状态提升到最近的公共父组件中，由公共父组件管理这个状态
 * 提供共享状态
 * 提供操作共享状态的方法
 * 2.要接收数据状态的子组件通过props接收数据
 * 3.要传递数据状态的子组件通过props接收方法，调用方法传递数据
 */
import React from "react"
// 接收数据
function ACom (props) {
  return (
    <div>
      ACom
      <div>
        {props.msg}
      </div>
    </div>
  )
}

// 接收方法
function BCom (props) {
  return (
    <div>
      BCom
      <div>
        <button onClick={() => { props.changeMsg('new message') }}>changeMsg</button>
      </div>
    </div>
  )
}

// 父组件
class F extends React.Component {
  state = {
    message: 'this is message'
  }

  // 父组件提供的修改数据的方法
  changeMsg = (newMsg) => {
    this.setState({
      message: newMsg
    })
  }
  render () {
    return (
      <>
        {/*接收数据的组件 */}
        <ACom msg={this.state.message} />
        {/*修改数据的组件 */}
        <BCom changeMsg={this.changeMsg} />
      </>
    )
  }
}

export default F



