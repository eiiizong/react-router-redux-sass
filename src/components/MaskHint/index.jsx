import React, { Component } from 'react';

import hintImg from './hint.png'

import './index.scss'

// 遮罩层 提示

class MaskHint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowMask: true
    }
  }
  handleShowMask = () => {
    if (this.props.handleShowMask) {
      this.props.handleShowMask()
    }
  }
  render () {
    return (
      <div className="mask-hint">
        <div className="content">
          <div className="img-wrapper">
            <img src={hintImg} alt="hint img" />
          </div>
          <div className="btn-wrapper">
            <button onClick={this.handleShowMask}>
              <span>知道了</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MaskHint;