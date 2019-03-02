import { Link, Route, Switch } from "react-router-dom";
import React from 'react';
import About from './About';
import Gallery from './Gallery';
import Loadable from 'react-loadable';
// import Article from './Article';

const Article = Loadable({
  loader: () => import(/* webpackChunkName: "Article" */'./Article'),
  loading: () => <div>Loading...</div>
});

export default class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  handleClick = () => {
    this.setState({
      show: true
    });
  };

  render() {
    return (
      <div>
        <div className="nav">
          <Link to="/">Gallery</Link>
          <Link to="/about">About</Link>
          <Link to="/article">Article</Link>
        </div>

        <button onClick={this.handleClick}>show article</button>
        {this.state.show ? <Article /> : null}
        {/*<Switch>*/}
          {/*<Route exact path="/">*/}
            {/*<Gallery />*/}
          {/*</Route>*/}
          {/*<Route path="/about">*/}
            {/*<About />*/}
          {/*</Route>*/}
          {/*<Route path="/article">*/}
            {/*/!*<Article />*!/*/}
          {/*</Route>*/}
        {/*</Switch>*/}
      </div>
    );
  }
}