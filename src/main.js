require('@babel/register');

// 为了支持 index.html 模板改了之后浏览器能够自动刷新，需要在 js 里显式地 require index.html。
// 但是对于处理 index.html 中的 img 的 src 地址来说，即使没有在 js 里 require index.html，img 的
// src 地址仍然会得到 html-loader 的处理。这说明 html-webpack-plugin 生成的 html 会被 html-loader
// 处理。然而，如果不在 js 里显式 require index.html，则 hmr 无法对 index.html 的改动有感知。require
// index.html 有点相当于将 html 纳入了静态资源的范畴。

// 如果不在 js 里显式 require index.html，如果改了 index.html，webpack-dev-server 或者 webpack-dev-middleware
// 还是会感知到这种变化并作出重新构建的（控制台可以看到动静），因为 html-webpack-plugin 使得
// index.html 成为了它们跟踪的资源。但是浏览器并不会自动刷新。

require('./index.html');
require('./app');

console.log(`Environment is ${process.env.NODE_ENV}`);