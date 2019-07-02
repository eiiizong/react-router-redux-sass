import React, { Component } from 'react';

import PropTypes from 'prop-types';

import hintImg from './hint.png'
import style from './index.module.scss'

// 遮罩层 提示

class MaskHint extends Component {
  static propTypes = {
    handleShowMask: PropTypes.func.isRequired
  }
  handleShowMask = () => {
    if (this.props.handleShowMask) {
      this.props.handleShowMask()
    }
  }
  render () {
    return (
      <div className={style['mask-hint']}>
        <div className={style.content}>
          <div className={style['img-wrapper']}>
            <img src={hintImg} alt="hint img" />
          </div>
          <div className={style['btn-wrapper']}>
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