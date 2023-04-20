import { makeAutoObservable } from 'mobx'
import axios from 'axios'

class ChannelStore {
  channelList = []
  constructor() {
    makeAutoObservable(this)
  }

  setChannelList = async () => {
    const res = await axios.get('http://geek.itheima.net/v1_0/channels')
    this.channelList = res.data.data.channels
  }
}

const channelStore = new ChannelStore()
export default channelStore