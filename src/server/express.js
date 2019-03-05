import express from 'express';
import proxy from 'http-proxy-middleware';
import React from 'react';
import Loadable from 'react-loadable';
import webpack from 'webpack';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';
import APPCONFIG from '../../appConfig.json';

import configDevClient from '../../config/webpack.dev-client';
import configDevServer from '../../config/webpack.dev-server';
import configProdClient from '../../config/webpack.prod-client';
import configProdServer from '../../config/webpack.prod-server';

const server = express();

const isProd = process.env.NODE_ENV === "production";
const isDev = !isProd;

const startListening = () => {
  // heroku 会生成一个端口，如果在开发环境，我们使用 8080
  const PORT = process.env.PORT || 8080;

  Loadable.preloadAll().then(() => {
    server.listen(PORT, () => {
      console.log(`Server is listening on http://localhost:${PORT}`);
    });
  });
};

if (isDev) {
  // 开发环境下，使用 webpack 函数启动打包过程，生成客户端和服务端的资源包
  const compiler = webpack([configDevClient, configDevServer]);

  const clientCompiler = compiler.compilers[0];
  const serverCompiler = compiler.compilers[1];

  // require('webpack-mild-compile')(compiler);

  // 使用 webpack-dev-middleware 来从内存中 serve 静态资源。
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
  server.use('/api', proxy({
    target: 'http://192.168.1.174',
    changeOrigin: true,
    headers: {
      "Connection": "keep-alive"
    }
  }));
  if (APPCONFIG.type === 'SSR') {
    server.use(webpackHotServerMiddleware(compiler)) // 将会 serve 服务端渲染的 html
  }

  console.log('Middleware enabled.');

  webpackDevMiddleware.waitUntilValid(startListening);
} else {
  server.use('/api', proxy({
    target: 'http://192.168.1.174',
    changeOrigin: true,
    headers: {
      "Connection": "keep-alive"
    }
  }));
  // 生产环境下，使用 webpack 函数启动打包过程，生成客户端和服务端的资源包
  webpack([configProdClient]).run((err, stats) => {
    if (APPCONFIG.type === 'SSR') {
      // 等客户端构建好了再开始服务端构建，因为服务端代码里需要读取客户端构建过程中
      // 生成的文件 react-loadable.json
      webpack([configProdServer]).run(() => {
        console.log(
          stats.toString({
            colors: true
          })
        );
        const clientStats = stats.toJson().children[0];
        const render = require('../../build/prod-server-bundle.js').default;
        // 开发环境是 webpack-dev-middleware 从内存中 serve files，
        // 生产环境才是 express static middleware 从磁盘上 serve files
        const expressStaticGzip = require('express-static-gzip');

        server.use(expressStaticGzip('dist', {
          enableBrotli: true
        }));


        // 注意静态资源的中间件必须在 html 的之前，因为 Html 的中间件是通配符路由，如果
        // html 的中间件在前面，那么页面上的静态资源请求将会受到 html 响应。
        server.use(render({ clientStats }));

        startListening();
      });
    } else { // For SPA
      const expressStaticGzip = require('express-static-gzip');

      server.use(expressStaticGzip('dist', {
        enableBrotli: true
      }));

      startListening();
    }
  });
}