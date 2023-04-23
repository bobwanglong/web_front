import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store'
import { Space, Table, Modal, Button } from 'antd'
import { http } from '../../utils'
import yaml from 'js-yaml'
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
    align: 'center',
  },
  {
    title: 'Path',
    dataIndex: 'path',
    key: 'path',
    align: 'center',
  },
  {
    title: 'Backend',
    dataIndex: 'backend',
    key: 'backend',
    align: 'center',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle" wrap>
        <a onClick={() => checkApiInfoHandler(record)}>check </a>
        <a>Delete</a>
      </Space>
    ),
    align: 'center',
  },
]
const checkApiInfoHandler = async (record) => {
  // 发送请求查看接口信息
  let backend = record.backend
  const res = await http.get('/apis/v1/objects/' + backend)
  const apiInfo = yaml.load(res.data)
  console.log(apiInfo)
  const { name, kind, flow, filters } = apiInfo
  Modal.info({
    title: name.split('-')[0],
    content: (
      <div>
        <p>
          <span style={{ color: 'red' }}>APIName:</span> {name}
        </p>
        <p>Kind:{kind}</p>
        <p> Flow:</p>
        <ol>
          {flow.map((item) => (
            <li key={item.filter}>{JSON.stringify(item)}</li>
          ))}
        </ol>{' '}
        {/**不能直接渲染对象，先变为字符串*/}
        <p>Filter:</p>
        <ol>
          {filters.map((item, index) => (
            <li key={index}>{JSON.stringify(item)}</li>
          ))}
        </ol>
      </div>
    ),
  })
}

const ApiList = () => {
  const { apiListStore } = useStore()
  const clickHandler = async () => {
    await apiListStore.getApiList()
  }
  const apiData = []

  apiListStore.path.map((item) =>
    apiData.push({
      key: item.backend,
      name: '' + item.backend.split('-')[0],
      path: item.path,
      backend: item.backend,
      tags: [],
    })
  )

  return (
    <>
      <div>
        <span> ApiList </span>
        <button onClick={clickHandler}>点击获取api接口数据</button>
      </div>
      <Table columns={columns} dataSource={apiData} />
      {/* <div> */}
      {/* <div>
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
        </div> */}
      {/* </div> */}
    </>
  )
}

export default observer(ApiList)
