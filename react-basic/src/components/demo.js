import React from "react"

// 该demo包含父传子和子传父两种组件之间的通信
// 子组件
function ListItem (props) {
  const { name, price, info, id, delHandler } = props
  return (
    <div>
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{info}</p>
      <button onClick={() => delHandler(id)}>删除</button>
    </div>
  )
}
// 父组件
class FDemo extends React.Component {
  state = {
    // 列表数据
    list: [
      { id: 1, name: '超级好吃的棒棒糖', price: 18.8, info: '开业大酬宾，全场8折' },
      { id: 2, name: '超级好吃的大鸡腿', price: 34.2, info: '开业大酬宾，全场8折' },
      { id: 3, name: '超级无敌的冰激凌', price: 14.2, info: '开业大酬宾，全场8折' }
    ]
  }
  delHandler = (id) => {
    this.setState({
      list: this.state.list.filter(item => item.id !== id) // 返回符合条件的元素列表
    })
  }
  render () {
    return (
      <>
        {this.state.list.map(item =>
          <ListItem // 全部为props
            key={item.id}
            {...item}
            delHandler={this.delHandler} // 子传父，又父组件传回调函数给子组件，子组件再执行
          ></ListItem>
        )}
      </>
    )
  }
}

export default FDemo