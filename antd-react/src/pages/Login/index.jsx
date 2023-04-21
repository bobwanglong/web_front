import { Card } from 'antd'
import logo from '@/assets/logo.png'
import { Button, Checkbox, Form, Input, message } from 'antd'
import { useNavigate } from 'react-router-dom'
import './index.scss' // 样式文件，需要更新下载 sass pnpm add sass -D  -D表示只在开发环境中使用

function Login() {
  const navigate = useNavigate() // 跳转函数

  const onFinish = (values) => {
    const { username, password } = values
    // mock login
    if (username === '13912344321' && password === '123321') {
      //success
      navigate('/', { replace: true }) // replace 什么作用？
      // 提示信息
      message.success('登录成功')
    } else {
      // fail
      message.error('登录失败')
    }
  }
  // const onFinishFailed = (errorInfo) => {
  // console.log('Failed:', errorInfo)
  // }
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/** 表单 */}
        <Form
          validateTrigger={['onBlur', 'onChange']}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off">
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              {
                required: true,
                message: '请输入手机号或者用户名',
              },
              // 继续添加校验规则
              {
                pattern: /^1[3-9]\d{9}$/,
                message: '请输入正确的手机号',
                validateTrigger: 'onBlur', // 失去焦点事件触发
              },
            ]}>
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                required: true,
                message: '请输入密码',
              },
              {
                len: 6,
                message: '请输入6位密码',
                validateTrigger: 'onBlur', // 失去焦点事件触发
              },
            ]}>
            <Input.Password size="large" placeholder="请输入密码" />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            // wrapperCol={{
            //   offset: 8,
            //   span: 16,
            // }}
          >
            <Checkbox className="login-checkbox-label">
              <a href="package.json">
                {' '}
                我已阅读并同意「用户协议」和「隐私条款」
              </a>
            </Checkbox>
          </Form.Item>

          <Form.Item
          // wrapperCol={{
          //   offset: 8,
          //   span: 16,
          // }}
          >
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
export default Login
