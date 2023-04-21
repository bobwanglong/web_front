// const { createProxyMiddleware } = require("http-proxy-middleware")

// module.exports = function (app) {
//   app.use(
//     createProxyMiddleware(
//       "/apis", //遇见/api-elm前缀的请求,就会触发该代理配置
//       {
//         target: "http://192.168.118.82:2381", //请求转发给谁（能返回数据的服务器地址）
//         changeOrigin: true, //控制服务器收到的响应头中Host字段的值
//         secure: false,
//         // pathRewrite: {
//         //   "^/api": "",
//         // }, //重写请求路径，保证交给后台服务器是正常地请求地址（必须配置）
//       }
//     )
//   )
// }
// const yaml = require('js-yaml')
// import fs from 'fs'
// import yaml from 'js-yaml'

// try {
//   const fileContents = fs.readFileSync('./file.yaml', 'utf8')
//   console.log(fileContents)
//   const data = yaml.load(fileContents)
//   console.log(data.xForwardedFor)
// } catch (e) {
//   console.error(e)
// }

const al = [1]
const bl = [[2, 3], [4]]
bl.map((item) => (al.push(...item)))
console.log(al)
