import express from 'express';
import path from 'path';

const server = express();

const webpack = require('webpack');
const config = require('../../config/webpack.dev');
const compiler = webpack(config);

const webpackDevMiddleware =
  require('webpack-dev-middleware')(
    compiler,
    config.devServer
  );

const webpackHotMiddleware =
  require('webpack-hot-middleware')(compiler);

server.use(webpackDevMiddleware);
server.use(webpackHotMiddleware);

// 开发环境是 webpack-dev-middleware 从内存中 serve files，
// 生产环境才是 express static middleware 从磁盘上 serve files
const staticMiddleware = express.static('dist');

server.use(staticMiddleware);

server.listen(8080, () => {
  console.log('Server is listening');
});