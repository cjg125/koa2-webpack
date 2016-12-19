const webpack = require('webpack')
const compose = require('koa-compose')
const devMiddleware = require('./devMiddleware')
const hotMiddleware = require('./hotMiddleware')

module.exports = (opts = {}) => {
  let config = opts.config
  let compiler = webpack(config)

  let dev = Object.assign({
    publicPath: config.output.publicPath
  }, opts.dev || {})

  let hot = opts.hot || {}

  return compose([
    devMiddleware(compiler, dev, opts.success),
    hotMiddleware(compiler, hot)
  ])
}