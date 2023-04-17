import { lazy } from 'react'
import LazyLoad from '@/router/utils/LazyLoad'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import Layout from '@/views/Layout/Layout'

// ! 导入所有router并存储到AllRouters
export const AllRouters: MyRouter.RouteMixedObject[] = []
const metaRouters = import.meta.glob('./modules/*.tsx', { eager: true })
Object.keys(metaRouters).forEach((item) => {
  const routesMapper = metaRouters[item] as Record<
    string,
    MyRouter.RouteMixedObject[]
  >
  Object.keys(routesMapper).forEach((key) => {
    AllRouters.push(...routesMapper[key])
  })
})

const routeConfig: MyRouter.RouteMixedObject[] = [
  {
    path: '/',
    element: <Navigate to="/login" />
  },
  {
    path: '/dashboard',
    element: LazyLoad(lazy(() => import('@/views/Dashboard/Dashboard')))
  },
  {
    path: '/login',
    element: LazyLoad(lazy(() => import('@/views/Login/Login')))
  },
  {
    path: '/404',
    element: LazyLoad(lazy(() => import('@/views/404/404')))
  },
  {
    path: '/layout',
    element: <Layout />,
    children: [...AllRouters]
  },
  {
    path: '*',
    element: <Navigate to="/404" replace />,
    meta: {
      isWhiteList: true
    }
  }
]

export const RootRouter = createBrowserRouter(routeConfig, { basename: '/' })
