import React, { Component } from 'react';
import axios from '../../utils/axios';

import './index.scss';
import logoIMG from '../../assets/images/logo-big.png'

import MaskHint from '../../components/MaskHint'
import CityCard from '../../components/CityCard'

class CityList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			country: [],
			isShowMask: false
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
				console.log(data)
			}
		}).catch(err => {
			console.log(err)
		})
	}
	handleShowMask = () => {
		this.setState({
			isShowMask: !this.state.isShowMask
		})
	}
	render () {
		const country = this.state.country
		return (
			<div className="city-list">
				<div className="img-wrapper">
					<img src={logoIMG}
						alt="logo" />
				</div>
				<div className="content">
					<ul>
						{
							country.map((item, index) => {
								return (
									<li key={item.name_en}>
										<CityCard className={index % 2 === 1 ? 'reverse' : 'common'} data={item} ></CityCard>
									</li>
								)
							})
						}
					</ul>
				</div>
				{
					this.state.isShowMask ? <MaskHint handleShowMask={this.handleShowMask}></MaskHint> : null
				}
			</div>
		);
	}
}

export default CityList;
