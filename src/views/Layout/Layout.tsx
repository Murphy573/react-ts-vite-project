import React, { useEffect } from 'react'
import { Layout as AntdLayout, ConfigProvider } from 'antd'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const { Header, Footer, Sider, Content } = AntdLayout

const Layout: React.FC = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  // 当输入 '/layout' 时，自动重定向到 '/layout/home'
  useEffect(() => {
    if (pathname === '/layout') {
      navigate('/layout/home', { replace: true })
    }
  }, [])

  return (
    <ConfigProvider componentSize="small">
      <AntdLayout style={{ width: '100%', height: '100%' }}>
        <Sider>Sider</Sider>
        <AntdLayout>
          <Header style={{ color: '#fff' }}>title</Header>
          <Content>
            <Outlet />
          </Content>
          <Footer>Footer</Footer>
        </AntdLayout>
      </AntdLayout>
    </ConfigProvider>
  )
}

export default Layout
