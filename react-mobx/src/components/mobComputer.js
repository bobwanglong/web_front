import { computed, makeAutoObservable } from 'mobx'

class CounterStoreComputer {
  list = [1, 2, 3, 4, 5, 6]
  constructor() {
    makeAutoObservable(this, {
      filterList: computed
    })

  }
  // 修改原数组
  changeList = () => {
    this.list.push(7, 8, 9)
  }
  // 定义计算属性,get是关键字
  get filterList () {
    return this.list.filter(item => item > 6)
  }
}

const counterCom = new CounterStoreComputer()
export default counterCom