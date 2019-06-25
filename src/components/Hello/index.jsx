import React, { Component } from 'react';

import './index.scss'

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'E'
    }
  }
  render () {
    return (
      <div className="hello">hello Eiiizong</div>
    );
  }
}

export default Hello;