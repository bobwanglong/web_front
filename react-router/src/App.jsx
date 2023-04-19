import './App.css'
import { BrowserRouter, Routes, Route, Link, useRoutes } from 'react-router-dom'
import Layout from './components/layout'
import Article from './components/pages/Article'
// import Layout from './components/layout'
// import Home from './components/home'
import NotFound from './components/notfound'
// const About = () => <div>this is about</div>
// const Foo = () => <div>this is foo</div>
const Board = () => <div>this is board</div>
// const Article = () => <div>this is Article</div>

// 集中式配置路由
// 1.准备一个路由数组，数组中定义所有的路有对应关系
const routerList = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: <Board />,
        index: true, // index设置为true 变成默认的二级路由
      },
      {
        path: 'article',
        element: <Article />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

// 2.使用useRoutes方法传入 routerList生成routers组件
function WrapperRouters() {
  let element = useRoutes(routerList)
  return element
}
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <div>
          <Link to="/">首页</Link>
        </div>
        <span>
          {' '}
          <Link to="/about">关于</Link>{' '}
        </span>
        <span>
          {' '}
          <Link to="/foo">foo</Link>
        </span> */}

        {/* <Routes> */}
        {/* <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="foo" element={<Foo />}></Route> */}
        {/* <Route path="*" element={<NotFound />}></Route> */}
        {/* </Routes> */}
        {/* <Routers>
          <Route path="/" element={<Layout />}>
            <Route path="board" element={<Board />} />
            <Route path="article" element={<Article />} />
          </Route>
        </Routers> */}
        {/* <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="board" element={<Board />} />
            <Route path="article" element={<Article />} />
          </Route>
          {/* 省略部分  */}
        {/* </Routes> */}

        {/**集中式路有配置 */}
        {/**替换之前的Routes组件 */}
        <WrapperRouters />
      </BrowserRouter>
    </div>
  )
}

export default App
