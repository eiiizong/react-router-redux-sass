import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import './index.scss'

class CityCard extends Component {
  static propTypes = {
    className: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired
  }
  static defaultProps = {
    className: 'common',
    data: {
      img: "http://www.kbftech.cn/city/img/Chengdu.jpg",
      name: "成都市",
      name_en: "Chengdu"
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      name: 'E'
    }
  }
  componentDidMount () {
    console.log(this.props)
  }
  render () {
    const data = this.props.data
    const pathTo = {
      pathname: `/typelist`,
      param: {
        city_name: data.name
      }
    }
    return (
      <div className={this.props.className + ' city-card'}>
        <img src={data.img} alt={data.name} />
        <div className="inner-wrapper">
          <p className="city-name">
            <span className="name">{data.name}</span>
            <span className="name-zh">{data.name_en}</span>
          </p>
          <Link to={pathTo} className="link">
            <span className="bg"></span>
            <span>立即进入</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default CityCard;