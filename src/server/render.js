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
    
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
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
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </body>
    </html>
  `);
}