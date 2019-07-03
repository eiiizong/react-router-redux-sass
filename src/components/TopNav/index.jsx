import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './index.module.scss'

class TopNav extends Component {
  static propTypes = {
    iconClassName: PropTypes.string,
    func: PropTypes.func,
    goback: PropTypes.func,
    title: PropTypes.string,
    rightText: PropTypes.string
  }
  handle = () => {
    if (this.props.func) {
      this.props.func()
    }
  }
  goBack = () => {
    if (this.props.goBack) {
      this.props.goBack()
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      name: 'E'
    }
  }
  render () {
    const props = this.props
    return (
      <div className={style.topNav}>
        <div className={style.left} onClick={this.goBack}>
          <i className="iconfont icon-back"></i>
        </div>
        {
          props.title ? <div className={style.center}>{props.title}</div> : null
        }
        <div className={style.right} onClick={this.handle}>
          {
            props.iconClassName ? <i className={'iconfont ' + props.iconClassName}></i> : null
          }
          {
            props.rightText ? <span>{props.rightText}</span> : null
          }
        </div>
      </div>
    );
  }
}

export default TopNav;