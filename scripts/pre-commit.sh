#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# ts类型检查
npm run tscheck

# eslint规范检查
npm run lint:js

# prettier格式化
npm run format

# 样式规范检查
npm run lint:style

# 添加到暂存区
git add
