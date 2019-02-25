import express from 'express';
import path from 'path';

const server = express();

const isProd = process.env.NODE_ENV === "production";

if (!isProd) {
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
}

// 开发环境是 webpack-dev-middleware 从内存中 serve files，
// 生产环境才是 express static middleware 从磁盘上 serve files
const expressStaticGzip = require('express-static-gzip');

server.use(expressStaticGzip('dist'));

const PORT = process.env.PORT || 8080; // heroku 会生成一个端口，如果在开发环境，我们使用 8080
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});