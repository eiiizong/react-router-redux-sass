import React, { Component } from 'react';
import axios from '../../utils/axios';

import './index.scss';
import logoIMG from '../../assets/images/logo-big.png'

import MaskHintContainer from '../../containers/MaskHintContainer'
import CityCardContainer from '../../containers/CityCardContainer'

class CityList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			country: []
		}
	}
	componentDidMount () {
		console.log(this)
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
										<CityCardContainer className={index % 2 === 1 ? 'reverse' : 'common'} data={item} history={this.props.history}></CityCardContainer>
									</li>
								)
							})
						}
					</ul>
				</div>
				{/* 遮罩层提示 */}
				<MaskHintContainer keyWord='cityListMaskHint'></MaskHintContainer>
			</div>
		);
	}
}

export default CityList;
