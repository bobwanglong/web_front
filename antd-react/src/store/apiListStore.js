import { makeAutoObservable } from 'mobx'
import { http } from '../utils'
// import fs from 'fs'
import yaml from 'js-yaml'

class ApiListStore {

  path = []
  pathRegexp = []
  pathPrefix = []
  // apiList = [path,pathRegexp,pathPrefix]
  // apiList = []
  constructor() {
    makeAutoObservable(this)
  }
  getApiList = async () => {
    const res = await http.get("/apis/v1/objects/apigateway")
    const data = yaml.load(res.data)
    const { rules } = data
    rules.forEach((item, index) => {
      if (index === 0) {
        this.path.push(...item.paths)
      }
      if (index === 1) {
        this.pathRegexp.push(...item.paths)
      }
      if (index === 2) {
        this.pathPrefix.push(...item.paths)
      }
    })
  }
}
export default ApiListStore


