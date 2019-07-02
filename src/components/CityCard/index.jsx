import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './index.module.scss'

class CityCard extends Component {
  static propTypes = {
    className: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    linkToDemandPage: PropTypes.func.isRequired
  }
  static defaultProps = {
    className: 'common',
    data: {
      img: "http://www.kbftech.cn/city/img/Chengdu.jpg",
      name: "成都市",
      name_en: "Chengdu"
    }
  }
  componentDidMount () {
  }
  linkToDemandPage = () => {
    const { linkToDemandPage } = this.props
    if (linkToDemandPage) {
      linkToDemandPage()
    }
  }
  render () {
    const { className, data } = this.props
    let addClassName;
    if (className === 'common') {
      addClassName = style.common
    } else {
      addClassName = style.reverse
    }
    return (
      <div className={style.card + ' ' + addClassName}>
        <img src={data.img} alt={data.name} />
        <div className={style.wrapper}>
          <p>
            <span>{data.name}</span>
            <span className={style['name-zh']}>{data.name_en}</span>
          </p>
          <div className={style.link} onClick={this.linkToDemandPage}>
            <span className={style.bg}></span>
            <span>立即进入</span>
          </div>
        </div>
      </div>
    );
  }
}

export default CityCard;