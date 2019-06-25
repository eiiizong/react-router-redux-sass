import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.scss';

import Home from '../../views/Home'

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
        <Route exact path='/home' component={Home}></Route>
      </Router>
    );
  }
}

export default App;
