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
pnpm install --strict-peer-dependencies -D tailwindcss postcss autoprefixer
npx tailwindcss init -p # 在项目根目录下会多出一个文件 postcss.config.js
```

路由 react-router-dom 需要 6 以上版本

```bash
pnpm install  react-router-dom @emailjs/browser @react-three/drei @react-three/fiber framer-motion maath react-tilt react-vertical-timeline-component three
```

### 二、各模块设计

#### 1.三维模块

将 pc 建模材料 desktop 和行星建模文件 planet 文件夹 移入 public 文件夹

#### 2.静态文件模块

src/assets 文件夹下上传所有的静态文件

#### 3.tailwind 样式引入

https://gist.github.com/adrianhajdin/b1d33c262941a7e21aad833a1cfc84b1

src/index.css
src/styles.js
src/tailwind.config.js
动画设置
src/utils/motion.js
样式的常量式封装
src/constants/index.js

vite 配置 tailwindcss https://tailwindcss.com/docs/guides/vite

#### 4. 布局 layout

4.1 路由引入

在 app.jsx 中引入

遇到的问题：tailwind 样式未生效,导致原因：main.jsx 中未引入 index.css

4.2 navBar
4.2.1 自适应菜单功能

```jsx
<div className="sm:hidden flex flex-1 justify-end items-center">
  <img
    src={toggle ? close : menu}
    alt="menu"
    className="w-[28px] h-[28px] object-contain"
    onClick={() => setToggle(!toggle)}
  />

  <div
    className={`${
      !toggle ? 'hidden' : 'flex'
    } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
    <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
      {navLinks.map((nav) => (
        <li
          key={nav.id}
          className={`font-poppins font-medium cursor-pointer text-[16px] ${
            active === nav.title ? 'text-white' : 'text-secondary'
          }`}
          onClick={() => {
            setToggle(!toggle)
            setActive(nav.title)
          }}>
          <a href={`#${nav.id}`}>{nav.title}</a>
        </li>
      ))}
    </ul>
  </div>
</div>
```

4.2.2 屏幕滚动

```jsx
const [scrolled, setScrolled] = useState(false)

useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY
    if (scrollTop > 100) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])
return (
  <nav
    className={`${
      styles.paddingX
    } w-full flex items-center py-5 fixed top-0 z-20 ${
      scrolled ? 'bg-primary' : 'bg-transparent'
    }`}>
    ...
  </nav>
)
```

4.3 hero 模块
4.3.1 引导线实现

```jsx
 <div className=" w-5 h-5 rounded-full bg-[#915EFF]" />
 <div className="w-1 sm:h-80 h-40 violet-gradient" />
```

![](/Users/wanglong/Library/Application%20Support/marktext/images/2023-05-05-15-00-30-image.png)

4.3.2 鼠标模拟滚动动画实现

```jsx
<div className="absolute xs:bottom-6 bottom-32 w-full flex justify-center items-center">
  <a href="#about">
    <div className="w-[33px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
      <motion.div
        animate={{ y: [0, 22, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'loop',
        }}
        className="w-3 h-3 rounded-full bg-secondary mb-1"
      />
    </div>
  </a>
</div>
```

4.3.3 computer 3D 模型 1.控制可旋转视角

```jsx
<OrbitControls
  enableZoom={false}
  maxPolarAngle={Math.PI / 2}
  minPolarAngle={Math.PI / 2}
/>
```

2.显示模型加载进度

```jsx
import { Html, useProgress } from '@react-three/drei'

const CanvasLoader = () => {
  const { progress } = useProgress()
  return (
    <Html
      as="div"
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 14,
          color: '#F1F1F1',
          fontWeight: 800,
          marginTop: 40,
        }}>
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

export default CanvasLoader
```

![](/Users/wanglong/Library/Application%20Support/marktext/images/2023-05-05-16-34-48-image.png)

4.4 about 组件
卡片动画

```jsx
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className=" bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className=" w-16 h-16 object-contain "
        />
        <h3 className=" text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
)
```

4.5 work experience
竖线时间线功能

```jsx
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
```

4.6 tech
canvas 绘制 ball

```jsx
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei'

import CanvasLoader from '../Loader'

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default BallCanvas
```

4.7 project
参考 About 组件

4.8 contact 组件
利用 emailjs 发送邮件，不依赖后端，配置 emailjs 的文章https://juejin.cn/post/6956399205527060516
代码实现：

```jsx
emailjs
  .send(
    import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
    {
      from_name: form.name,
      to_name: 'bob-wang',
      from_email: form.email,
      to_email: 'wanglongtin@163.com',
      message: form.message,
    },
    import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
  )
  .then(
    () => {
      setLoading(false)
      alert('Thank you. I will get back to you as soon as possible.')

      setForm({
        name: '',
        email: '',
        message: '',
      })
    },
    (error) => {
      setLoading(false)
      console.error(error)

      alert('Ahh, something went wrong. Please try again.')
    }
  )
```

配置信息在环境变量文件 .env 中
