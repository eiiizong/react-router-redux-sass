import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './index.scss';

import Home from '../../views/Home'
import NotFound from '../../views/NotFound'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tree: ''
    }
  }
  render() {
    return (
      <Router>
        <Switch>
        <Route exact path='/home' component={Home}></Route>
        <Route component={NotFound}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
