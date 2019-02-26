import React from 'react';
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import Routes from '../components/Routes';

export default () => (req, res) => {
  res.send(`
      <html>
      <head>
        <link rel="stylesheet" href="/main.css"> <!--样式标签说明开发环境中 webpack-dev-middleware 也需要在内存中生成独立的文件，只是没写文件而已-->
        <title>Hello Title</title>
      </head>
      <body>
          <div id="react-root">${renderToString(
            <StaticRouter location={req.path} context={{}}>
              <Routes />
            </StaticRouter>
          )}</div>
          <script src="/vendors~main-bundle.js"></script>
          <script src="/main-bundle.js"></script>
      </body>
      </html>
    `);
}