#  koa2 middleware for webpack (HMR)
## Install

```bash
$ npm install --save koa@next
$ npm install --save koa2-webpack
```

## Usage

```js
const Koa = require('koa')
const app = new Koa()
const webpackHRM = require('koa2-webpack')

app.use(webpackHRM({
  config: require('/* ... webpack.config.js */'),
  dev:{
    /* Config Options */
  },
  hot:{
    /* Config Options */
  }
}))

```

## Examples
```sh
$ git clone https://github.com/cjg125/koa2-webpack.git demo
$ cd demo
$ npm install
$ npm start # node --harmony example/
# http://127.0.0.1:8888/
```

## Config Options

[webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware)
[webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware)

