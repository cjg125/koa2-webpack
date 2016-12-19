const devMiddleware = require('webpack-dev-middleware')
module.exports = (compiler, opts = {}, callback) => {
  const middleware = devMiddleware(compiler, opts)
  middleware.waitUntilValid(function() {
    callback && callback()
  })
  return async(ctx, next) => {
    await middleware(ctx.req, {
      end: (content) => {
        ctx.body = content
      },
      setHeader: (...args) => {
        ctx.set.apply(ctx, args)
      }
    }, next)
  }
}