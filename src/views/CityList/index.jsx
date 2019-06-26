import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../utils/axios';

import './index.scss';
import logoIMG from '../../assets/images/logo-big.png'
// import Hello from '../../components/Hello'

class CityList extends Component {
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
							country.map(item => {
								return (
									<li className="" key={item.name_en}>
										<div className="img-wrapper">
											<img src={item.img} alt={item.name} />
										</div>
										<div className="info">
											<p>
												<span>{item.name}</span>
												<span>{item.name_en}</span>
											</p>
											<div className="btn-wrapper">
												<Link to={{
													pathname: '/typelist',
													query: {
														cityName: item.name
													}
												}}>
													<span className="bg"></span>
													<span>点击进入</span>
												</Link>
											</div>
										</div>
									</li>
								)
							})
						}
					</ul>
				</div>
			</div>
		);
	}
}

export default CityList;
