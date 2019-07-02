import React, { Component } from 'react';
import { connect } from 'react-redux'

import PropTypes from 'prop-types';
import { CITY_NAME } from '../../constants'

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

  componentDidMount () {
    console.log(this.props)
  }

  linkToDemandPage = () => {
    const { data, history } = this.props
    const path = {
      pathname: '/typelist'
    }

    this.props.changeCityName(data.name)
    history.push(path)
  }

  render () {
    const { className, data } = this.props
    return (
      <CityCard className={className} data={data} linkToDemandPage={this.linkToDemandPage}></CityCard>
    );
  }
}


const createChangeCityNameAction = (value) => {
  return {
    type: CITY_NAME,
    city_name: value
  }
}

const mapDisPatchToProps = (dispatch, ownProps) => {
  return {
    changeCityName: (value) => {
      dispatch(createChangeCityNameAction(value))
    }
  }
}

export default connect(null, mapDisPatchToProps)(CityCardContainer)