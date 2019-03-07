import express from 'express';
import proxy from 'http-proxy-middleware';
import Loadable from 'react-loadable';
import setUpDevServer from './setUpDevServer';
import setUpProdServer from './setUpProdServer';

const server = express();

const startListening = () => {
  // heroku 会生成一个端口，如果在开发环境，我们使用 8080
  const PORT = process.env.PORT || 8080;

  Loadable.preloadAll().then(() => {
    server.listen(PORT, () => {
      console.log(`Server is listening on http://localhost:${PORT}`);
    });
  });
};

let setUpProxy;

setUpProxy = () => {
  server.use('/api', proxy({
    target: 'http://192.168.1.174',
    changeOrigin: true,
    headers: {
      "Connection": "keep-alive"
    }
  }));
};

// noinspection JSUnusedGlobalSymbols
const buildingAssets = {
  server,
  setUpProxy,
  startListening
};

const isProd = process.env.NODE_ENV === "production";
const isDev = !isProd;

isDev ? setUpDevServer(buildingAssets) : setUpProdServer(buildingAssets);