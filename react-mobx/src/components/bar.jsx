import { useStore } from './store'
import { observer } from 'mobx-react-lite'

const Bar = () => {
  const { taskStore } = useStore()
  return (
    <ul>
      {taskStore.taskList.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  )
}
export default observer(Bar)
