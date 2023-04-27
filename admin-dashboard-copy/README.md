## 后台管理系统开发记录

### 一 创建项目

```bash
	pnpm create vite admin-dashboard-copy --template react
```

### 二、进入项目下载依赖

项目初始化的依赖

```bash
cd admin-dashboard-copy && pnpm install
```

其他依赖：

```bash
pnpm install react-redux @reduxjs/toolkit react-router-dom @mui/material @emotion/react @emotion/styled @mui/icons-material @mui/x-data-grid

pnpm install -D @types/react-dom

```

字体：
fonts.google.com

```bash
# src/index.css
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap");

```

相对路径的修改为@

```js
//在vite.config.js文件中修改
// 如果没有该文件，执行：npm install -D @types/node //ts 需要 js内置
import path from 'path' // 新增

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // add
    alias: [{ find: '@', replacement: path.relative(__dirname, 'src') }], //add
  },
})
```
