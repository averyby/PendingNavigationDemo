const fs = require('fs');
const path = require('path');
const nodeModules = path.resolve(__dirname, '../node_modules');
// externals 是告诉 webpack 在进行服务端编译时，哪些 npm 模块不进行处理。
// 这通常是 node 的内置模块。
// 然而，有的 npm 模块使用了 ES6 的模块语法，此时 webpack 必须要对它处理，因为
// node 端是不识别 import/export 的，这里我们手动指定哪些需要被 webpack 处理。
// 就拿 lodash-es 来说，如果我们去掉 lodash-es，然而在组件里引入了，那么服务端
// 编译时就会报如下错：

/*export { default as add } from './add.js';
^^^^^^

SyntaxError: Unexpected token export*/

const externals = fs
  .readdirSync(nodeModules)
  .filter(
    x => !/\.bin|react-universal-component|webpack-flush-chunks|lodash-es/.test(x))
  .reduce((externals, mod) => {
    externals[mod] = `commonjs ${mod}`;
    return externals;
  }, {});

externals['react-dom/server'] = 'commonjs react-dom/server';
module.exports = externals;