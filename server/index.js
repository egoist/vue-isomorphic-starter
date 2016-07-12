import path from 'path'
import Koa from 'koa'
import Vue from 'vue'
import convert from 'koa-convert'
import serve from 'koa-static-server'
import str from 'string-to-stream'
import CombinedStream from 'combined-stream'
import {createRenderer} from 'vue-server-renderer'
const {renderToStream} = createRenderer()
import vm from '../client/main'
import assets from '../build/webpack-assets'
const app = new Koa()

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack')
  const webpackConfig = require('../scripts/webpack.client.dev')
  const compiler = webpack(webpackConfig)
  const devMiddleware = require('koa-webpack-dev-middleware')
  const hotMiddleware = require('koa-webpack-hot-middleware')
  app.use(convert(devMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }
  })))
  app.use(convert(hotMiddleware(compiler)))
} else {
  // use nginx to serve static files in real
  app.use(convert(serve({rootDir: path.join(process.cwd(), 'build'), rootPath: '/static'})))
}

app.use(function (ctx) {
  ctx.type = 'text/html; charset=utf-8'
  const title = 'Vue Isomorphic Starter'

  const stream = CombinedStream.create()
  stream.append(str(`<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8"/>
      <title>${title}</title>
      ${assets.main.css ? `<link rel="stylesheet" href="${assets.main.css}"/>` : ''}
    </head>
    <body>`))
  stream.append(renderToStream(vm))
  stream.append(str(`
    <script src="${assets.main.js}"></script>
    </body>
  </html>`))

  ctx.body = stream
})

const port = process.env.NODE_PORT || 5000
app.listen(port, () => {
  console.log(`==> Listening at http://localhost:${port}`)
})
