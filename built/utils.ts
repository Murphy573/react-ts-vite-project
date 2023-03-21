import dotenv from 'dotenv'
import path from 'node:path'

/**
 * 获取.env.local中的环境变量
 */
export function getLocalEnvConfig() {
  return dotenv.config({ path: path.resolve(__dirname, '../', '.env.local') })
}
