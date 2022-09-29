import './App.css'
import { Layout, ConfigProvider } from 'antd'
import React from 'react'

const { Header, Footer, Sider, Content } = Layout

const title = import.meta.env.VITE_APP_TITLE
// eslint-disable-next-line no-console
console.log(import.meta)

const App: React.FC = () => {
  return (
    <ConfigProvider componentSize="small">
      <Layout style={{ height: '100%', width: '100%' }}>
        <Sider>Sider</Sider>
        <Layout>
          <Header>title: {title}</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}

export default App
