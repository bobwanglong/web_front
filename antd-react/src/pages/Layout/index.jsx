import { observer } from 'mobx-react-lite'
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
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

const { Header, Content, Footer, Sider } = Layout

const MyLayout = () => {
  // const [openKeys, setOpenKeys] = useState([])
  // const [selectedKey, setSelectedKey] = useState([])
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const ApiListHandler = ({ key, domEvent }) => {
    console.log('触发', domEvent)
    console.log('key', key)
  }
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken)
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}>
        <div className="sideInner">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['4']}
            // items={[
            //   UserOutlined,
            //   VideoCameraOutlined,
            //   UploadOutlined,
            //   AreaChartOutlined,
            //   myIcon,
            // ].map((icon, index) => ({
            //   key: String(index + 1),
            //   icon: React.createElement(icon),
            //   label: `nav ${index + 1}`,
            // }))}
            onClick={ApiListHandler}
            items={[
              {
                icon: React.createElement(VideoCameraOutlined),
                label: '接口列表',
                key: '1',
              },
              {
                icon: React.createElement(UserOutlined),
                label: '456',
                key: '2',
              },
            ]}
          />
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
            content
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
