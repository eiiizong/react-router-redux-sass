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
			isShowSearch: false,
			navIndex: 0,
			rightText: '筛选',
			iconClassName: 'icon-filter'
		}
	}
	componentWillMount () {

	}
	componentDidMount () {
		let cityName;
		if (this.props.location.param) {
			cityName = this.props.location.param.city_name
		} else {
			cityName = this._getCityNameToLocalStorage()
		}
		if (!!cityName) {
			this._saveCityNameToLocalStorage(cityName)
		}

		this.requestAPI(cityName)
		console.log('this.props => ', this.props)
	}
	changeNav = (index) => {
		this.setState({
			navIndex: index
		})
	}
	handleTopNav = () => {
		let rightText
		let iconClassName
		if (!this.state.isShowSearch) {
			rightText = '关闭'
			iconClassName = ''
		} else {
			rightText = '筛选'
			iconClassName = 'icon-filter'
		}
		this.setState({
			isShowSearch: !this.state.isShowSearch,
			rightText,
			iconClassName,
		})

	}
	goBack = () => {
		console.log(this.props)
		this.props.history.goBack()
	}
	_getCityNameToLocalStorage () {
		return localStorage.getItem('CITY_NAME')
	}
	_saveCityNameToLocalStorage (value) {
		localStorage.setItem('CITY_NAME', value)
	}
	requestAPI (cityName) {
		const data = {
			'city_name': cityName
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
		let data;
		if (this.state.navIndex === 0) {
			data = this.state.demand_list
		} else {
			data = this.state.supply_list
		}
		return (
			<div className="demand-type-list">
				<div className="header">
					<TopNav iconClassName={this.state.iconClassName} rightText={this.state.rightText} func={this.handleTopNav} goBack={this.goBack}></TopNav>
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
											<li className={this.state.navIndex === 0 ? 'active' : ''} onClick={this.changeNav.bind(this, 0)}>
												<div className="link">
													<span className="bg"></span>
													<span>需求清单({this.state.demand_cnt})</span>
												</div>
											</li>
											<li className={this.state.navIndex === 1 ? 'active' : ''} onClick={this.changeNav.bind(this, 1)}>
												<div className="link">
													<span className="bg"></span>
													<span>供给清单({this.state.supply_cnt})</span>
												</div>
											</li>
										</ul>
									</div>
								</div>
								<div className="main">
									<div className="card-wrapper">
										{
											data.map((item, index) => {
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