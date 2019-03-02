import React from 'react';
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import Routes from '../components/Routes';

import { flushChunkNames } from "react-universal-component/server";
import flushChunks from 'webpack-flush-chunks';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';

export default ({ clientStats }) => (req, res) => {
  const modules = [];
  const app = renderToString(
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <StaticRouter location={req.path} context={{}}>
        <Routes />
      </StaticRouter>
    </Loadable.Capture>
  );

  // const stats = require('../../data/react-loadable.json');
  // const bundles = getBundles(stats, modules);

  const { js, styles, cssHash } = flushChunks(clientStats, {
    chunkNames: flushChunkNames()
  });

  res.send(`
      <html>
      <head>
        ${styles}
        <title>Hello Title</title>
      </head>
      <body>
          <div id="react-root">${app}</div>
         
          ${js}
          ${cssHash}
      </body>
      </html>
    `);
}