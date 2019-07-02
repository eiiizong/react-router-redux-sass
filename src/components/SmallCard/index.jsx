import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './index.module.scss'

class SmallCard extends Component {
  static defaultProps = {
    data: {
      cate: "服务实体经济服务实体经济",
      cnt: "6",
      img: "http://www.kbftech.cn/city/img/icon/fwst.png"
    }
  }
  static propTypes = {
    data: PropTypes.object.isRequired,
    linkToDemandList: PropTypes.func.isRequired
  }
  linkToDemandList = () => {
    const { linkToDemandList } = this.props
    if (typeof linkToDemandList === 'function' && linkToDemandList) {
      linkToDemandList()
    }
  }
  render () {
    return (
      <div className={style.card} onClick={this.linkToDemandList}>
        <div className={style.bgBorder}></div>
        <div className={style.bgColor}>
          <div className={style.left}>
            <img src={this.props.data.img} alt={this.props.data.cate} />
          </div>
          <div className={style.right}>
            <div className={style.name}>{this.props.data.cate}</div>
            <div className={style.desc}>共{this.props.data.cnt}项</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SmallCard;