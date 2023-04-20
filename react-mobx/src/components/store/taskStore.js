import { makeAutoObservable } from 'mobx'
class TaskStore {
  taskList = []
  constructor() {
    makeAutoObservable(this)
  }
  addTask () {
    this.taskList.push('vue', 'react')
  }
}

const task = new TaskStore()
export default task