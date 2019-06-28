import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './index.scss'

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
      <Link className="small-card" to={linkTo}>
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
      </Link>
    );
  }
}

export default SmallCard;