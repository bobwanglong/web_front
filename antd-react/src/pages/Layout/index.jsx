import { useStore } from '../../store'
import { observer } from 'mobx-react-lite'
const Layout = () => {
  // 获取数据
  const { apiListStore } = useStore()

  const clickHandler = async () => {
    await apiListStore.getApiList()
  }
  return (
    <>
      <div>layout</div>
      <div>
        <button onClick={clickHandler}>点击获取api接口数据</button>
        {/* <div>{JSON.stringify(apiListStore.apiList)}</div> */}
        <div>
          <ul>
            <span style={{ color: 'green' }}>path:</span>
            {apiListStore.path.map((item) => (
              <li key={item.backend}>{item.path}</li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            <span style={{ color: 'blue' }}>pathRegexp:</span>
            {apiListStore.pathRegexp.map((item) => (
              <li key={item.backend}>{item.pathRegexp}</li>
            ))}
          </ul>
        </div>

        <div>
          <ul>
            <span style={{ color: 'red' }}>pathPrefix:</span>
            {apiListStore.pathPrefix.map((item) => (
              <li key={item.backend}>{item.pathPrefix}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default observer(Layout)
