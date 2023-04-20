import { makeAutoObservable } from 'mobx'
class TaskStore {
  taskList = []
  constructor() {
    makeAutoObservable(this)
  }
  addTask (params) {
    this.taskList.push(params)
  }
}

const task = new TaskStore()
export default task