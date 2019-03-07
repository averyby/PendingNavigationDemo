import webpack from 'webpack';
import APPCONFIG from '../../appConfig.json';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';
import configDevClient from "../../config/webpack.dev-client";
import configDevServer from "../../config/webpack.dev-server";

export default ({
                  server,
                  setUpProxy,
                  startListening
                }) => {

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
  if (typeof setUpProxy === 'function') {
    setUpProxy();
  }

  if (APPCONFIG.type === 'SSR') {
    server.use(webpackHotServerMiddleware(compiler)) // 将会 serve 服务端渲染的 html
  }

  console.log('Middleware enabled.');

  webpackDevMiddleware.waitUntilValid(startListening);
}