const devMiddleware = require('webpack-dev-middleware')
module.exports = (compiler, opts = {}) => {
  const middleware = devMiddleware(compiler, opts)
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
