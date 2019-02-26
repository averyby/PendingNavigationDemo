import React from 'react';
import ReactDOMServer from "react-dom/server";
import AppRoot from "../components/AppRoot";

export default () => (req, res) => {
  const html = ReactDOMServer.renderToString(<AppRoot />);
  res.send(`
      <html>
      <head>
        <link rel="stylesheet" href="/main.css"> <!--样式标签说明开发环境中 webpack-dev-middleware 也需要在内存中生成独立的文件，只是没写文件而已-->
        <title>Hello Title</title>
      </head>
      <body>
          <div id="react-root">${html}</div>
          <script src="/vendors~main-bundle.js"></script>
          <script src="/main-bundle.js"></script>
      </body>
      </html>
    `);
}