import React from 'react'
import { Layout, ConfigProvider } from 'antd'
import './App.css'
import AppStyle from './styles/app.module.less'

const { Header, Footer, Sider, Content } = Layout

const title = import.meta.env.VITE_APP_TITLE
// eslint-disable-next-line no-console
console.log(import.meta)

/* eslint-disable */
const a: RTVP.Normal = { a: '' }

const App: React.FC = () => {
  return (
    <ConfigProvider componentSize="small">
      <Layout className={AppStyle.app}>
        <Sider>Sider</Sider>
        <Layout>
          <Header style={{ color: '#fff' }}>title: {title}</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}

export default App
