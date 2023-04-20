// 组合模块

import React from "react"

import counter from "./counterStore"
import task from "./taskStore"

class RootStore {
  constructor() {
    this.counterStore = counter
    this.taskStore = task
  }
}

const rootStore = new RootStore()
// context机制的数据查找链 Provider如果找不到，就会找createContext方法执行时传入的参数
const context = React.createContext(rootStore)
const useStore = () => React.useContext(context)

export { useStore }