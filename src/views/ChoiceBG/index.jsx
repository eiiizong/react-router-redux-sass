import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getUrlParams from '../../utils/getUrlParams';
import './index.scss';

import IMGIconGovernment from '../../assets/images/icon-government.png'
import IMGIconBusiness from '../../assets/images/icon-business.png'

class ChoiceBG extends Component {
	constructor(props) {
		super(props);
		this.state = {
			city_name: '',
			type: 0,
			data: [
				{
					id: 1,
					img: IMGIconGovernment,
					name: '政府',
					name_en: 'Government'
				},
				{
					id: 2,
					img: IMGIconBusiness,
					name: '企业',
					name_en: 'Business'
				}
			]
		}
	}
	componentDidMount () {
		const params = getUrlParams(this.props.location.search)
		const { city_name, type } = params
		this.setState({
			city_name,
			type
		})
	}

	render () {
		const { data, type, city_name } = this.state

		const linkTo = (id) => {
			return {
				pathname: `/list?type=${type}&city_name=${city_name}&nature=${id}`
			}
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
											<Link className="link" to={linkTo(item.id)}>
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
