declare namespace MyRouter {
  type RouteObject = import('react-router-dom').RouteObject

  type RouteObj = RouteObject & {
    meta?: {
      /* 是否是白名单 */
      isWhiteList?: boolean
      /* 是否是菜单 */
      isMenu?: boolean
      menuKey?: string
      breadcrumbKey?: string
      /* 名称 */
      title?: string
      /* 当展示标签时，是否固定不可关闭 */
      affix?: boolean
    }
  }
}
