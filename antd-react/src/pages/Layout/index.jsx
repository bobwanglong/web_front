import { observer } from 'mobx-react-lite'
import {
  Outlet,
  Link,
  useLocation,
  useNavigate,
  Routes,
  Route,
} from 'react-router-dom'
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  AreaChartOutlined,
  FastForwardOutlined,
} from '@ant-design/icons'
import { Layout, Menu, theme } from 'antd'
import React from 'react'

import './index.scss'
import Apigateway from '../apigateway'

const { Header, Content, Footer, Sider } = Layout
const Plat = () => (
  <div>
    <h1>plat</h1>
  </div>
)
const MyLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const navigate = useNavigate() // 跳转函数

  const ApiListHandler = ({ item, key, keyPath, domEvent }) => {
    // console.log('触发的事件', domEvent)
    console.log('key:', key)
    // console.log('keyPath:', keyPath)
    // console.log('item', item)
    // navigate('/' + key, { replace: true })
    navigate(key, { replace: true })
  }
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log('b', broken)
        }}
        onCollapse={(collapsed, type) => {
          console.log('c:', collapsed, 'ct', type)
        }}>
        <div className="sideInner">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['4']}
            onClick={ApiListHandler}
            items={[
              {
                icon: React.createElement(AreaChartOutlined),
                label: '平台信息列表',
                key: 'plat',
              },
              {
                icon: React.createElement(UploadOutlined),
                label: '网关API信息',
                key: 'gateway',
              },
            ]}></Menu>
        </div>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '24px 16px 0',
          }}>
          <div
            style={{
              padding: 24,
              minHeight: 'calc(100vh - 100px - 80px)',
              background: colorBgContainer,
            }}>
            {/**二级路由出口 */}
            <Routes>
              <Route path="/plat" element={<Plat />} />
              <Route path="/gateway" element={<Apigateway />} />
            </Routes>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default observer(MyLayout)
