import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
    data: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props);
    this.state = {
      name: 'E'
    }
  }
  componentDidMount () { }
  render () {
    const linkTo = {
      pathname: `/list`,
      param: {
        city_name: "111"
      }
    }
    return (
      <Link className={style.card} to={linkTo}>
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
      </Link>
    );
  }
}

export default SmallCard;