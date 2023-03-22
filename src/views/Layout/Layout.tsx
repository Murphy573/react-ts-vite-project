import React from 'react'
import { Layout as AntdLayout, ConfigProvider } from 'antd'

const { Header, Footer, Sider, Content } = AntdLayout

const Layout: React.FC = () => {
  return (
    <ConfigProvider componentSize="small">
      <AntdLayout style={{ width: '100%', height: '100%' }}>
        <Sider>Sider</Sider>
        <AntdLayout>
          <Header style={{ color: '#fff' }}>title</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </AntdLayout>
      </AntdLayout>
    </ConfigProvider>
  )
}

export default Layout
