import React from 'react'
import { ConfigProvider } from 'antd'
import AppStyle from './app.module.less'
import { RootRouter } from '../router/index'
import { RouterProvider } from 'react-router-dom'

// const title = import.meta.env.VITE_APP_TITLE
// eslint-disable-next-line no-console
// console.log(import.meta)

const App: React.FC = () => {
  return (
    <ConfigProvider componentSize="middle">
      <div className={AppStyle.app}>
        <RouterProvider router={RootRouter} />
      </div>
    </ConfigProvider>
  )
}

export default App
