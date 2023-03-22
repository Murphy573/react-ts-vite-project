import { lazy } from 'react'
import LazyLoad from '@/router/utils/LazyLoad'

export const Home: MyRouter.RouteObj[] = [
  {
    path: 'home',
    element: LazyLoad(lazy(() => import('@/views/Home/Home')))
  }
]
