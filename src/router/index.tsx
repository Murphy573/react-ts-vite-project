import { createBrowserRouter, Navigate } from 'react-router-dom'
import { Base } from './modules/base'

const routeConfig: MyRouter.RouteObj[] = [
  {
    path: '/',
    element: <Navigate to="/login" />
  },
  ...Base,
  {
    path: '*',
    element: <Navigate to="/404" />,
    meta: {
      isWhiteList: true
    }
  }
]

export const RootRouter = createBrowserRouter(routeConfig, { basename: '/' })
