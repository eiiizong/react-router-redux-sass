import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import axios from '../../utils/axios';

import './index.scss';

import logoIMG from '../../assets/images/logo-big.png'
import contentIMG01 from '../../assets/images/index-01.jpg'

class DemandTypeList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			country: []
		}
	}
	componentWillMount () {
		console.log('typelist', this.props)
	}
	componentDidMount () {
		console.log('typelist', this.props.match.params.cityName)
		this.requestAPI()
	}
	requestAPI () {
		axios.post('/list/system').then(res => {
			if (res.status === 200 && res.data.status === "200") {
				const data = res.data
				this.setState({
					country: data.country
				})
				// console.log(data)
				// console.log(data.country)
			}
		})
	}
	render () {
		return (
			<div className="demand-type-list">
				DemandTypeList
			</div>
		);
	}
}

export default DemandTypeList;
