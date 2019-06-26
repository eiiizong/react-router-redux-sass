import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import axios from '../../utils/axios';

import './index.scss';

import logoIMG from '../../assets/images/logo-big.png'
import contentIMG01 from '../../assets/images/index-01.jpg'

class ChoiceBG extends Component {
	constructor(props) {
		super(props);
		this.state = {
			country: []
		}
	}
	componentDidMount () {
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
			<div className="choice-B-or-G">
				choice-B-or-G
			</div>
		);
	}
}

export default ChoiceBG;
