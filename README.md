# Monorepo Demo

## 介绍

包含了两个子工程：
- `pacakges/next`，用`next`框架初始化的项目
- `packages/vite`，用`vite`框架初始化的鲜蘑菇

另外包含了一个公共模块`packages/common`，两个子工程通过`alias`的形式引入，支持热更新

## 启动

```bash
yarn start:next;
# 等同于 yarn workspace next dev

yarn start:vite
# 等同于 yarn workspace vite dev
```
