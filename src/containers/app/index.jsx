import React, { Component, Fragment } from 'react';
import './index.scss';

import Hello from '../../components/Hello'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tree: ''
    }
  }
  render () {
    return (
      <Fragment>
        12233
        < Hello />
      </Fragment>
    );
  }
}

export default App;
