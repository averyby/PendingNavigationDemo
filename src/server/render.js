import React from 'react';
import { renderToString } from "react-dom/server";
import AppRoot from '../components/AppRoot';

import { flushChunkNames } from "react-universal-component/server";
import flushChunks from 'webpack-flush-chunks';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import stats from '../../react-loadable.json';

// console.log('stats', stats);

export default ({ clientStats }) => (req, res) => {
  const modules = [];
  const app = renderToString(
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <AppRoot />
    </Loadable.Capture>
  );

  const bundles = getBundles(stats, modules).filter(
    b => b && (b.publicPath.endsWith('.js') || (b.publicPath.endsWith('.css')))
  );
  const jsBundles = bundles.filter(b => b.publicPath.endsWith('.js'));
  const cssBundles = bundles.filter(b => b.publicPath.endsWith('.css'));
  // console.log('js bundles', jsBundles);
  // console.log('css bundles', cssBundles);
  // console.log('modules', modules);

  const { js, styles, cssHash } = flushChunks(clientStats, {
    chunkNames: flushChunkNames()
  });

  res.send(`
    <!doctype html>
    <html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
        ${cssBundles.map(bundle => {
          return `<link rel="stylesheet" href="${bundle.publicPath}">`  
        }).join('\n')}
        ${styles}
        <title>Bootstrap Starter</title>
    </head>
    <body>
    <div id="react-root">${app}</div>
      ${jsBundles.map(bundle => {
        return `<script src="${bundle.publicPath}"></script>`
      }).join('\n')}
      
      ${js}
      ${cssHash}
    </body>
    </html>
  `);
}