import React, { Component } from 'react';

import PropTypes from 'prop-types';

import CityCard from '../../components/CityCard'

class CityCardContainer extends Component {
  static propTypes = {
    className: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount () { }

  linkToDemandPage = () => {
    const { data, history } = this.props
    const pathname = encodeURI(`/typelist?city_name=${data.name}`)
    console.log(pathname)
    const path = {
      pathname
    }
    history.push(path)
  }

  render () {
    const { className, data } = this.props
    return (
      <CityCard className={className} data={data} linkToDemandPage={this.linkToDemandPage}></CityCard>
    );
  }
}


export default CityCardContainer