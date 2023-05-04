## 简历模版发开步骤

### 一、初始化项目

#### 1、使用 vite 创建 react 项目

```bash
pnpm create vite myResume --template react
```

#### 2.清除不必要的文件

```bash
src
├── App.jsx
├── assets
└── main.jsx
```

#### 3.下载依赖

css 框架 tailwindcss

```bash
pnpm install -D tailwindcss
```

路由 react-router-dom 需要 6 以上版本

```bash
pnpm install  react-router-dom @emailjs/browser @react-three/drei @react-three/fiber framer-motion maath react-tilt react-vertical-timeline-component three
```

### 二、各模块设计

1.三维模块
将 pc 建模材料 desktop 和行星建模文件 planet 文件夹 移入 public 文件夹

2。静态文件模块
src/assets 文件夹下上传所有的静态文件

3.tailwind 样式引入
src/index.css
src/styles.js
src/tailwind.config.js
动画设置
src/utils/motion.js
样式的常量式封装
src/constants/index.js
