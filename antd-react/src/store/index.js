// 使用mobx管理数据
// 安装 mobx  mobx-react-lite
import React from "react"
import ApiListStore from "./apiListStore"

// ??
import { configure } from "mobx"
configure({
  enforceActions: "never",
})

class RootStore {
  constructor() {
    this.apiListStore = new ApiListStore()
  }
}

const rootStore = new RootStore()
const context = React.createContext(rootStore)
const useStore = () => React.useContext(context)
export { useStore }