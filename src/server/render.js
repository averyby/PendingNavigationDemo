import React from 'react';
import { renderToString } from "react-dom/server";
import { renderRoutes, matchRoutes } from "react-router-config";
import { StaticRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import routes from '../routes';
import createStore from '../helpers/createStore';
import { flushChunkNames } from "react-universal-component/server";
import flushChunks from 'webpack-flush-chunks';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import stats from '../../react-loadable.json';
import PendingNavDataLoader from '../components/PendingNavDataLoader/PendingNavDataLoader';


// console.log('stats', stats);
const store = createStore();

export default ({ clientStats }) => (req, res) => {
  const promises = matchRoutes(routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  }).map(promise => {
    if (promise) {
      return new Promise((resolve, reject) => {
        promise.then(resolve).catch(resolve);
      });
    }
  });

  Promise.all(promises).then(() => {
    const modules = [];
    const app = renderToString(
      <Loadable.Capture report={moduleName => modules.push(moduleName)}>
        <Provider store={store}>
          <StaticRouter location={req.path} context={{}}>
            <PendingNavDataLoader routes={routes}>
              {renderRoutes(routes)}
            </PendingNavDataLoader>
          </StaticRouter>
        </Provider>
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
        <style type="text/css">
            html { display: none; }
        </style>
        <title>Bootstrap Starter</title>
    </head>
    <body>
    <div id="react-root">${app}</div>
    <script>
        window.INITIAL_STATE = ${JSON.stringify(store.getState())}
    </script>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"
            integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
            crossorigin="anonymous"></script>
      ${jsBundles.map(bundle => {
      return `<script src="${bundle.publicPath}"></script>`
    }).join('\n')}
      
      ${js}
      <script type="text/javascript">
        $(document).ready(function() {    // EDIT: From Adam Zerner's comment below: Rather use load: $(window).on('load', function () {...});
          $('html').show();  
        });  
      </script>
      ${cssHash}
    </body>
    </html>
  `);
  });
}