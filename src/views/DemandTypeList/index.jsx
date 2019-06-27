import React, { Component, Fragment } from 'react';
// import { Link } from 'react-router-dom';

import TopNav from '../../components/TopNav';
import SmallCard from '../../components/SmallCard';
import Search from '../../components/Search';

import axios from '../../utils/axios';
import qs from 'qs'

import './index.scss';
import logoIMG from '../../assets/images/logo-big.png'

class DemandTypeList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			country: [],
			demand_cnt: 0,
			demand_list: [],
			supply_cnt: 0,
			supply_list: [],
			activeList: [],
			isShowSearch: true
		}
	}
	componentWillMount () {
		console.log('typelist', this.props)
	}
	componentDidMount () {
		const cityName = this.props.location.query ? this.props.location.query.cityName : ''
		this.requestAPI(cityName)
	}
	requestAPI (cityName) {
		const data = {
			'city_name': cityName || '成都市'
		}
		axios.post('/list/city', qs.stringify(data)).then(res => {
			if (res.status === 200 && res.data.status === "200") {
				const { demand_cnt, demand_list, supply_cnt, supply_list } = res.data
				this.setState({
					demand_cnt,
					demand_list,
					supply_cnt,
					supply_list
				})
				console.log(res.data)
			}
		}).catch(err => {
			console.log(err)
		})
	}
	render () {
		// const activeList = this.state.activeList
		const activeList = this.state.demand_list

		return (
			<div className="demand-type-list">
				<div className="header">
					<TopNav></TopNav>
				</div>
				<div className="content">
					{
						this.state.isShowSearch ?
							<Search></Search> :
							<Fragment>
								<div className="top">
									<div className="img-wrapper">
										<img src={logoIMG} alt="logo" />
									</div>
									<div className="nav">
										<ul>
											<li className="active">
												<div className="link">
													<span className="bg"></span>
													<span>需求清单(6)</span>
												</div>
											</li>
											<li>
												<div className="link">
													<span className="bg"></span>
													<span>供给清单(7)</span>
												</div>
											</li>
										</ul>
									</div>
								</div>
								<div className="main">
									<div className="card-wrapper">
										{
											activeList.map((item, index) => {
												return (
													<div className="card-item" key={item.cate + index}>
														<SmallCard data={item}></SmallCard>
													</div>
												)
											})
										}
									</div>
								</div>
							</Fragment>
					}
				</div>
			</div>
		);
	}
}

export default DemandTypeList;
