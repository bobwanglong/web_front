import React from 'react';
import ReactDOM from 'react-dom/client';
// 应用的全局样式文件
import './index.css';
// 引入根组件App到一个id为root的dom节点
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> // 严格模式去掉
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

