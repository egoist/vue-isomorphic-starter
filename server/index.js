import path from 'path'
import fs from 'fs'
import Koa from 'koa'
import Vue from 'vue'
import convert from 'koa-convert'
import serve from 'koa-static-server'
import str from 'string-to-stream'
import CombinedStream from 'combined-stream'
import {createBundleRenderer} from 'vue-server-renderer'
import serialize from 'serialize-javascript'
import MFS from 'memory-fs'
import assets from '../build/webpack-assets'

let renderer
const createRenderer = (fs) => {
  const bundlePath = path.resolve(process.cwd(), 'build/server-bundle.js')
  return createBundleRenderer(fs.readFileSync(bundlePath, 'utf-8'))
}

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

  // server renderer
  const serverBundleConfig = require('../scripts/webpack.bundle')
  const serverBundleCompiler = webpack(serverBundleConfig)
  const mfs = new MFS()
  serverBundleCompiler.outputFileSystem = mfs
  serverBundleCompiler.watch({}, (err, stats) => {
    if (err) throw err
    stats = stats.toJson()
    stats.errors.forEach(err => console.error(err))
    stats.warnings.forEach(err => console.warn(err))
    renderer = createRenderer(mfs)
  })
} else {
  // use nginx to serve static files in real
  app.use(convert(serve({rootDir: path.join(process.cwd(), 'build'), rootPath: '/static'})))

  renderer = createRenderer(fs)
}

app.use(async(ctx, next) => {

  ctx.type = 'text/html; charset=utf-8'
  const context = {url: ctx.url}
  const title = 'Vue Isomorphic Starter'
  ctx.status = 200
  ctx.body = CombinedStream.create()
  ctx.body.append(str(`<!DOCTYPE html><html><head><meta charset="utf-8"/><title>${title}</title>${assets.main.css ? `<link rel="stylesheet" href="${assets.main.css}"/>` : ''}</head><body>`))
  let firstChunk = true
  const renderStream = renderer.renderToStream(context)

  // handle the initialState and the first chunk
  ctx.body.append(await new Promise((resolve, reject) => {
    renderStream.on('data', chunk => {
      if (firstChunk && context.initialState) {
        resolve(str(`<script>window.__INITIAL_STATE__=${serialize(context.initialState, {isJSON: true})}</script>${chunk.toString()}`))
        firstChunk = false
      } else {
        resolve(str(chunk.toString()))
      }
    })
    renderStream.on('error', (err) => {
      reject(err)
    })
  }))

  // if there are rest chunks
  ctx.body.append(renderStream)

  ctx.body.append(str(`<script src="${assets.main.js}"></script></body></html>`))
})

const port = process.env.NODE_PORT || 5000
app.listen(port, () => {
  console.log(`==> Listening at http://localhost:${port}`)
})
