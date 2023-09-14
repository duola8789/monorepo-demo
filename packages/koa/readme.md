# Koa In Monorepo

| starter 部分参考了：https://github.com/Vibing/ts-koa-starter

## 使用

```bash
yarn dev # 本地启动
yarn build # 打包
yarn start # 生产环境使用 pm2 启动
```

## 目录结构

```bazaar
.
├── src
│   ├── controller      //controller层
│   ├── service         //service层
│   ├── routes.ts       //路由
│   └── index.ts        //项目入口index.js
├── ecosystem.config.js //pm2配置
├── nodemon.json        //nodemon配置
├── package.json
└── tsconfig.json
```
