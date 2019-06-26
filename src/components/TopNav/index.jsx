import React, { Component } from 'react';

import './index.scss'

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'E'
    }
  }
  render () {
    return (
      <div className="top-nav">
        <div className="left">
          <i className="icon icon-back"></i>
        </div>
        <div className="center">rightText</div>
        <div className="right">
          <i className="icon icon-filtrate"></i>
          <span v-if="rightText">rightText</span>
        </div>
      </div>
    );
  }
}

export default TopNav;