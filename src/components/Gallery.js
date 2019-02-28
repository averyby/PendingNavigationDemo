import React from 'react';
import '../css/Gallery.css';

const getBundle = () => {
  // react-universal-component 使得动态 import 时无需写 magic comment
  // 使用模块名
  import('lodash').then(_ => {
    console.log('imported', _);
  });
};

export default () => (
  <div>
    <h1 onClick={getBundle}>Gallery</h1>
  </div>
);