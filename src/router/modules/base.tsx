import { lazy } from 'react'
import LazyLoad from '@/router/utils/LazyLoad'

export const Base: MyRouter.RouteObj[] = [
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
  }
]
