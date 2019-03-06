import webpack from 'webpack';
import APPCONFIG from '../../appConfig.json';
import configProdClient from "../../config/webpack.prod-client";
import configProdServer from "../../config/webpack.prod-server";

export default ({
                  server,
                  setUpProxyServer,
                  startListening
                }) => {

  // 生产环境下，使用 webpack 函数启动打包过程，生成客户端和服务端的资源包
  webpack([configProdClient]).run((err, stats) => {
    if (APPCONFIG.type === 'SPA') {
      const expressStaticGzip = require('express-static-gzip');

      server.use(expressStaticGzip('dist', {
        enableBrotli: true
      }));

      startListening();
      return;
    }

    // 等客户端构建好了再开始服务端构建，因为服务端代码里需要读取客户端构建过程中
    // 生成的文件 react-loadable.json
    webpack([configProdServer]).run(() => {
      console.log(
        stats.toString({
          colors: true
        })
      );
      // 开发环境是 webpack-dev-middleware 从内存中 serve files，
      // 生产环境才是 express static middleware 从磁盘上 serve files
      const expressStaticGzip = require('express-static-gzip');

      server.use(expressStaticGzip('dist', {
        enableBrotli: true
      }));


      const clientStats = stats.toJson().children[0];
      const render = require('../../build/prod-server-bundle.js').default;
      // 注意静态资源的中间件必须在 html 的之前，因为 Html 的中间件是通配符路由，如果
      // html 的中间件在前面，那么页面上的静态资源请求将会受到 html 响应。
      server.use(render({ clientStats }));

      startListening();
    });

  });
}