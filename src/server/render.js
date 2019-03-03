import React from 'react';
import { renderToString } from "react-dom/server";
import AppRoot from '../components/AppRoot';

import { flushChunkNames } from "react-universal-component/server";
import flushChunks from 'webpack-flush-chunks';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';

export default ({ clientStats }) => (req, res) => {
  const modules = [];
  const app = renderToString(
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <AppRoot />
    </Loadable.Capture>
  );

  /*
    ${bundles.map(bundle => {
              return `<script src="${bundle.publicPath}"></script>`
  }).join('\n')}
  */

  const stats = require('../../data/react-loadable.json');
  const bundles = getBundles(stats, modules).filter(b => b.publicPath.endsWith('.js'));
  console.log('bundles', bundles);
  console.log('modules', modules);

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
          ${bundles.map(bundle => {
    return `<script src="${bundle.publicPath}"></script>`
  }).join('\\n')}
          ${js}
          ${cssHash}
      </body>
      </html>
    `);
}