import React from 'react'
import { Button, Form, Input } from 'antd'
import LoginStyle from './Login.module.less'
import { useNavigate } from 'react-router-dom'

interface User {
  name?: string
  password?: string
}

const Login: React.FC = () => {
  const navigate = useNavigate()

  const handleFinish = (values: User) => {
    if (values?.name !== 'admin' || values?.password !== '123456') return

    navigate('/layout', { replace: true, state: { a: '1', b: '2' } })
  }

  return (
    <div className={LoginStyle.login}>
      <div className={LoginStyle.login__panel}>
        <Form
          name="basic"
          style={{ maxWidth: 600 }}
          labelAlign="left"
          autoComplete="off"
          labelCol={{ span: 3 }}
          onFinish={handleFinish}>
          <Form.Item
            label="用户名"
            name="name"
            rules={[{ required: true, message: '请输入用户名称!' }]}>
            <Input placeholder="admin" maxLength={20} />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}>
            <Input.Password placeholder="123456" maxLength={6} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
