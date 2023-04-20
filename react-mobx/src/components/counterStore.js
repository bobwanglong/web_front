import { makeAutoObservable } from 'mobx'

class CounterStore {
  count = 0
  constructor() {
    makeAutoObservable(this) // 响应式处理
  }
  // 定义修改数据的方法
  addCount = () => {
    this.count++
  }
}

const counter = new CounterStore()
export default counter