import express from 'express';
import React from 'react';
import webpack from 'webpack';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';

import configDevClient from '../../config/webpack.dev-client';
import configDevServer from '../../config/webpack.dev-server';
// import configProdClient from '../../config/webpack.prod-client';
// import configProdServer from '../../config/webpack.prod-server';

const server = express();

const isProd = process.env.NODE_ENV === "production";
const isDev = !isProd;

if (isDev) {
  const compiler = webpack([configDevClient, configDevServer]);

  const clientCompiler = compiler.compilers[0];
  const serverCompiler = compiler.compilers[1];

  // require('webpack-mild-compile')(compiler);

  const webpackDevMiddleware =
    require('webpack-dev-middleware')(
      compiler,
      configDevClient.devServer
    );

  const webpackHotMiddleware =
    require('webpack-hot-middleware')(
      clientCompiler,
      configDevClient.devServer
    );

  server.use(webpackDevMiddleware);
  server.use(webpackHotMiddleware);
  server.use(webpackHotServerMiddleware(compiler));

  console.log('Middleware enabled.');
} else {
  const render = require('./render');
  // 开发环境是 webpack-dev-middleware 从内存中 serve files，
// 生产环境才是 express static middleware 从磁盘上 serve files
  const expressStaticGzip = require('express-static-gzip');

  server.use(expressStaticGzip('dist', {
    enableBrotli: true
  }));

  server.use(render());
}


const PORT = process.env.PORT || 8080; // heroku 会生成一个端口，如果在开发环境，我们使用 8080
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});