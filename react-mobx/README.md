## mobx 使用

### 介绍：

集中状态管理工具，和 redux 解决的问题相似，都可以独立组件进行集中状态管理

### 优势

1.简单：编写无模版的极简代码精准描述意图 2.轻松实现最优渲染：依赖自动追踪，实现最小渲染 3.架构自由：可移植，可测试，无特殊心智负担

### 配置开发环境

安装 mobx 和中间件 mobx-react-lite(只能在函数组件中使用)

```bash
 pnpm add mobx mobx-react-lite
```

### 基础使用

实现一个计数器的案例

第一步：
初始化 mobx
步骤：
1。定义数据状态 state 2.在构造器中实现数据的响应式处理 makeAutoObservable 3.定义修改数据的函数 action 4.实例化 store 并导出

第二步： 1.在组件中导入 counterStore 实例对象 2.在组件中使用 store 实例对象中的数据 3.通过事件调用修改数据的方法修改 store 中的数据
4。让组件响应数据变化

### 计算属性

实现步骤
声明一个存在的数据
通过 get 关键词 定义计算属性
在 makeAutoObservable 方法中标记计算属性

counterStore.js

### 异步数据处理

实现步骤:

1. 在 mobx 中编写异步请求方法 获取数据 存入 state 中
2. 组件中通过 useEffect + 空依赖 触发 action 函数的执行
   asyncawait.js

### 模块化

代码模块解耦
实现步骤： 1.拆分模块 js 文件，每个模块中定义自己独立的 state/action 2.在 store/index.js 中导入拆分之后的模块，进行模块组合 3.利用 react 的 context 的机制导出统一的 useStore 方法，给业务组件使用
代码文件：
components/store/\*.js

### 多组件共享数据

#### 目标：

当数据发生变化，所有用到数据的组件都会得到同步的组件的更新

#### 实现步骤：

在 foo 组件和 bar 组件中分别使用 store 中的数据，然后在 app 组件中进行数据修改，查看 foo 组件和 bar 组件是否得到更新
