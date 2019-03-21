import React from 'react';
import { hot } from 'react-hot-loader/root';
import './AppRoot.scss';


class AppRoot extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <nav className="nav-bar row">
          <a className="col d-none d-lg-block">网站首页</a>
          <a className="col">关于我们</a>
          <a className="col">产品中心</a>
          <a className="col d-none d-sm-block">技术服务</a>
          <a className="col">在线购买</a>
          <a className="col d-none d-md-block">新闻中心</a>
          <a className="col">联系我们</a>
          <a className="col d-none d-lg-block">防伪查询</a>
        </nav>
      </div>
    );
  }
}

export default hot(AppRoot);