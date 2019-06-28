import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

import IMGIconGovernment from '../../assets/images/icon-government.png'
import IMGIconBusiness from '../../assets/images/icon-business.png'

class ChoiceBG extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					img: IMGIconGovernment,
					name: '政府',
					name_en: 'Government'
				},
				{
					img: IMGIconBusiness,
					name: '企业',
					name_en: 'Business'
				}
			]
		}
	}
	componentDidMount () {

	}

	render () {
		const data = this.state.data
		console.log(data)
		const linkTo = {
			pathname: '/list'
		}
		return (
			<div className='choice'>
				<div className="content">
					<nav>
						<ul>
							{
								data.map(item => {
									return (
										<li key={item.name_en}>
											<Link className="link" to={linkTo}>
												<div className="border"></div>
												<div className="bgc">
													<div className="left">
														<img src={item.img} alt={item.name} />
													</div>
													<div className="right">
														<div className="name">{item.name}</div>
														<div className="desc">{item.name_en}</div>
													</div>
												</div>
											</Link>
										</li>
									)
								})
							}
						</ul>
					</nav>
				</div>
			</div>
		);
	}
}

export default ChoiceBG;
