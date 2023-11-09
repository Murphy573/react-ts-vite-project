/**
 * 睡眠
 * @param duration 睡眠时间，单位s
 */
export function sleep(duration: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, duration * 1000)
  })
}

/**
 * 加载图片
 * @param url 图片链接
 */
export function loadImgByUrl(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    let img = new Image()
    img.src = url
    img.crossOrigin = 'anonymous'
    img.onload = function () {
      resolve(img)
    }
    img.onerror = function (error) {
      reject(error)
    }
  })
}

/**
 * 将图片链接转化为base64
 * @param url 图片地址url
 * @param output 输出图片mimetype
 * @param encoder 压缩质量 0-1
 */
export function convertImgUrl2Base64(
  url: string,
  output = 'jpeg',
  encoder = 1
): Promise<string> {
  let canvas = document.createElement('canvas')
  let ctx = canvas.getContext('2d')

  return new Promise((resolve, reject) => {
    loadImgByUrl(url)
      .then((img: HTMLImageElement) => {
        const { width, height } = img

        canvas.width = width
        canvas.height = height

        ctx?.clearRect(0, 0, width, height)
        ctx?.drawImage(img, 0, 0, width, height)

        const base64 = canvas.toDataURL(`image/${output}`, encoder)

        img = null as any
        ctx = null
        canvas = null as any

        resolve(base64)
      })
      .catch(() => {
        ctx = null
        canvas = null as any
        resolve('')
      })
  })
}

/**
 * url拼接
 */
export function combineURLs(...urls: string[]) {
  return urls.reduce((prev, next) => {
    return prev
      ? `${prev.replace(/\/+$/, '')}/${next.replace(/^\/+/, '')}`
      : prev
  })
}

/**
 * 计算字符串所占的内存字节数
 * @param str
 * @param charset utf-8, utf-16
 * @return {number} 字节数
 */
export function calcStrSize(str = '', charset: 'utf-8' | 'utf-16' = 'utf-8') {
  let byteSize = 0
  let len = str.length

  if (charset === 'utf-16') {
    for (let i = 0; i < len; i++) {
      const charCode = str.charCodeAt(i)
      if (charCode <= 0xffff) {
        byteSize += 2
      } else {
        byteSize += 4
      }
    }
  } else {
    for (let i = 0; i < len; i++) {
      const charCode = str.charCodeAt(i)
      if (charCode <= 0x007f) {
        byteSize += 1
      } else if (charCode <= 0x07ff) {
        byteSize += 2
      } else if (charCode <= 0xffff) {
        byteSize += 3
      } else {
        byteSize += 4
      }
    }
  }
  return byteSize
}

/**
 * waitFor 多次运行回调，直到达到超时
 * @param callback 轮询执行的回调：当为promise时，重试至resolve；当为同步函数时，在函数内手动抛出错误可执行重试，否则只会执行一次；
 * @param options 配置选项
 */
export function waitFor<T>(
  callback: () => Promise<T> | T,
  {
    // 间隔多长时间调用一次次callback，直至完成或者超时，单位ms
    interval = 50,
    // 超时时间，单位ms
    timeout = 30 * 1000,
    // 超时后的回调
    onTimeout = (error: Error) => {},
  } = {}
): Promise<T> {
  if (typeof callback !== 'function') {
    throw new TypeError('`callback` 参数必须是函数')
  }

  return new Promise(async (resolve, reject) => {
    let lastError: Error = new Error('')
    let intervalId = -1
    let timeoutId = -1
    let finished = false
    let promiseStatus = 'idle'

    // 执行完毕处理，无论成功和失败
    const handleDone = (result: T, error: Error) => {
      finished = true
      clearTimeout(timeoutId)
      clearInterval(intervalId)

      if (error) {
        reject(error)
      } else {
        resolve(result)
      }
    }

    // 超时处理
    const handleTimeout = () => {
      let error: Error = new Error('waitFor 执行超时了！')

      if (lastError) {
        error = lastError
      }

      onTimeout?.(error)
      handleDone(null as unknown as T, error)
    }

    // 检测回调
    const checkCallback = () => {
      if (promiseStatus === 'pending') return
      try {
        const result = callback?.()
        const promiseResult = result as Promise<T>
        if (typeof promiseResult?.then === 'function') {
          promiseStatus = 'pending'
          promiseResult.then(
            (resolvedValue) => {
              promiseStatus = 'resolved'
              handleDone(resolvedValue, null as any)
            },
            (rejectedValue) => {
              promiseStatus = 'rejected'
              lastError = rejectedValue
            }
          )
        } else {
          handleDone(result as T, null as any)
        }
      } catch (error: unknown) {
        lastError = error as Error
      }
    }
    // 超时
    timeoutId = window.setTimeout(handleTimeout, timeout)
    // 间隔时间
    intervalId = window.setInterval(checkCallback, interval)
  })
}

/**
 * 异步任务并发池
 * @param tasks 异步任务列表
 * @param limit 并发数
 */
export async function asyncPool<T>(
  tasks: (() => Promise<T>)[],
  limit = 1
): Promise<T[]> {
  const ret: Promise<T>[] = []

  if (!tasks.length || limit < 1) {
    return Promise.resolve().then(() => Promise.all(ret))
  }

  const executing = new Set()
  for (const item of tasks) {
    const p = Promise.resolve().then(() => item())
    ret.push(p)
    executing.add(p)
    const clean = () => executing.delete(p)
    p.then(clean).catch(clean)
    if (executing.size >= limit) {
      await Promise.race(executing)
    }
  }
  return Promise.all(ret)
}

/**
 * 计算字符串字符的长度并可以截取字符串。
 * @param str 传入字符串
 * @param maxCharacter 规定最大字符串长度
 * @returns 当没有传入maxCharacter时返回字符串字符长度，当传入maxCharacter时返回截取之后的字符串和长度。
 */
export function getCharacterLength(str: string, maxCharacter?: number) {
  const hasMaxCharacter = typeof maxCharacter === 'number'
  if (!str || str.length === 0) {
    if (hasMaxCharacter) {
      return {
        length: 0,
        characters: str,
      }
    }
    return 0
  }
  let len = 0
  for (let i = 0; i < str.length; i++) {
    let currentStringLength = 0
    if (str.charCodeAt(i) > 127 || str.charCodeAt(i) === 94) {
      currentStringLength = 2
    } else {
      currentStringLength = 1
    }
    if (hasMaxCharacter && len + currentStringLength > maxCharacter) {
      return {
        length: len,
        characters: str.slice(0, i),
      }
    }
    len += currentStringLength
  }
  if (hasMaxCharacter) {
    return {
      length: len,
      characters: str,
    }
  }
  return len
}

// 用于判断节点内容是否溢出
export const isNodeOverflow = (ele: Element): boolean => {
  const { clientWidth = 0, scrollWidth = 0 } = ele as Element & {
    clientWidth: number
    scrollWidth: number
  }

  if (scrollWidth > clientWidth) {
    return true
  }
  return false
}
