import React, { Component } from 'react';

import './index.scss'

class SmallCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'E'
    }
  }
  componentDidMount () { }
  render () {
    return (
      <div className="small-card">
        <div className="bg-border"></div>
        <div className="bg-color">
          <div className="left">
            <img src={this.props.data.img} alt={this.props.data.cate} />
          </div>
          <div className="right">
            <div className="name">{this.props.data.cate}</div>
            <div className="desc">共{this.props.data.cnt}项</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SmallCard;