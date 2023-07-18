import { useEffect, useRef } from 'react'
import _ from 'lodash'

/**
 * 只在组件初始化时执行的 Hook
 * @param fn 执行的函数
 */
export const useMount = (fn: () => void) => {
  if (!_.isFunction(fn)) {
    // eslint-disable-next-line no-console
    console.error(
      `useMount: 参数 \`fn\` 必须为Function, 但是传入的fn类型是 "${typeof fn}".`
    )
  }

  useEffect(() => {
    fn?.()
  }, [])
}

/**
 * 在组件卸载（unmount）时执行的 Hook。
 * @param fn 执行的函数
 */
export const useUnMount = (fn: () => void) => {
  if (!_.isFunction(fn)) {
    // eslint-disable-next-line no-console
    console.error(
      `useUnMount: 参数 \`fn\` 必须为Function, 但是传入的fn类型是 "${typeof fn}".`
    )
  }

  const ref = useRef(fn)
  ref.current = fn

  useEffect(
    () => () => {
      ref.current?.()
    },
    []
  )
}
